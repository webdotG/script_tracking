
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoMonsLogingform } from '../../images/Logo/Logo_mons--blue.svg';
import axios from "axios";


const isEmail = (email) => /[a-z0-9]+@mons.ru/.test(email) //^(.+)@(.+)\.(.+)$

function LoggingForm({ onLogin }) {

	const navigate = useNavigate()

	const [showPassword, setShowPassword] = useState(false)

	const [emailInput, setEmailInput] = useState()
	const [passwordInput, setPasswordInput] = useState()

	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)

	const [formValid, setFormValid] = useState()
	const [succes, setSucces] = useState()


	const handleEmail = () => {
		if (!isEmail(emailInput)) {
			setEmailError(true)
			return
		}
		setEmailError(false)
	}

	const handlePassword = () => {
		if (!passwordInput || passwordInput.length < 2 || passwordInput.length > 4) {
			setPasswordError(true)
			return
		}
		setPasswordError(false)
	}

	const onEnter = async (e) => {
		e.stopPropagation()
		e.preventDefault()
		setSucces(null)
		try {
			if (emailError || passwordError) {
				navigate('/')
			} else {
				const response = await axios.post('/rooms', { emailInput })//`${process.env.REACT_APP_API_URL}
				console.log(response, emailInput)
				if (response.status === 200) {
					const data = response.data
					console.log('Ответ с сервера : ', data)
					console.log('emailInput : ', emailInput)
					onLogin(emailInput)
					console.log('navigate /todo')
					navigate('/todo');
				} else {
					navigate('/')
				}
			}
		} catch (error) {
			console.log(error)
		}

		if (emailError || !emailInput) {
			setFormValid('правильно ли вы ввели почту ?')
			return
		}
		if (passwordError || !passwordInput) {
			setFormValid('минимум 2 символа, максимум 4 символа')
			return
		}
		setFormValid(null)
		setSucces("загружаю программу")
		console.log(emailInput)
		console.log(passwordInput)
	}

	const handleClickShowPassword = () => setShowPassword((show) => !show)
	const handleMouseDownPassword = (e) => { e.preventDefault() }



	return (
		<>
			<Paper component="form" elevation={3} style={{ width: 400, height: 450, padding: "50px", margin: 'auto', marginTop: '100px' }}
			justifyContent= 'center'>
				<div style={{ width: "125px",  margin: 'auto', marginBottom:'50px'  }}>
					<LogoMonsLogingform />
				</div>
				<Box sx={{ width: 400, height: 300 }} display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' >
					<TextField style={{ width: "350px", fontSize: '27px' }}
						id="custom-css-outlined-input"
						error={emailError}
						label="email"
						value={emailInput}
						autoComplete="new-password"
						onChange={(event) => setEmailInput(event.target.value)}
						onBlur={handleEmail}
						variant="standard"
						placeholder='...........@mons.ru'
					/>
					<FormControl style={{ width: "350px", marginTop: "75px" }} variant="standard">
						<InputLabel error={passwordError} htmlFor="standard-adornment-password">password</InputLabel>
						<Input fullWidth
							id="standard-adornment-password"
							error={passwordError}
							type={showPassword ? "text" : "password"}
							value={passwordInput}
							autoComplete="new-password"
							onBlur={handlePassword}
							onChange={(event) => setPasswordInput(event.target.value)}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton aria-label='toggle password visibility'
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
					<Button style={{ width: "350px", marginTop: "75px", border: '2px solid #0C4E8C', color:'#0C4E8C', letterSpacing:'1.2px' }}
						onClick={onEnter} variant="outlined">
						войти
					</Button>
					<p style={{ width: '350px' }} displ='flex' > {formValid && <Alert severity="error">{formValid}</Alert>} </p>
					<p style={{ width: '350px' }} display='flex'> {succes && <Alert severity="success">{succes}</Alert>} </p>
				</Box>
			</Paper>
		</>
	)
}

export { LoggingForm }
import React, { useEffect, useState, useRef } from "react";
import { todoFilters, searchTodo } from 'store/slices/todoSlice'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import '../../index.css'
//================================
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { ReactComponent as LogoMonsLogingform } from '../../images/Logo/Logo_mons--blue.svg'
import TextField from '@mui/material/TextField';
//--------------------------------------------------
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled, alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
//====================================

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText('#FFFFFF'),
	backgroundColor: '#FFFFFF',
	'&:hover': {
		backgroundColor: '#003668',
		color: '#FFFFFF'
	},
}));

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(0),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		// padding: '25px',
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(5)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '125px',
			height: '35px',
			paddingBottom: '3px',
			fontSize: '18px',
			border: '2px solid  #003668 ',
			borderRadius: '10px',
			'&:focus': {
				width: '300px',
			},
		},
	},
}));

//================================================================================

const isEmail = (email) => /[a-z0-9]+@mons.ru/.test(email) //^(.+)@(.+)\.(.+)$


function ToDoList() {


	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [emailInput, setEmailInput] = useState()
	const [emailError, setEmailError] = useState(false)

	const handleEmail = () => {
		if (!isEmail(emailInput)) {
			setEmailError(true)
			return
		}
		setEmailError(false)
	}

	const { list, filteredList, } = useSelector(state => state.todo)

	const dispatch = useDispatch()

	console.log(list, filteredList)

	return (

		<Box className='main__wrapper' direction='column'>
			{/* ------------------------------------------search component start---------------------------------------- */}
			<Box className='search__wrapper' display='flex' justifyContent='center' style={{ width: '100%', marginTop: '25px' }}>
				<Search >
					<SearchIconWrapper>
						<SearchIcon style={{ width: '30px', height: '30px' }} />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Найти ..."
						inputProps={{ 'aria-label': 'search' }}
						onChange={(e) => { dispatch(searchTodo(e.target.value)) }}

					/>
				</Search>
			</Box>

			{/* -----------------------------------search component end------------------------------------------ 			 */}


			<Box className="todoList__wrapper" display="flex" direction="row">

				{/* ---------------------------------------sort btn start------------------------------------------ */}
				<Stack className='left-side'
					direction="column"
					style={{
						width: "300px",
						height: "300px",
						paddingTop: "50px",
						paddingBottom: "100px",
						paddingRight: "40px",
						paddingLeft: "15px",
					}}
					justifyContent="start"
					alignItems="center"
				>
					<Button
						onClick={() => dispatch(todoFilters({
							status: 'all'
						}))}
						style={{
							width: "200px",
							height: "50px",
							marginBottom: '30px',
							fontSize: "18px",
							padding: "10px",
							border: "5px solid #D7DCE1",
							borderRadius: "10px",
							color: "black",
							letterSpacing: "1px",
							boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
							position: 'relative',
						}}
						variant="outlined"
					>
						все
						<span style={{
							width: '45px',
							height: '27px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'absolute',
							right: '-56px',
							bottom: '2px',
							border: "4px solid #D7DCE1",
							borderRadius: '10px',
						}}>
							{list.length}
						</span>
					</Button>
					<Button
						onClick={() => dispatch(todoFilters({
							status: true
						}))}
						style={{
							width: "200px",
							height: "50px",
							marginBottom: '30px',
							fontSize: "18px",
							padding: "10px",
							border: "5px solid #003668",
							borderRadius: "10px",
							color: "black",
							letterSpacing: "1px",
							boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
						}}
						variant="outlined"
					>
						выполненные
						<span style={{
							width: '45px',
							height: '27px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'absolute',
							right: '-56px',
							bottom: '2px',
							border: "4px solid #003668",
							borderRadius: '10px',
						}}>
							{list.reduce((sum, current) => {
								if (current.status === true) {
									return sum + 1
								} return sum
							}, 0)}
						</span>
					</Button>
					<Button
						onClick={() => dispatch(todoFilters({
							status: false
						}))}
						style={{
							width: "200px",
							height: "50px",
							marginBottom: '30px',
							fontSize: "18px",
							padding: "10px",
							border: "5px solid #8A1833",
							borderRadius: "10px",
							color: "black",
							letterSpacing: "1px",
							boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
						}}
						variant="outlined"
					>
						ошибки
						<span style={{
							width: '45px',
							height: '27px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'absolute',
							right: '-56px',
							bottom: '2px',
							border: "4px solid #8A1833",
							borderRadius: '10px',
						}}>
							{list.reduce((sum, current) => {
								if (current.status === false) {
									return sum + 1
								} return sum
							}, 0)}
						</span>
					</Button>
				</Stack>

				{/* --------------------------------sortn btn end-------------------------------------- */}

				<Grid container className='right-side' style={{ width: '100%' }}>

					{/* ------------------------------------todo list start----------------------------------------- */}
					<List className='todoList right-side'
						style={{
							paddingTop: "50px",
							paddingBottom: "100px",
							paddingRight: "12px",
							paddingLeft: "12px",

						}}>
						{(filteredList || list).map((item) => (


							<ListItem key={item.id}
								style={{
									paddingTop: "15px",
									paddingBottom: '25px',
									paddingLeft: '6px',
									paddingRight: '6px',
									marginBottom: '15px',
									boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
									borderLeft: item.status ? '7px solid  #003668' : ' 7px solid #8A1833',
									borderRight: item.status ? '7px solid  #003668' : ' 7px solid #8A1833',
									borderRadius: '10px',
								}}>
								<IconButton onClick={handleOpen}
									edge="end" aria-label="delete" style={{ width: '25px', marginRight: '15px', marginLeft: '15px' }}>
									<CommentOutlinedIcon />
								</IconButton>
								<ListItemAvatar style={{ width: '36px', height: '36px' }}>
									<Avatar>
										<Typography>{item.id}</Typography>
									</Avatar>
								</ListItemAvatar>
								<Box className='textInform__script' display='flex' alignItems='center'>
									<ListItemText style={{ minWidth: '125px', marginRight: '33px', marginLeft: '12px' }}
										primary={item.name}
										secondary={item.datetime}
									// secondary={secondary ? 'Secondary text' : null}
									/>
									<ListItemText style={{ paddingRight: '6px' }}
										primary={item.value}
										secondary={item.last_log}
									// secondary={secondary ? 'Secondary text' : null}
									/>
								</Box>
							</ListItem>

						))
						}
					</List>
					{/* ------------------------------------------------todo list end------------------------------------------			 */}

				</Grid>
			</Box>
			{/* ------------------------------------------------modal start-----------------------------------	 */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style} style={{ borderRadius: '10px', border: 'none' }}>
					<div style={{ width: "125px", margin: 'auto', marginBottom: '25px' }}>
						<LogoMonsLogingform />
					</div>
					<Box className="notif_wrapper" style={{ display: 'flex' }} >
						<FormControlLabel style={{ marginRight: '25px' }} control={<Switch defaultChecked />} label={<Typography id="modal-modal-title" variant="h6" component="h1" textAlign='center'>
							подписаться
						</Typography>} />
						<TextField style={{ width: "250px", fontSize: '18px', marginTop: '25px', marginBottom: '20px' }}
							id="outlined-basic"
							error={emailError}
							label="email"
							value={emailInput}
							autoComplete="new-password"
							onChange={(event) => setEmailInput(event.target.value)}
							onBlur={handleEmail}
							variant="outlined"
							placeholder='...........@mons.ru'
						/>
					</Box>
					<div style={{ margin: 'auto', width: '200px', marginTop: '25px' }}>
						<ColorButton fullWidth variant="contained"><p style={{ fontSize: '18px' }}>отправить</p></ColorButton>
					</div>
				</Box>
			</Modal>
			{/* -----------------------------------------------------modal end---------------------------------- */}

		</Box >
	);
}

export default ToDoList

// function filterTodos(value) {
// 	const $items = [...root.querySelectorAll('.item')]

// 	switch (value) {
// 		// отобразить все задачи
// 		case 'all':
// 			$items.forEach((todo) => (todo.style.display = ''))
// 			break
// 		// активные задачи
// 		case 'active':
// 			// отобразить все и отключить завершенные
// 			filterTodos('all')
// 			$items
// 				.filter((todo) => todo.classList.contains('completed'))
// 				.forEach((todo) => (todo.style.display = 'none'))
// 			break
// 		// завершенные задачи
// 		case 'completed':
// 			// отобразить все и отключить активные
// 			filterTodos('all')
// 			$items
// 				.filter((todo) => !todo.classList.contains('completed'))
// 				.forEach((todo) => (todo.style.display = 'none'))
// 			break
// 	}
// }





{/* <li className={style['task-list__item']} key={item.id}>
								</li> */}
{/* <button className={style['modal-todo__btn--open']}
									onClick={() => setModalActive(true)}
								><RiNotificationBadgeLine className={style['notif-icon']} />
								</button>
								{
									edit === item.id
										?
										<div className={style['edit_task__wrapper']}>
											<textarea className={style['edit_task__textarea']} value={value}
												onChange={(e) => setValue(e.target.value)} />
										</div>
										:
										<p className={`${'PPPangramSans-Medium'}
																				${!item.status
												? style['task-status--close']
												: ''}`}>{item.title}</p>
								}
								{
									edit === item.id
										?
										<div className={style['task-list__button-wrapper']}>
											<button className={style['task-list__button--save']}
												onClick={() => {
													dispatch(saveTodo({
														id: item.id,
														value: value,
													}
													))
													setEdit(null)
												}}><FaRegSave
													className={style['save-icon']} /></button>
										</div>
										:
										<div className={style['task-list__button-wrapper']}>
											<button className={style['task-list__button--edit']}
												onClick={() => setEdit(item.id)}><BiEditAlt
													className={style['edit-icon']} /></button>
											<button className={style['task-list__button--status']}
												onClick={() => dispatch(statusTodo({
													id: item.id
												}))}>
												{
													item.status
														? <HiOutlineLockOpen className={style['delete-icon']} />
														: <HiOutlineLockClosed className={style['delete-icon']} />
												}
											</button> */}
{/* <button className={style['task-list__button--delete']}
												onClick={() => dispatch(deleteTodo({
													id: item.id,
												}))}><MdOutlineDelete
													className={style['delete-icon']} /></button>
										</div> */}

// }
// <ModalTodo show={modalActive} setShow={setModalActive} />

{/* 						
						<section className={style['status-filter']}>
								<button className={`${style['status-filter__button']} ${'PPPangramSans-Bold'}`}
												onClick={() => dispatch(todoFilters({
														status: 'all'
												}))}>все
										дела
								</button>
								<button
										className={`${style['status-filter__button']} ${style['status-filter__button--working']} ${'PPPangramSans-Bold'}`}
										onClick={() => dispatch(todoFilters({
												status: true
										}))}>запущенные
								</button>
								<button
										className={`${style['status-filter__button']} ${style['status-filter__button--error']} ${'PPPangramSans-Bold'}`}
										onClick={() => dispatch(todoFilters({
												status: false
										}))}>ошибки
								</button>
						</section> */}
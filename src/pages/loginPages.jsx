import { useNavigate } from 'react-router-dom'
import {LoggingForm} from '../components/FormLogging/LoggingForm'
import socket from "socket/socket";

const LoginPages = () => {

	const navigate = useNavigate()

	const onLogin = (roomId) => {
		console.log({ roomId })
		console.log('передаю на сервер запрос ROOM:JOIN')
		console.log('передаю на сервер roomId :', { roomId })
		socket.open()
		socket.emit('ROOM:JOIN', { roomId })
		socket.on('MESSAGE', (data) => {
			console.log('принимаю data /MESSAGE :', data)
		})
		console.log('ROOM:JOIN socket.emit ВЫПОЛНЕН')
		navigate('/todo')
	}

	return (
		<div>
			<LoggingForm onLogin={onLogin} />
		</div>
	)
}
export { LoginPages }


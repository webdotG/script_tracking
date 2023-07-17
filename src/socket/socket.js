import io from "socket.io-client"
// import {dispatch} from "redux";
import {addTodo} from 'store/slices/todoSlice'
import store from "../store";

const socket = io( "http://localhost:1234", {autoConnect: false});
//
// socket.on('ROOM:JOIN', (roomId) => {
// 		console.log('прыщавый пользователь :', roomId)
// })

socket.on("connection", () => { // Узнать какое событие создаётся при подлючении клиента, и слушать его здесь вместо connection
	socket.emit("give me messages") // Отправить запрос на сервер через сокет о получении всех текущих сообщений (messages) и обработать его на сервере и придумать нормально название для него вместо "give me messages"
})

socket.on("ALL_MESSAGES", (messagesString) => { // Отправить сообщение с сервера после получения запроса о получении всех текущих сообщений и передать их на клиента
	const messages = JSON.parse(messagesString)
	messages.forEach(addTodo)
})

socket.on('MESSAGE', (data) => {
		store.dispatch(addTodo(JSON.parse(data)))
		console.log('принимаю по сокету data на /MESSAGE :', data)
})


export default socket

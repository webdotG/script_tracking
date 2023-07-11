import io from "socket.io-client"
// import {dispatch} from "redux";
import {addTodo, deleteTodo, saveTodo, editTodo, statusTodo, todoFilters} from 'store/slices/todoSlice'
import store from "../store";

const socket = io( "http://localhost:1234", {autoConnect: false});
//
// socket.on('ROOM:JOIN', (roomId) => {
// 		console.log('прыщавый пользователь :', roomId)
// })

socket.on('MESSAGE', (data) => {
		store.dispatch(addTodo(JSON.parse(data)))
		console.log('принимаю по сокету data на /MESSAGE :', data)
})


export default socket

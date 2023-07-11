import Header from '../components/Header/Header'
// import AddToDo from "../components/AddToDo/AddToDo";
import ToDoList from "../components/ToDoList/ToDoList";
import { useState, useEffect } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useAuth } from '../hookCustom/authUser'
// import { removeUser } from '../store/slices/userSlice';

const TodoPages = () => {
	// const navigate = useNavigate()
	// const dispatch = useDispatch()
	// const { isAuth, email } = useAuth()

	const [todo, setTodo] = useState(
		JSON.parse(localStorage.getItem("todo")) || []
	);

	useEffect(() => {
		localStorage.setItem("todo", JSON.stringify(todo));
	}, [todo]);

	// useEffect(() => {
	// 	 if (!isAuth) navigate ('/')
	// 	}, [isAuth])


	return   (<div>
		<Header />
		<ToDoList todo={todo} setTodo={setTodo} />
	</div>
	) 
}


export { TodoPages }

import React, {useState} from "react";
import style from './AddToDo.module.css'
import {saveTodo} from "../../store/slices/todoSlice";
import {useDispatch} from "react-redux";

//test comment

function AddToDo({todo, setTodo}) {

		const dispatch = useDispatch()

//использую хук usestate для хранения текста из value input//при изменения значания value оно передайтся в setvalue оно сохраняется в value
		//значение value вывожу в value input
		const [value, setValue] = useState('');


//инпут для поля ввода задачи c value для значения-ввода задачи
//если value будет пустым по умолчанию то я не смогу его отлавливать по этому мне надо его где-то хранить
//в значение value передаю value из хука usestate
//добавляю обработчик который при изменении value в поле ввода будет вызывать функцию setvalue и передаю в нее значение которое получаю из этого поля
//кнопка при нажатии которой вызывается функция сохранения стэйта
		return (
				<div className={style.task}>
						<input className={style.task__input} placeholder="новое дело" value={value}
									 onChange={(e) => setValue(e.target.value)}/>
						<button className={style.task__button} onClick={() => {
								dispatch(saveTodo({value}))
								setValue('')
						}}>добавить в список дел</button>
				</div>
		);
}

export default AddToDo;

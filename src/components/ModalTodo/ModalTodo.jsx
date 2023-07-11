import {React} from "react";
import {useState} from "react";
import {SlClose} from "react-icons/sl";
import style from "../ModalTodo/ModalTodo.module.css";
import {useInput} from "../../hookCustom/useInput";


function ModalTodo({show, setShow}) {

		const [check, setCheck] = useState(true);

		const checkClick = () => {
				setCheck(!check)
				if (check === false) {
						console.log('no')
				}
				if (check === true) {
						console.log('yes')
				}
		}

		const email = useInput('', {isEmpty : true, minLength: 5, maxLength: 25,})

		return (
				<div className={show ? `${style["modal-todo__wrapper"]} ${style["active"]}` : style["modal-todo__wrapper"]}
						 onClick={() => setShow(false)}>

						<form className={style["modal-todo"]}
									onClick={(e) => {
											e.stopPropagation()
									}}>
								<button className={style["modal-todo__btn-close"]}
												onClick={(e) => {
														e.preventDefault()
														setShow(false)
												}}
								><SlClose className={style["modal-todo__btn-close--icon"]}/>
								</button>
								<div className={style["modal-todo__check-wrapper"]}>
										<label className={style["modal-todo__check-label"]}>
												<input className={style["modal-todo__check-input"]}
															 type="checkbox"
															 checked={check}
															 onChange={() => checkClick()}/>
												<span className={style["modal-todo__check-icon"]}></span>
												разрешить отправку
										</label>
								</div>
								<div className={style["modal-todo__email-wrapper"]}>
										<label className={style["modal-todo__email-label"]}> введите пожалуйста email</label>
										{(email.isTouch && email.isEmpty) && <div style={{color:"tomato"}}>не может быть пустым</div>}
										{(email.isTouch && email.minLengthError) && <div style={{color:"tomato"}}>минимум 5 символов</div>}
										{(email.isTouch && email.maxLengthError) && <div style={{color:"tomato"}}>максимум 25 символов</div>}
										{(email.isTouch && email.emailError) && <div style={{color:"tomato"}}>не верный email</div>}
										<input className={style["modal-todo__email-input"]}
													 type="email"
													 value={email.value}
													 onChange={email.onChange}
													 onBlur={email.onBlur}
										/>

								</div>
								<button className={style["modal-todo__btn-submit"]}
												type="submit"
												disabled={!email.inputValid}>
										отправить
								</button>

						</form>
				</div>
		);
}

export default ModalTodo

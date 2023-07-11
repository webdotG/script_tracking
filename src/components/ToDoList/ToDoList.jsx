import React, {useEffect, useState, useRef} from "react";
import {MdOutlineDelete} from "react-icons/md";
import {BiEditAlt} from "react-icons/bi";
import {FaRegSave} from "react-icons/fa";
import {HiOutlineLockClosed, HiOutlineLockOpen} from "react-icons/hi2";
import {RiNotificationBadgeLine} from "react-icons/ri";
import ModalTodo from "components/ModalTodo/ModalTodo";
import {addTodo, deleteTodo, saveTodo, editTodo, statusTodo, todoFilters} from 'store/slices/todoSlice'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
//import {getMessage} from "../../api/api";
import style from './ToDoList.module.css'
import '../../index.css'

function ToDoList() {

		const {list, filteredList,} = useSelector(state => state.todo)

//флаг для обозначения в каком состоянии мы сейчас находимся просмтора или редактирования задачи
		//false - просмотр задачи true - редактирование задачи
		//ксли здесь значение edit совпадает c id который получен после map то выводится div input условие прописано ниже
		const [edit, setEdit] = useState(null)

//для установки значения в input value нынешего значения закидываю в него нынешний title
		const [value, setValue] = useState('')


// состояние модального окна
		const [modalActive, setModalActive] = useState(false)

		const dispatch = useDispatch()

		console.log(list, filteredList, edit)

		return (

				<div className={style['task-list__wrapper']}>
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
						</section>
						<ul className={style['task-list']}>
								{
										//начинаю работу с уже отфильтрованными задачами по статусу
										//при помощи MAP вывожу каждый обьект из массива todo в li
										//передаю уникальное значенеие key равное id обьекта
										//добавляю проверку если edit то выводить input и button сохранить
										//input value при редактировании добавляю текущее значение и добавляю нынешнее значение title
										//также добавляю onchange на input и меняю значение за счет setvalue и передаю в input значение target value
										//если не edit то показывать title
										//добавляю ещё одну проверку для режима редактирования
										//если состояние edit то будет показываться кнопка сохранить
										//если не edit то показываются все остальные кнопки
										//значение edit лежит здесь которое мы получили при клике на редактировать я заношу в setedit
										//при клике на кнопку сохранить вызываю функцию saveTodo и чтобы найти знать что я сохраняю  добавляю item.id
										//на кнопку вешаю обработчик который будет вызывать функцию удаления аргументом котрой будет id обьекта
										//добавляю кнопку схоже с удалением задачи но передаю функцию закрытия/открытия задачи

										(filteredList || list).map(item => (
												<li className={style['task-list__item']} key={item.id}>
														<button className={style['modal-todo__btn--open']}
																		onClick={() => setModalActive(true)}
														><RiNotificationBadgeLine className={style['notif-icon']}/>
														</button>
														{
																edit === item.id
																		?
																		<div className={style['edit_task__wrapper']}>
																		<textarea className={style['edit_task__textarea']} value={value}
																							onChange={(e) => setValue(e.target.value)}/>
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
																						className={style['save-icon']}/></button>
																		</div>
																		:
																		<div className={style['task-list__button-wrapper']}>
																				<button className={style['task-list__button--edit']}
																								onClick={() => setEdit(item.id)}><BiEditAlt
																						className={style['edit-icon']}/></button>
																				<button className={style['task-list__button--status']}
																								onClick={() => dispatch(statusTodo({
																										id: item.id
																								}))}>
																						{
																								item.status
																										? <HiOutlineLockOpen className={style['delete-icon']}/>
																										: <HiOutlineLockClosed className={style['delete-icon']}/>
																						}
																				</button>
																				<button className={style['task-list__button--delete']}
																								onClick={() => dispatch(deleteTodo({
																										id: item.id,
																								}))}><MdOutlineDelete
																						className={style['delete-icon']}/></button>
																		</div>

														}
														<ModalTodo show={modalActive} setShow={setModalActive}/>
												</li>
										))
								}
						</ul>
				</div>
		);
}

export default ToDoList;

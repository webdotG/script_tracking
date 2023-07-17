import {createSlice} from "@reduxjs/toolkit";


const initialState = {
		//list: [],
		list: [{
			"id":3,
			"datetime": "str(datetime.now()",
			"name": "aaaa",
			"action": "action",
			"status": false,
			"last_log": "log",
			 "value":"some titldlkflsdfksdffsdkjflksdje"
	},
	{
		"id":1,
		"datetime": "str(datetime.now()",
		"name": "bbbbb",
		"action": "action",
		"status": true,
		"last_log": "log",
		 "value":"some titldlkflsdfksdffsdkjflksdje"
},
{
	"id":5,
	"datetime": "str(datetime.now()",
	"name": "bababab",
	"action": "action",
	"status": false,
	"last_log": "log",
	 "value":"some titldlkflsdfksdffsdkjflksdje"
},
],
		filteredList: null,
}



const todoSlice = createSlice({
		name: 'todo',
		initialState,
		reducers: {
				addTodo(state, action) {
					const existedIndex = state.list.findIndex( (item) => {
							return item.id === action.payload.id
					})
					if (existedIndex !== -1) {
						state.list = state.list.map((item, index) => {
								if ( existedIndex === index) {
									return {
										id: action.payload.id,
										datetime: action.payload.datetime,
										name: action.payload.name,
										title: action.payload.name,
										status: action.payload.success,// false || true
										last_log: action.payload.last_log,
										value: action.payload.value
									} 
								} 
								return item
						})
					} else {
						if (action.payload.value) {
							state.list = [...state.list, {
									id: action.payload.id,
									datetime: action.payload.datetime,
									name: action.payload.name,
									title: action.payload.name,
									status: action.payload.success,// false || true
									last_log: action.payload.last_log,
									value: action.payload.value
							}]
					}
				}
			},
				searchTodo(state, action) {
					if (!action.payload) {
						 state.filteredList = state.list
					}
					state.filteredList = state.list.filter((data) =>
						data.name.toLowerCase().includes(action.payload.toLowerCase()
						)
					)
				},
				todoFilters(state, action) {
					console.log('ACTION :', action)
					if (action.payload.status === 'all') {
							state.filteredList = null
					} else {
							state.filteredList = state.list.filter(item => item.status === action.payload.status)
					}
			},
		},
})
export const {addTodo, todoFilters, searchTodo} = todoSlice.actions


export default todoSlice.reducer


// deleteTodo(state, action) {
				// 		state.list = state.list.filter(item => item.id !== action.payload.id);
				// },
				// saveTodo(state, action) {
				// 		if (action.payload.id !== undefined) {
				// 				state.list = state.list.map(item => {
				// 						if (item.id === action.payload.id) {
				// 								item.title = action.payload.value;
				// 						}
				// 						return item;
				// 				})
				// 		}
				// },
				// statusTodo(state, action,) {
				// 		state.list = state.list.map(item => {
				// 				if (item.id === action.payload.id) {
				// 						item.status = !item.status;
				// 						console.log(`элемент найден задача закрыта/открыта ${item.id} ${item.status}`);
				// 				}
				// 				return item;
				// 		})
				// },
				

//
// //функция для фильтрации задач по статусу
// //если статус равен all то в setFiltered будет значение todo-список всех задач
// //если статус равен true или false то создаю новый массив который принимае изначальный todo
// //при помощи метода filter находить обьект в котором status равен status и все обьекты закидываю в newtodo
// const todoFilter = (status) => {
// 		if (status === 'all') {
// 				setFiltered(todo)
// 		} else {
// 				let newTodo = [...todo].filter(item => item.status === status)
// 				setFiltered(newTodo)
// 		}
// }
//
// //функция для удаления todo
// //создаю переменную в которую положу новый массив в котором не будет выбранного нами элемента
// //передаю копию массива применяю мктод filter и говорю
// //что перебераемый id не должен быть равен id полученый от кнопки удаления того обьекта который хочу удалить
// //в функцию setTodo передаю новый массив в котром отсутсвует удалённый обьект
// //тем самым я обновляю значение todo заменяя его на newTodo
// function deleteTodo(id) {
// 		let newTodo = [...todo].filter(item => item.id !== id);
// 		setTodo(newTodo);
// }
//
// //функия для изменения статуса задачи-todo
// //мне надо найти id того элемента который я передал через кнопку закрытия-изменения статуса задачи
// //если условие верное и такой id есть то меняю значение status задачи на противоположное
// //если элемент был найден я выхожу из условия и возвращаю весь массив
// //после  изменений обновляю statetodo
// function statusTodo(id) {
// 		let newTodo = [...todo].filter(item => {
// 				if (item.id === id) {
// 						item.status = !item.status;
// 						console.log(`элемент найден задача закрыта/открыта ${item.id} ${item.status}`);
// 				}
// 				return item;
// 		})
// 		setTodo(newTodo);
// }
//
// //функция для редактирования задачи-todo менять значение setedit на true для режима редактирования
// //здесь я беру значение edit и заношу в выше в edit
// //также при нажатии на редактировать закидываю нынещнее значение title
// function editTodo(id, title) {
// 		setEdit(id)
// 		setValue(title)
// }
//
// //функция для сохранения изменения задачи-todo
// //передаю id найденный через item id которого редактирую
// //в новый todo сохраняю все жлементы массива todo которые обошёл через map
// //нахожу в нём нужный нам элемент по id
// //и меняю в нем значение title на value на текущий момент редактирования
// //возвращаю item что бы не бегать по всему массиву дальше
// //возвращаю новое значение title
// //выставляю setEdit в null для того что бы выйти из режима редактирования
// function saveTodo(id) {
// 		let newTodo = [...todo].map(item => {
// 				if (item.id === id) {
// 						item.title = value;
// 				}
// 				return item;
// 		})
// 		setTodo(newTodo);
// 		setEdit(null);
// }

//функция для сохранения и добавления задачи
// function saveTodo() {
// 		if (value){
// 				//функцией settodo создаю новый массив со значениями -существующим todo
// 				//и добавляю новый обьект value котрого я получаю из инпута
// 				//и временно поставлю пакет npm uuid для уникальных id
// 				setTodo(
// 						[...todo, {
// 								id: uuidv1(),//костыль работает проверить на корректность ----todo.length + 1
// 								title: value,
// 								status: true,
// 						}]
// 				);
// 				setValue(''); //после всех манипуляций обнуляю value input на пустую строку
// 		} else { alert('дело должно быть написано'); }
// }



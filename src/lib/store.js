import { derived, writable } from 'svelte/store'
import { v4 as uuid } from 'uuid'
import Constant from './constant'

function setFormTodo() {
	const todoValue = ''
	const { subscribe, set, update } = writable(todoValue)
	const resetForm = () => {
		set('')
	}

	return {
		subscribe,
		set,
		update,
		resetForm
	}
}

function setTodoData() {
	let initTodoData = {
		todoLists: [
			{
				id: uuid(),
				content: 'Shopping',
				done: false
			},
			{
				id: uuid(),
				content: 'Walk',
				done: false
			},
			{
				id: uuid(),
				content: 'Crossfit',
				done: true
			},
			{
				id: uuid(),
				content: 'Sleep',
				done: false
			}
		],
		editMode: '',
		viewMode: Constant.ALL
	}

	let todoData = { ...initTodoData }

	const { subscribe, set, update } = writable(todoData)

	const addTodo = (content) => {
		if (content) {
			const newTodo = {
				id: uuid(),
				content: content,
				done: false
			}
			update((datas) => {
				const setData = [...datas.todoLists, newTodo]
				datas.todoLists = setData
				return datas
			})
		}
	}

	const editTodo = (editTodo) => {
		update((datas) => {
			const setData = datas.todoLists.map((todo) => {
				if (todo.id === editTodo.id) {
					todo = editTodo
				}
				return todo
			})
			datas.todoLists = setData
			return datas
		})
	}

	const removeTodo = (id) => {
		update((datas) => {
			const setData = datas.todoLists.filter((todo) => todo.id != id)
			datas.todoLists = setData
			return datas
		})
	}

	const checkTodo = (id) => {
		update((datas) => {
			const setData = datas.todoLists.map((todo) => {
				if (todo.id === id) {
					todo.done = !todo.done
				}
				return todo
			})
			datas.todoLists = setData
			return datas
		})
	}

	const changeTodoEditMode = (id) => {
		update((datas) => {
			datas.editMode = id
			return datas
		})
	}

	const changeTodoView = (mode) => {
		update((datas) => {
			datas.viewMode = mode
			return datas
		})
	}

	const closeTodoEditMode = () => {
		update((datas) => {
			datas.editMode = ''
			return datas
		})
	}

	return {
		subscribe,
		set,
		update,
		addTodo,
		editTodo,
		removeTodo,
		checkTodo,
		changeTodoEditMode,
		changeTodoView,
		closeTodoEditMode
	}
}

function setFetchTodos() {
	const fetch = derived(todos, ($todos) => {
		if ($todos.viewMode === Constant.ACTIVE) {
			return $todos.todoLists.filter((todo) => todo.done === false)
		}
		if ($todos.viewMode === Constant.DONE) {
			return $todos.todoLists.filter((todo) => todo.done === true)
		}
		if ($todos.viewMode === Constant.ALL) {
			return $todos.todoLists
		}
	})

	return fetch
}

function setCountTodo() {
	const count = derived(fetchTodos, ($fetchTodos) => {
		return $fetchTodos.length
	})

	return count
}

export const todoForm = setFormTodo()
export const todos = setTodoData()
export const fetchTodos = setFetchTodos()
export const countTodo = setCountTodo()

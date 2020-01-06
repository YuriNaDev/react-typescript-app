import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from './index'
import axios from 'axios'

export interface Todo {
	id: number
	title: string
	completed: boolean
}

interface TodoRequest {
	title: string
	completed: boolean
	userId: number
}

interface TodosState {
	todos: Todo[]
	pending: boolean
	error: string | null
}

const initialState: TodosState = {
	todos: [],
	pending: false,
	error: null,
}

const todosSlice = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {
		getTodosStart(state: TodosState) {
			state.pending = true
		},
		getTodosSuccess(state, { payload }: PayloadAction<Todo[]>) {
			state.todos = payload
			state.pending = false
			state.error = null
		},
		getTodosFailure(state: TodosState, action: PayloadAction<string>) {
			state.pending = false
			state.error = action.payload
		},
		addTodo(state, { payload }: PayloadAction<Todo>) {
			state.todos.unshift(payload)
		},
		removeTodo(state, action: PayloadAction<number>) {
			const index = state.todos.findIndex(
				todo => todo.id === action.payload
			)
			if (index > -1) {
				state.todos.splice(index, 1)
			}
		},
		toggleTodo(state, { payload }: PayloadAction<Todo>) {
			const todo = state.todos.find(todo => todo.id === payload.id)
			if (todo) {
				todo.completed = !todo.completed
			}
		},
	},
})

export const {
	getTodosStart,
	getTodosSuccess,
	getTodosFailure,
	addTodo,
	removeTodo,
	toggleTodo,
} = todosSlice.actions

export default todosSlice.reducer

export const fetchTodos = (): AppThunk => async dispatch => {
	try {
		dispatch(getTodosStart())
		const todos = await getTodos()
		dispatch(
			getTodosSuccess(
				todos.map(todo => ({
					id: todo.id,
					title: todo.title,
					completed: todo.completed,
				}))
			)
		)
	} catch (err) {
		dispatch(getTodosFailure(err.toString()))
	}
}

export const addTodoAsync = (title: string): AppThunk => async dispatch => {
	const url = `https://jsonplaceholder.typicode.com/todos`
	const formData: TodoRequest = { title, userId: 1, completed: false }
	const {
		data: { id, completed },
	} = await axios.post<Todo>(url, formData)
	dispatch(addTodo({ id, completed, title }))
}

export const removeTodoAsync = (id: number): AppThunk => async dispatch => {
	const url = `https://jsonplaceholder.typicode.com/todos/${id}`
	await axios.delete(url)
	dispatch(removeTodo(id))
}

export const toggleTodoAsync = (todo: Todo): AppThunk => async dispatch => {
	const { id } = todo
	const url = `https://jsonplaceholder.typicode.com/todos/${id}`
	const formData: TodoRequest = {
		...todo,
		userId: 1,
		completed: !todo.completed,
	}
	const { data } = await axios.patch<Todo>(url, formData)
	dispatch(toggleTodo(data))
}

async function getTodos(): Promise<Todo[]> {
	const url = `https://jsonplaceholder.typicode.com/todos?userId=1&_sort=id&_order=desc`
	const { data } = await axios.get<Todo[]>(url)
	return data
}

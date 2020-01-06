import React from 'react'
import TodoForm from '../components/redux/todos/TodoForm'
import TodosList from '../components/redux/todos/TodosList'

const ReduxTodo: React.FC = () => {
	return (
		<>
			<TodoForm />
			<TodosList />
		</>
	)
}

export default ReduxTodo

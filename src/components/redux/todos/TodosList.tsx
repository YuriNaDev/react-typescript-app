import React, { useEffect } from 'react'
import { Box, List, CircularProgress } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from '../../../stores/todos'
import { RootState } from '../../../stores'
import TodoItem from './TodoItem'

const TodosList: React.FC = () => {
	const dispatch = useDispatch()
	const { todos, pending, error } = useSelector(
		(state: RootState) => state.todos
	)

	useEffect(() => {
		dispatch(fetchTodos())
	}, [dispatch])

	if (error) {
		return (
			<Box
				p={2}
				borderRadius="borderRadius"
				boxShadow={1}
				color="white"
				bgcolor="error.main"
				fontWeight="fontWeightMedium"
				fontSize="body2.fontSize"
			>
				{error.toString()}
			</Box>
		)
	}

	if (pending) {
		return (
			<Box display="flex" alignItems="center" justifyContent="center">
				<CircularProgress />
			</Box>
		)
	}

	return (
		<List dense>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</List>
	)
}

export default TodosList

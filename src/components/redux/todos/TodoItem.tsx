import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import {
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemSecondaryAction,
	IconButton,
	Checkbox,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { Todo, toggleTodoAsync, removeTodoAsync } from 'stores/todos'

interface TodoItemProps {
	todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const dispatch = useDispatch()

	return (
		<ListItem dense disableGutters>
			<ListItemIcon>
				<Checkbox
					checked={todo.completed}
					onChange={() => dispatch(toggleTodoAsync(todo))}
					edge="start"
				/>
			</ListItemIcon>
			<ListItemText primary={todo.title} />
			<ListItemSecondaryAction>
				<IconButton
					edge="end"
					onClick={() => dispatch(removeTodoAsync(todo.id))}
				>
					<Delete />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	)
}

export default memo(TodoItem)

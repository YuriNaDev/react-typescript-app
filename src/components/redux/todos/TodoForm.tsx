import React from 'react'
import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { addTodoAsync } from 'stores/todos'

interface FormData {
	title: string
}

const TodoForm = () => {
	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm<FormData>()

	const onSubmit = handleSubmit(({ title }) => {
		dispatch(addTodoAsync(title))
		reset()
	})

	return (
		<form onSubmit={onSubmit}>
			<TextField
				name="title"
				label="할 일 내용"
				variant="outlined"
				fullWidth
				inputRef={register}
			/>
		</form>
	)
}

export default TodoForm

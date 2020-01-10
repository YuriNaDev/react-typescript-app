import React, { useState, useEffect, useCallback } from 'react'
import {
	Typography,
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core'
import axios from 'axios'
import { pick } from 'lodash'
import { IUser, IUserResponse } from 'interfaces/User'

const Users: React.FC = () => {
	const [page, setPage] = useState(1)
	const [users, setUsers] = useState<IUser[]>([])

	const fetch = useCallback(async (page: number) => {
		const response = await axios.get<IUserResponse>(
			`https://reqres.in/api/users?page=${page}`
		)
		setUsers(
			response.data.data.map(x =>
				pick(x, ['id', 'first_name', 'last_name', 'email'])
			)
		)
	}, [])

	useEffect(() => {
		fetch(page)
	}, [fetch, page])

	const changePage = () => setPage(state => (state === 1 ? 2 : 1))

	return (
		<Box py={2}>
			<Typography variant="h6" gutterBottom>
				Users
			</Typography>
			<List dense>
				{users.map(user => (
					<ListItem key={user.id} dense disableGutters divider>
						<ListItemText primary={user.email} />
					</ListItem>
				))}
			</List>
			<Button color="secondary" variant="contained" onClick={changePage}>
				{page === 1 ? '다음 페이지' : '이전 페이지'}
			</Button>
		</Box>
	)
}

export default Users

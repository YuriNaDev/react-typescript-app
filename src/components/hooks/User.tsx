import React, { useState } from 'react'
import { Typography, Box, Button } from '@material-ui/core'
import { IUser } from 'interfaces/User'

const User: React.FC = () => {
	const [user, setUser] = useState<IUser | null>(null)

	const toggleUser = () =>
		setUser(state =>
			state
				? null
				: {
						id: 0,
						first_name: 'Leanne',
						last_name: 'Graham',
						email: 'Sincere@april.biz',
				  }
		)

	return (
		<Box py={2}>
			<Typography variant="h6" gutterBottom>
				{user ? (
					<>
						name: {user.first_name} {user.last_name}
						<br />
						email: {user.email}
					</>
				) : (
					'사용자 알 수 없음'
				)}
			</Typography>
			<Button color="primary" variant="outlined" onClick={toggleUser}>
				TOGGLE
			</Button>
		</Box>
	)
}

export default User

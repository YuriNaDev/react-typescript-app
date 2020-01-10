import React from 'react'
import { Divider } from '@material-ui/core'
import Counter from 'components/hooks/Counter'
import User from 'components/hooks/User'
import Users from 'components/hooks/Users'

const Hooks: React.FC = () => (
	<>
		<Counter />
		<Divider />
		<User />
		<Divider />
		<Users />
	</>
)

export default Hooks

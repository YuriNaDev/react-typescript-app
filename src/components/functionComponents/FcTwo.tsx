import React from 'react'
import { Typography } from '@material-ui/core'

const FcTwo: React.FC<{ message: string }> = ({ message }) => (
	<Typography variant="h6" gutterBottom>
		{message}
	</Typography>
)

export default FcTwo

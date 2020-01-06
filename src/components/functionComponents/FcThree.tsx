import React from 'react'
import { Typography } from '@material-ui/core'

type FcThreeProps = {
	message: string
}

const FcThree: React.FC<FcThreeProps> = ({ message }) => {
	return (
		<Typography variant="h6" gutterBottom>
			{message}
		</Typography>
	)
}

export default FcThree

import React from 'react'
import { Typography } from '@material-ui/core'

type FcOneProps = {
	message: string
}

// normal function ver.
// children이 없기 때문에 FcOne:React.FC 사용할 수 없음
const FcOne = ({ message }: FcOneProps) => (
	<Typography variant="h6" gutterBottom>
		{message}
	</Typography>
)

export default FcOne

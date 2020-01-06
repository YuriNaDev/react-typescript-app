import React, { useState } from 'react'
import { Typography, Box, Button, ButtonGroup } from '@material-ui/core'

const Counter: React.FC = () => {
	const [count, setCount] = useState<number>(0)

	const onIncrease = () => setCount(state => state + 1)
	const onDecrease = () => setCount(state => state - 1)

	return (
		<Box py={2}>
			<Typography variant="h4" gutterBottom>
				{count}
			</Typography>
			<Box>
				<ButtonGroup color="primary">
					<Button onClick={onIncrease}>+1</Button>
					<Button onClick={onDecrease}>-1</Button>
				</ButtonGroup>
			</Box>
		</Box>
	)
}

export default Counter

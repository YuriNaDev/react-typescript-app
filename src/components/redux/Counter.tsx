import React, { useCallback } from 'react'
import { Typography, Box, Button, ButtonGroup, Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../../stores/counter'
import { RootState } from '../../stores'

const Counter: React.FC = () => {
	const count = useSelector((state: RootState) => state.counter.count)

	const dispatch = useDispatch()
	const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
	const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])

	return (
		<Grid item>
			<Typography variant="h4" gutterBottom>
				{count}
			</Typography>
			<Box>
				<ButtonGroup color="primary">
					<Button onClick={onIncrease}>+1</Button>
					<Button onClick={onDecrease}>-1</Button>
				</ButtonGroup>
			</Box>
		</Grid>
	)
}

export default Counter

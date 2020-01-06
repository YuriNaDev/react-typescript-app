import React, { useCallback } from 'react'
import { Typography, Box, Button, ButtonGroup, Grid } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../../stores/amount_counter'
import { RootState } from '../../stores'

const AmountCounter: React.FC = () => {
	const count = useSelector((state: RootState) => state.amountCounter.count)

	const dispatch = useDispatch()
	const onIncrease = useCallback(() => dispatch(increase(5)), [dispatch])
	const onDecrease = useCallback(() => dispatch(decrease(5)), [dispatch])

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

export default AmountCounter

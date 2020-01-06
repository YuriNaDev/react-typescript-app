import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const amountCounterSlice = createSlice({
	name: 'amount_counter',
	initialState: {
		count: 0,
	},
	reducers: {
		increase: (state, action: PayloadAction<number>) => ({
			count: state.count + action.payload,
		}),
		decrease: (state, action: PayloadAction<number>) => ({
			count: state.count - action.payload,
		}),
	},
})

export const { increase, decrease } = amountCounterSlice.actions

export default amountCounterSlice.reducer

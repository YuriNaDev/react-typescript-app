import { createAction, createReducer } from '@reduxjs/toolkit'

export const increase = createAction<void>('counter/INCREASE')
export const decrease = createAction<void>('counter/DECREASE')

interface CounterState {
	count: number
}

const initialState: CounterState = { count: 0 }

// const counter = createReducer(initialState, {
// 	[increase.type]: state => ({ count: state.count + 1 }),
// 	[decrease.type]: state => ({ count: state.count - 1 }),
// })
const counter = createReducer(initialState, builder =>
	builder
		.addCase(increase, state => ({ count: state.count + 1 }))
		.addCase(decrease, state => ({ count: state.count - 1 }))
)

export default counter

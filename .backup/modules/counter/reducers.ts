import { INCREASE, DECREASE, CounterState, CounterActionTypes } from './types'

const initialState: CounterState = {
	count: 0,
}

export default function counterReducer(
	state = initialState,
	action: CounterActionTypes
): CounterState {
	switch (action.type) {
		case INCREASE: {
			return { count: state.count + 1 }
		}
		case DECREASE: {
			return { count: state.count - 1 }
		}
		default:
			return state
	}
}

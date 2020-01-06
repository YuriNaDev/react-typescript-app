// state interface 선언
export interface CounterState {
	count: number
}

// action names 선언
export const INCREASE = 'counter/INCREASE'
export const DECREASE = 'counter/DECREASE'

// action interface 선언
interface IncreaseAction {
	type: typeof INCREASE
}
interface DecreaseAction {
	type: typeof DECREASE
}

// 액션 types export
export type CounterActionTypes = IncreaseAction | DecreaseAction

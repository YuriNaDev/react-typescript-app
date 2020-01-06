import { INCREASE, DECREASE } from './types'

export function increase() {
	return {
		type: INCREASE,
	}
}

export function decrease() {
	return {
		type: DECREASE,
	}
}

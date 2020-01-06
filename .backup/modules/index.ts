import { combineReducers } from 'redux'
import counter from './counter/reducers'

const rootReducer = combineReducers({
	counter,
})

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>

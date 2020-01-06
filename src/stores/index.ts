import { configureStore, Action, combineReducers } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import counter from './counter'
import amountCounter from './amount_counter'
import todos from './todos'
import albums from './albums'

// Declare rootReducer
const rootReducer = combineReducers({
	counter,
	amountCounter,
	albums,
	todos,
})

// Getting the State type
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
	reducer: rootReducer,
})

// Getting the Dispatch type
export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store

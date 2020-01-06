import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ThemeProvider from './utils/ThemeProvider'
import { Provider } from 'react-redux'
import store from './stores'

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()

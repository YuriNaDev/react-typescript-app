import React, { lazy, Suspense } from 'react'
import { CircularProgress, Box } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const Hooks = lazy(() => import('./pages/Hooks'))
const Redux = lazy(() => import('./pages/Redux'))
const ReduxTodo = lazy(() => import('./pages/ReduxTodo'))

const Loading = () => (
	<Box
		position="relative"
		display="flex"
		alignItems="center"
		justifyContent="center"
	>
		<CircularProgress />
	</Box>
)

const App: React.FC = () => {
	return (
		<Router>
			<Layout>
				<Suspense fallback={<Loading />}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/hooks" component={Hooks} />
						<Route exact path="/redux" component={Redux} />
						<Route exact path="/todo" component={ReduxTodo} />
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	)
}

export default App

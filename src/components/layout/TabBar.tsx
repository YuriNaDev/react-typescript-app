import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	indicator: {
		backgroundColor: '#ffffff',
	},
})

const TabBar: React.FC = () => {
	const styles = useStyles()

	const location = useLocation()
	const [value, setValue] = React.useState(location.pathname)

	const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue)
	}

	return (
		<AppBar position="static" elevation={1}>
			<Tabs
				value={value}
				onChange={handleChange}
				classes={{ indicator: styles.indicator }}
			>
				<Tab
					component={Link}
					label="Function Components"
					to="/"
					value="/"
				/>
				<Tab
					component={Link}
					label="Hooks"
					to="/hooks"
					value="/hooks"
				/>
				<Tab
					component={Link}
					label="Redux"
					to="/redux"
					value="/redux"
				/>
				<Tab
					component={Link}
					label="Redux Todo"
					to="/todo"
					value="/todo"
				/>
			</Tabs>
		</AppBar>
	)
}

export default TabBar

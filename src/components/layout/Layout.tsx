import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Container, Paper, Box } from '@material-ui/core'
import TabBar from './TabBar'

interface ILayout {
	children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(3),
		},
	})
)

const Layout: React.FC = ({ children }: ILayout) => {
	const styles = useStyles()

	return (
		<Container maxWidth="sm">
			<Paper className={styles.paper}>
				<TabBar />
				<Box p={2} minHeight={250}>
					{children}
				</Box>
			</Paper>
		</Container>
	)
}

export default Layout

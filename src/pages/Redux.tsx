import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Counter from 'components/redux/Counter'
import AmountCounter from 'components/redux/AmountCounter'
import AlbumsList from 'components/redux/AlbumsList'
import { Divider, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		divider: {
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
	})
)

const Redux: React.FC = () => {
	const styles = useStyles()

	return (
		<>
			<Grid container spacing={2}>
				<Counter />
				<Counter />
			</Grid>
			<Divider className={styles.divider} />
			<Grid container spacing={2}>
				<AmountCounter />
				<AmountCounter />
			</Grid>
			<Divider className={styles.divider} />
			<Grid container spacing={2}>
				<Grid item>
					<AlbumsList />
				</Grid>
			</Grid>
		</>
	)
}

export default Redux

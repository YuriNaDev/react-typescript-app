import React, { useEffect } from 'react'
import {
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
	CircularProgress,
	Typography,
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAlbums, setPage } from 'stores/albums'
import { RootState } from 'stores'

const AlbumsList = () => {
	const dispatch = useDispatch()
	const { page, albums, pending, error } = useSelector(
		(state: RootState) => state.albums
	)

	useEffect(() => {
		dispatch(fetchAlbums(page))
	}, [dispatch, page])

	const changePage = () => dispatch(setPage())

	if (error) {
		return (
			<Box
				borderRadius="borderRadius"
				boxShadow={1}
				color="white"
				bgcolor="error.main"
				fontWeight="fontWeightMedium"
				fontSize="body2.fontSize"
			>
				{error.toString()}
			</Box>
		)
	}

	if (pending) {
		return (
			<Box display="flex" alignItems="center" justifyContent="center">
				<CircularProgress />
			</Box>
		)
	}

	return (
		<Box>
			<Typography variant="h6" gutterBottom>
				Albums
			</Typography>
			<List dense>
				{albums.map(album => (
					<ListItem key={album.id} dense disableGutters divider>
						<ListItemText primary={album.title} />
					</ListItem>
				))}
			</List>
			<Button color="secondary" variant="contained" onClick={changePage}>
				다음페이지
			</Button>
		</Box>
	)
}

export default AlbumsList

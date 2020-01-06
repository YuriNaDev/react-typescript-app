import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from './index'
import axios from 'axios'
import { sleep } from '../utils/commonFunction'

interface Album {
	id: number
	title: string
}

interface AlbumsState {
	page: number
	albums: Album[]
	pending: boolean
	error: string | null
}

const initialState: AlbumsState = {
	page: 1,
	albums: [],
	pending: false,
	error: null,
}

const albumsSlice = createSlice({
	name: 'albums',
	initialState: initialState,
	reducers: {
		getAlbumsStart(state: AlbumsState) {
			state.pending = true
		},
		getAlbumsSuccess(state, { payload }: PayloadAction<Album[]>) {
			state.albums = payload
			state.pending = false
			state.error = null
		},
		getAlbumsFailure(state: AlbumsState, action: PayloadAction<string>) {
			state.pending = false
			state.error = action.payload
		},
		setPage(state: AlbumsState) {
			state.page = state.page + 1
		},
	},
})

export const {
	getAlbumsStart,
	getAlbumsSuccess,
	getAlbumsFailure,
	setPage,
} = albumsSlice.actions

export default albumsSlice.reducer

export const fetchAlbums = (page: number): AppThunk => async dispatch => {
	try {
		dispatch(getAlbumsStart())
		// throw new Error('일부러 오류 냄')
		const albums = await getAlbums(page)
		await sleep(1000)
		dispatch(getAlbumsSuccess(albums))
	} catch (error) {
		dispatch(getAlbumsFailure(error.toString()))
	}
}

async function getAlbums(page: number): Promise<Album[]> {
	const start = (page - 1) * 4
	const url = `https://jsonplaceholder.typicode.com/albums?&_start=${start}&_limit=4`
	const { data } = await axios.get<Album[]>(url)
	return data.map(d => ({ id: d.id, title: d.title }))
}

import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { purple, red } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
	palette: {
		primary: purple,
		secondary: red,
	},
	typography: {
		fontFamily: "'Noto Sans KR', sans-serif",
	},
})

type ThemeProps = {
	children?: React.ReactNode
}

const Theme: React.FC = ({ children }: ThemeProps) => {
	return (
		<ThemeProvider theme={theme}>
			{children}
			<CssBaseline />
		</ThemeProvider>
	)
}

export default Theme

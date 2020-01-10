import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import User from './User'

describe('<User />', () => {
	test('matches snapshot', () => {
		const { container } = render(<User />)
		expect(container).toMatchSnapshot()
	})

	test('use toggle button', () => {
		const { getByText } = render(<User />)

		const typography = getByText('사용자 알 수 없음')
		const button = getByText('TOGGLE')

		fireEvent.click(button)
		expect(typography).not.toHaveTextContent('사용자 알 수 없음')

		fireEvent.click(button)
		expect(typography).toHaveTextContent('사용자 알 수 없음')
	})
})

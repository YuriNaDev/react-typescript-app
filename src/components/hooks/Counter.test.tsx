import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe('<Counter />', () => {
	test('matches snapshot', () => {
		const { container } = render(<Counter />)
		expect(container).toMatchSnapshot()
	})

	test('has a number and two buttons', () => {
		const { getByText } = render(<Counter />)
		getByText('0')
		getByText('+1')
		getByText('-1')
	})

	test('increase 1', () => {
		const { getByText } = render(<Counter />)

		const number = getByText('0')
		const increaseButton = getByText('+1')

		fireEvent.click(increaseButton)
		fireEvent.click(increaseButton)

		expect(number).toHaveTextContent('2')
	})

	test('decrease 1', () => {
		const { getByText } = render(<Counter />)

		const number = getByText('0')
		const decreaseButton = getByText('-1')

		fireEvent.click(decreaseButton)
		fireEvent.click(decreaseButton)

		expect(number).toHaveTextContent('-2')
	})
})

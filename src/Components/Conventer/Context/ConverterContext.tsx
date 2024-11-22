import React, { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	celsius: string
	fare: string
	valueInput: string | number | null
	error: boolean
	isError: string
	handleChangeInput: (e: string) => void
}

type ConverterTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	celsius: '',
	fare: '',
	valueInput: '',
	error: false,
	isError: '',
	handleChangeInput: (e: string) => {},
}

const ConverterContext = createContext(InitialState)

export const ConverterProvider = ({ children }: ConverterTypeProvider) => {
	const [celsius, setCelsius] = useState<string>('℃')
	const [fare, setFare] = useState<string>('℉')
	const [valueInput, setValueInput] = useState<string | number | null>(null)
	const [error, setError] = useState<boolean>(false)
	const [isError, setIsError] = useState<string>('')

	// T(F) = T(C) * 1.8 + 32
	// T(C) = (T(F) - 32) / 1.8

	const handleChangeInput = (e: string) => {
		if (e.length <= 5) {
			setValueInput(e)
			setError(false)
		} else if (e.length > 5) {
			setError(true)
			setIsError('maksymalna liczba osiągnięta')
		}
	}

	return (
		<ConverterContext.Provider value={{ celsius, fare, valueInput, error, isError, handleChangeInput }}>
			<Analytics />
			{children}
		</ConverterContext.Provider>
	)
}

export default ConverterContext

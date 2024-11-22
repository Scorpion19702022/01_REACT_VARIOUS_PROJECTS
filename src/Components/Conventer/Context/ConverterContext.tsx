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

	const handleChangeInput = (e: string) => {
		setValueInput(e)
	}
	console.log(valueInput)

	return (
		<ConverterContext.Provider value={{ celsius, fare, valueInput, error, isError, handleChangeInput }}>
			<Analytics />
			{children}
		</ConverterContext.Provider>
	)
}

export default ConverterContext

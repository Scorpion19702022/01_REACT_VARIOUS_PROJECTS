import React, { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	degreesIn: string
	degreesOut: string
	valueInput: string | number | null
	error: boolean
	isError: string
	changeDegrees: boolean
	degreesResult: number | string
	handleChangeInput: (e: string) => void
	handleCountDegrees: () => void
	handleChangeDegrees: () => void
}

type ConverterTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	degreesIn: '',
	degreesOut: '',
	valueInput: '',
	error: false,
	isError: '',
	changeDegrees: false,
	degreesResult: '',
	handleChangeInput: (e: string) => {},
	handleCountDegrees: () => {},
	handleChangeDegrees: () => {},
}

const ConverterContext = createContext(InitialState)

export const ConverterProvider = ({ children }: ConverterTypeProvider) => {
	const [degreesIn, setDegreesIn] = useState<string>('℃')
	const [degreesOut, setDegreesOut] = useState<string>('℉')
	const [valueInput, setValueInput] = useState<string | number | null>(null)
	const [error, setError] = useState<boolean>(false)
	const [isError, setIsError] = useState<string>('')
	const [changeDegrees, setChangeDegrees] = useState<boolean>(false)

	const [degreesResult, setDegreesResult] = useState<number | string>('')

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

	const handleChangeDegrees = () => {
		setChangeDegrees(!changeDegrees)
		if (changeDegrees) {
			setDegreesIn('℃')
			setDegreesOut('℉')
		} else if (!changeDegrees) {
			setDegreesIn('℉')
			setDegreesOut('℃')
		}
	}

	return (
		<ConverterContext.Provider
			value={{
				degreesIn,
				degreesOut,
				valueInput,
				error,
				isError,
				changeDegrees,
				degreesResult,
				handleChangeInput,
				handleCountDegrees,
				handleChangeDegrees,
			}}
		>
			<Analytics />
			{children}
		</ConverterContext.Provider>
	)
}

export default ConverterContext

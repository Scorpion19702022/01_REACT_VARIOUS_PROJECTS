import React, { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	degreesIn: string
	degreesOut: string
	valueInput: string | number
	error: boolean
	isError: string
	changeDegrees: boolean
	degreesResult: number | string
	valueFromInput: number | string
	handleChangeInput: (e: string) => void
	handleKeyDown: (e: any) => void
	handleUseEnter: (e: any) => void
	handleCountDegrees: (degrees: string) => void
	handleChangeDegrees: () => void
	handleClean: () => void
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
	valueFromInput: '',
	handleChangeInput: (e: string) => {},
	handleKeyDown: (e: any) => {},
	handleUseEnter: (e: any) => {},
	handleCountDegrees: (degrees: string) => {},
	handleChangeDegrees: () => {},
	handleClean: () => {},
}

const ConverterContext = createContext(InitialState)

export const ConverterProvider = ({ children }: ConverterTypeProvider) => {
	const [degreesIn, setDegreesIn] = useState<string>('℃')
	const [degreesOut, setDegreesOut] = useState<string>('℉')
	const [valueInput, setValueInput] = useState<string | number>('')
	const [error, setError] = useState<boolean>(false)
	const [isError, setIsError] = useState<string>('')
	const [changeDegrees, setChangeDegrees] = useState<boolean>(false)
	const [valueFromInput, setValueFromInput] = useState<number | string>('')

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

	const handleCountDegrees = (degrees: string) => {
		if (degrees === '℃' && valueInput !== '') {
			setValueFromInput(valueInput)
			setError(false)
			setDegreesResult((Number(valueInput) * 1.8 + 32).toFixed(0))
		} else if (degrees === '℉' && valueInput !== '') {
			setValueFromInput(valueInput)
			setError(false)
			setDegreesResult(((Number(valueInput) - 32) / 1.8).toFixed(0))
		} else if (valueInput === '') {
			setError(true)
			setIsError('musisz podać wartość')
		}
	}

	const handleChangeDegrees = () => {
		setChangeDegrees(!changeDegrees)
		if (changeDegrees) {
			if (valueInput !== '' && valueFromInput !== '') {
				setDegreesResult((Number(valueInput) * 1.8 + 32).toFixed(0))
			}
			setDegreesIn('℃')
			setDegreesOut('℉')
		} else if (!changeDegrees) {
			if (valueInput !== '' && valueFromInput !== '') {
				setDegreesResult(((Number(valueInput) - 32) / 1.8).toFixed(0))
			}
			setDegreesIn('℉')
			setDegreesOut('℃')
		}
	}

	const handleKeyDown = (e: any) => {
		const invalidChars = [' ', '.', ',']

		if (invalidChars.includes(e.key)) {
			e.preventDefault()
		}
	}

	const handleUseEnter = (e: any) => {
		if (e.key === 'Enter') {
			handleCountDegrees(degreesIn)
			e.preventDefault()
		}
	}

	const handleClean = () => {
		setDegreesIn('℃')
		setDegreesOut('℉')
		setValueInput('')
		setValueFromInput('')
		setError(false)
		setIsError('')
		setChangeDegrees(false)
		setDegreesResult('')
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
				valueFromInput,
				handleChangeInput,
				handleKeyDown,
				handleUseEnter,
				handleCountDegrees,
				handleChangeDegrees,
				handleClean,
			}}
		>
			<Analytics />
			{children}
		</ConverterContext.Provider>
	)
}

export default ConverterContext

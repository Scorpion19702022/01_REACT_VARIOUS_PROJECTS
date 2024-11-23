import React, { createContext, useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	degreesIn: string
	degreesOut: string
	valueInput: string
	error: boolean
	isError: string
	changeDegrees: boolean
	degreesResult: number | string
	valueFromInput: number | string
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
	valueFromInput: '',
	handleChangeInput: (e: string) => {},
	handleCountDegrees: () => {},
	handleChangeDegrees: () => {},
}

const ConverterContext = createContext(InitialState)

export const ConverterProvider = ({ children }: ConverterTypeProvider) => {
	const [degreesIn, setDegreesIn] = useState<string>('℃')
	const [degreesOut, setDegreesOut] = useState<string>('℉')
	const [valueInput, setValueInput] = useState<string>('')
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

	const handleCountDegrees = () => {
		if (degreesIn === '℃' && valueInput !== '') {
			setError(false)
			setDegreesResult((Number(valueInput) * 1.8 + 32).toFixed(0))
			setValueFromInput(valueInput)
		} else if (degreesIn === '℃' && valueInput !== '') {
			setError(false)
			setDegreesResult(((Number(valueInput) - 32) / 1.8).toFixed(0))
			setValueFromInput(valueInput)
		} else if (valueInput === '') {
			setError(true)
			setIsError('musisz podać wartość')
		}
	}

	// useEffect(() => {
	// 	if (changeDegrees) {
	// 		setDegreesResult((Number(valueInput) * 1.8 + 32).toFixed(0))
	// 	} else if (!changeDegrees) {
	// 		setDegreesResult(((Number(valueInput) - 32) / 1.8).toFixed(0))
	// 	}
	// }, [])

	const handleChangeDegrees = () => {
		setChangeDegrees(!changeDegrees)
		if (changeDegrees) {
			setValueFromInput(valueInput)
			setDegreesResult((Number(valueInput) * 1.8 + 32).toFixed(0))
			setDegreesIn('℃')
			setDegreesOut('℉')
		} else if (!changeDegrees) {
			setValueFromInput(valueInput)
			setDegreesResult(((Number(valueInput) - 32) / 1.8).toFixed(0))
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
				valueFromInput,
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

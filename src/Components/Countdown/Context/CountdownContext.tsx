import React, { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	eventInput: string
	eventEmpty: boolean
	handleChangeEvent: (e: string) => void
}

type CountdownTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	eventInput: '',
	eventEmpty: false,
	handleChangeEvent: (e: string) => {},
}

const CountdownContext = createContext(InitialState)

export const CountdownProvider = ({ children }: CountdownTypeProvider) => {
	const [eventInput, setEventInput] = useState<string>('')
	const [eventEmpty, setEventEmpty] = useState<boolean>(false)

	const handleChangeEvent = (e: string) => {
		const invalid = [' ', '.', ',']
		if (!invalid.includes(e)) {
			setEventInput(e)
		}
	}

	return (
		<CountdownContext.Provider value={{ eventInput, eventEmpty, handleChangeEvent }}>
			{children}
			<Analytics />
		</CountdownContext.Provider>
	)
}

export default CountdownContext

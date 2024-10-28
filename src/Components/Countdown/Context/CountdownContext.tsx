import React, { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	eventInput: string
	handleChangeEvent: (e: string) => void
}

type CountdownTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	eventInput: '',
	handleChangeEvent: (e: string) => {},
}

const CountdownContext = createContext(InitialState)

export const CountdownProvider = ({ children }: CountdownTypeProvider) => {
	const [eventInput, setEventInput] = useState<string>('')

	const handleChangeEvent = (e: string) => {
		const invalid = [' ', '.', ',']
		if (!invalid.includes(e)) {
			setEventInput(e)
		}
	}

	console.log(eventInput)

	return (
		<CountdownContext.Provider value={{ eventInput, handleChangeEvent }}>
			{children}
			<Analytics />
		</CountdownContext.Provider>
	)
}

export default CountdownContext

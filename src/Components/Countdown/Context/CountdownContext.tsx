import React, { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	eventInput: string
	eventEmpty: boolean
	event: string
	eventError: string
	handleChangeEvent: (e: string) => void
	handleAddEvent: () => void
}

type CountdownTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	eventInput: '',
	eventEmpty: false,
	event: '',
	eventError: '',
	handleChangeEvent: (e: string) => {},
	handleAddEvent: () => {},
}

const CountdownContext = createContext(InitialState)

export const CountdownProvider = ({ children }: CountdownTypeProvider) => {
	const [eventInput, setEventInput] = useState<string>('')
	const [eventEmpty, setEventEmpty] = useState<boolean>(false)
	const [event, setEvent] = useState<string>('')
	const [eventError, setEvetError] = useState<string>('')

	const handleChangeEvent = (e: string) => {
		const invalid = [' ', '.', ',']
		if (!invalid.includes(e) && e.length < 35) {
			setEventInput(e)
		}
	}

	const handleAddEvent = () => {
		if (eventInput !== '') {
			setEventEmpty(true)
			setEvent(eventInput)
			setEventInput('')
			setEvetError('')
		} else {
			setEventEmpty(false)
			setEvetError('musisz podać zdarzenie')
		}
	}

	return (
		<CountdownContext.Provider value={{ eventInput, eventEmpty, event, eventError, handleChangeEvent, handleAddEvent }}>
			{children}
			<Analytics />
		</CountdownContext.Provider>
	)
}

export default CountdownContext

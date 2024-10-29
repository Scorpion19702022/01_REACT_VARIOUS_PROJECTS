import React, { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	eventInput: string
	eventEmpty: boolean
	event: string
	eventError: string
	eventDate: any
	handleChangeEvent: (e: string) => void
	handleAddEvent: () => void
	handleClearAll: () => void
	handleUseEnter: (e: any) => void
	handleChangeDate: (e: any) => void
}

type CountdownTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	eventInput: '',
	eventEmpty: false,
	event: '',
	eventError: '',
	eventDate: '',
	handleChangeEvent: (e: string) => {},
	handleAddEvent: () => {},
	handleClearAll: () => {},
	handleUseEnter: (e: any) => {},
	handleChangeDate: (e: any) => {},
}

const CountdownContext = createContext(InitialState)

export const CountdownProvider = ({ children }: CountdownTypeProvider) => {
	let currentDate = new Date().toISOString().slice(0, 10)
	const [eventInput, setEventInput] = useState<string>('')
	const [eventEmpty, setEventEmpty] = useState<boolean>(false)
	const [event, setEvent] = useState<string>('')
	const [eventError, setEvetError] = useState<string>('')
	const [eventDate, setEventDate] = useState<any>(currentDate)

	const handleChangeEvent = (e: string) => {
		const invalid = [' ', '.', ',']
		if (!invalid.includes(e) && e.length < 30) {
			setEventInput(e)
		}
	}

	const handleChangeDate = (e: any) => {
		setEventDate(e)
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

	const handleUseEnter = (e: any) => {
		if (e.key === 'Enter') {
			handleAddEvent()
			e.preventDefault()
		}
	}

	const handleClearAll = () => {
		setEventInput('')
		setEventEmpty(false)
		setEvent('')
		setEvetError('')
		setEventDate(currentDate)
	}

	return (
		<CountdownContext.Provider
			value={{
				eventInput,
				eventEmpty,
				event,
				eventError,
				eventDate,
				handleChangeEvent,
				handleAddEvent,
				handleClearAll,
				handleUseEnter,
				handleChangeDate,
			}}
		>
			{children}
			<Analytics />
		</CountdownContext.Provider>
	)
}

export default CountdownContext

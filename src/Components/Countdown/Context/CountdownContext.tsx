import React, { createContext, useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	eventInput: string
	eventEmpty: boolean
	event: string
	eventError: string
	changeDate: any
	eventDate: any
	countdown: { days: number; hours: number; minutes: number; seconds: number }
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
	changeDate: '',
	eventDate: '',
	countdown: { days: 0, hours: 0, minutes: 0, seconds: 0 },
	handleChangeEvent: (e: string) => {},
	handleAddEvent: () => {},
	handleClearAll: () => {},
	handleUseEnter: (e: any) => {},
	handleChangeDate: (e: any) => {},
}

const CountdownContext = createContext(InitialState)

export const CountdownProvider = ({ children }: CountdownTypeProvider) => {
	let currentDate = new Date().toLocaleString('en-CA').slice(0, 10)
	const [eventInput, setEventInput] = useState<string>('')
	const [eventEmpty, setEventEmpty] = useState<boolean>(false)
	const [event, setEvent] = useState<string>('')
	const [eventError, setEvetError] = useState<string>('')
	const [changeDate, setChangeDate] = useState<any>(currentDate)
	const [eventDate, setEventDate] = useState<any>('')

	const [countdown, setCountdown] = useState<any>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

	const handleChangeEvent = (e: string) => {
		const invalid = [' ', '.', ',']
		if (!invalid.includes(e) && e.length < 30) {
			setEventInput(e)
		}
	}

	const handleChangeDate = (e: any) => {
		setChangeDate(e)
	}

	const handleAddEvent = () => {
		if (eventInput !== '') {
			setEventEmpty(true)
			setChangeDate(currentDate)
			setEvent(eventInput)
			setEventDate(changeDate)
			setEvetError('')
		} else if (eventInput === '') {
			setEventEmpty(false)
			setEvetError('musisz podać zdarzenie')
			setChangeDate(currentDate)
			setEventDate('nie podałeś zdarzenia')
		}
	}

	console.log(eventDate)

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
		setChangeDate(currentDate)
		setEventDate('')
	}

	return (
		<CountdownContext.Provider
			value={{
				eventInput,
				eventEmpty,
				event,
				eventError,
				eventDate,
				changeDate,
				countdown,
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

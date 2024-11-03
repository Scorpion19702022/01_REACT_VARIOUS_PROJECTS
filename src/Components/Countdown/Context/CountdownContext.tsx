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

	useEffect(() => {
		if (!eventDate || eventDate === 'musisz podać zdarzenie') return

		const interval = setInterval(() => {
			const now = new Date().getTime()
			const targetDate = new Date(eventDate).getTime()
			const distance = targetDate - now

			if (distance < 0) {
				clearInterval(interval)
				setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
				return
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24))
			const hours = Math.floor(distance / 1000 / 60 / 60)
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			const seconds = Math.floor((distance % (1000 * 60)) / 1000)

			if (!isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
				setCountdown({ days, hours, minutes, seconds })
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [eventDate])

	const handleAddEvent = () => {
		if (eventInput !== '' && changeDate !== currentDate) {
			setEventEmpty(true)
			setEvent(eventInput)
			setEventDate(changeDate)
			setChangeDate(currentDate)
			setEvetError('')
		} else if (eventInput !== '' && changeDate === currentDate) {
			setEventEmpty(false)
			setEvetError('musisz wybrać datę inną niż dzisiejsza')
			setChangeDate(currentDate)
			setEventDate('musisz wybrać datę inną niż dzisiejsza')
			setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
		} else if (eventInput === '' && changeDate === currentDate) {
			setEventEmpty(false)
			setEvetError('musisz podać zdarzenie')
			setChangeDate(currentDate)
			setEventDate('musisz wybrać datę inną niż dzisiejsza')
			setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
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
		setChangeDate(currentDate)
		setEventDate('')
		setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
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
function preventDefault() {
	throw new Error('Function not implemented.')
}

import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { TypeForGamer } from '../Types/TypeForGamer'

type InitialStateType = {
	gamersList: TypeForGamer[]
	modalInfo: boolean
	modalColor: boolean
	inputName: string
	gamerName: string
	startCount: boolean
	pauseCount: boolean
	resetCount: boolean
	currentColor: string
	stateStopwatch: string
	minutes: number
	seconds: number
	milliseconds: number
	handleServiceModalInfo: () => void
	handleServiceModalChangeColor: () => void
	handleServiceChangeColor: (color: string) => void
	handleChangeInput: (e: string) => void
	handleAddedNameGamer: () => void
	handleUseEnter: (e: any) => void
	handleStart: () => void
	handlePause: () => void
	handleReset: () => void
}

type StopwatchTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	gamersList: [],
	modalInfo: false,
	modalColor: false,
	inputName: '',
	gamerName: '',
	startCount: false,
	pauseCount: false,
	resetCount: false,
	currentColor: 'blue',
	stateStopwatch: '',
	minutes: 0,
	seconds: 0,
	milliseconds: 0,
	handleServiceModalInfo: () => {},
	handleServiceModalChangeColor: () => {},
	handleServiceChangeColor: (color: string) => {},
	handleChangeInput: (e: string) => {},
	handleAddedNameGamer: () => {},
	handleUseEnter: (e: any) => {},
	handleStart: () => {},
	handlePause: () => {},
	handleReset: () => {},
}

const StopwatchCotext = createContext(InitialState)

export const StopwatchProvider = ({ children }: StopwatchTypeProvider) => {
	const [gamersList, setGamersList] = useState<TypeForGamer[]>([])

	const [modalInfo, setModalInfo] = useState<boolean>(false)
	const [modalColor, setModalColor] = useState<boolean>(false)

	const [inputName, setInputName] = useState<string>('')
	const [gamerName, setGamerName] = useState<string>('')

	const [currentColor, setCurrentColor] = useState<string>('blue')

	const [stateStopwatch, setStateStopwatch] = useState<string>('STAN')

	const [startCount, setStartCount] = useState<boolean>(false)
	const [pauseCount, setPauseCout] = useState<boolean>(false)
	const [resetCount, setResetCount] = useState<boolean>(false)

	const [minutes, setMinutes] = useState<number>(0)
	const [seconds, setSeconds] = useState<number>(0)
	const [milliseconds, setMilliseconds] = useState<number>(0)

	const handleServiceModalInfo = () => {
		setModalInfo(!modalInfo)
	}

	const handleServiceModalChangeColor = () => {
		setModalColor(!modalColor)
	}

	const handleServiceChangeColor = (color: string) => {
		setModalColor(false)
		setCurrentColor(color)

		const root = document.documentElement

		if (color === 'blue') {
			root.style.setProperty('--color-theme01', '#d6ecf3')
			root.style.setProperty('--color-theme02', '#add9e7')
			root.style.setProperty('--color-theme03', '#85c6db')
			root.style.setProperty('--color-theme04', '#5cb3cf')
			root.style.setProperty('--color-theme05', '#34a0c4')
			root.style.setProperty('--color-theme06', '#29809c')
			root.style.setProperty('--color-theme07', '#1f6075')
			root.style.setProperty('--color-theme08', '#14404e')
			root.style.setProperty('--color-theme09', '#0a2027')
		} else if (color === 'purple') {
			root.style.setProperty('--color-theme01', '#f2d8ff')
			root.style.setProperty('--color-theme02', '#e5b1ff')
			root.style.setProperty('--color-theme03', '#d88bff')
			root.style.setProperty('--color-theme04', '#cb64ff')
			root.style.setProperty('--color-theme05', '#bf3eff')
			root.style.setProperty('--color-theme06', '#9831cc')
			root.style.setProperty('--color-theme07', '#722599')
			root.style.setProperty('--color-theme08', '#4c1866')
			root.style.setProperty('--color-theme09', '#260c33')
		} else if (color === 'green') {
			root.style.setProperty('--color-theme01', '#cef7dc')
			root.style.setProperty('--color-theme02', '#9df0b9')
			root.style.setProperty('--color-theme03', '#6ce896')
			root.style.setProperty('--color-theme04', '#3be173')
			root.style.setProperty('--color-theme05', '#0bda51')
			root.style.setProperty('--color-theme06', '#08ae40')
			root.style.setProperty('--color-theme07', '#068230')
			root.style.setProperty('--color-theme08', '#045720')
			root.style.setProperty('--color-theme09', '#022b10')
		}
	}

	const handleChangeInput = (e: string) => {
		const invalid = [' ', '.', ',']
		if (!invalid.includes(e)) {
			setInputName(e)
		}
	}

	const handleAddedNameGamer = () => {
		if (inputName !== '') {
			setGamerName(inputName)
			setInputName('')
			setMinutes(0)
			setSeconds(0)
			setMilliseconds(0)
			setStartCount(false)
			setPauseCout(false)
			setResetCount(false)
		} else {
			setGamerName('musisz podać nazwę gracza')
		}
	}

	const handleUseEnter = (e: any) => {
		if (e.key === 'Enter') {
			handleAddedNameGamer()
			e.preventDefault()
		}
	}

	useEffect(() => {
		let interval: any
		if (startCount) {
			interval = setInterval(() => {
				setMilliseconds(prevMilliseconds => {
					if (prevMilliseconds < 99) {
						return prevMilliseconds + 1
					} else {
						setSeconds(prevSeconds => {
							if (prevSeconds < 59) {
								return prevSeconds + 1
							} else {
								setMinutes(prevMinutes => prevMinutes + 1)
								return 0
							}
						})
						return 0
					}
				})
			}, 10)
		}

		return () => clearInterval(interval) // Czyszczenie interwału przy zatrzymaniu stopera
	}, [startCount])

	const handleStart = () => {
		if (gamerName !== '' && gamerName !== 'musisz podać nazwę gracza') {
			setStartCount(true)
			setPauseCout(false)
			setResetCount(false)
			setStateStopwatch('PLAY')
		} else {
			setStartCount(false)
			setPauseCout(false)
			setResetCount(false)
			setStateStopwatch('STAN')
			setGamerName('musisz podać nazwę gracza')
		}
	}

	const handlePause = () => {
		if (gamerName !== '' && gamerName !== 'musisz podać nazwę gracza') {
			setPauseCout(true)
			setStartCount(false)
			setResetCount(false)
			setStateStopwatch('PAUSE')
		} else {
			setStartCount(false)
			setPauseCout(false)
			setResetCount(false)
			setStateStopwatch('STAN')
			setGamerName('musisz podać nazwę gracza')
		}
	}

	const handleReset = () => {
		const gamer: TypeForGamer = {
			id: uuidv4(),
			name: gamerName,
			minutes: minutes,
			seconds: seconds,
			milliseconds: milliseconds,
		}

		if (gamerName !== '' && gamerName !== 'musisz podać nazwę gracza') {
			setGamersList(prevState => [...prevState, gamer])
			setMinutes(0)
			setSeconds(0)
			setMilliseconds(0)
			setResetCount(true)
			setStartCount(false)
			setPauseCout(false)
			setStateStopwatch('RESET')
			setGamerName('')
		} else {
			setStartCount(false)
			setPauseCout(false)
			setResetCount(false)
			setStateStopwatch('STAN')
			setGamerName('musisz podać nazwę gracza')
		}
	}

	console.log(gamersList)

	return (
		<StopwatchCotext.Provider
			value={{
				gamersList,
				modalInfo,
				modalColor,
				inputName,
				gamerName,
				startCount,
				pauseCount,
				resetCount,
				currentColor,
				stateStopwatch,
				minutes,
				seconds,
				milliseconds,
				handleServiceModalInfo,
				handleServiceModalChangeColor,
				handleServiceChangeColor,
				handleChangeInput,
				handleAddedNameGamer,
				handleUseEnter,
				handleStart,
				handlePause,
				handleReset,
			}}
		>
			{children} <Analytics />
		</StopwatchCotext.Provider>
	)
}

export default StopwatchCotext

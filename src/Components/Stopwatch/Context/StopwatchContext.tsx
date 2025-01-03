import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { TypeForGamer } from '../Types/TypeForGamer'

type InitialStateType = {
	gamersList: TypeForGamer[]
	gamerListView: TypeForGamer[]
	modalInfo: boolean
	modalColor: boolean
	inputName: string
	gamerName: string
	startCount: boolean
	pauseCount: boolean
	resetCount: boolean
	viewListGamers: boolean
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
	handleStop: () => void
	handleViewGamers: () => void
	handleCleanAll: () => void
}

type StopwatchTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	gamersList: [],
	gamerListView: [],
	modalInfo: false,
	modalColor: false,
	inputName: '',
	gamerName: '',
	startCount: false,
	pauseCount: false,
	resetCount: false,
	viewListGamers: false,
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
	handleStop: () => {},
	handleViewGamers: () => {},
	handleCleanAll: () => {},
}

const StopwatchCotext = createContext(InitialState)

export const StopwatchProvider = ({ children }: StopwatchTypeProvider) => {
	const [gamersList, setGamersList] = useState<TypeForGamer[]>([])
	const [gamerListView, setGamerListView] = useState<TypeForGamer[]>([])

	const [modalInfo, setModalInfo] = useState<boolean>(false)
	const [modalColor, setModalColor] = useState<boolean>(false)

	const [inputName, setInputName] = useState<string>('')
	const [gamerName, setGamerName] = useState<string>('')

	const [currentColor, setCurrentColor] = useState<string>('blue')

	const [stateStopwatch, setStateStopwatch] = useState<string>('STAN')

	const [startCount, setStartCount] = useState<boolean>(false)
	const [pauseCount, setPauseCout] = useState<boolean>(false)
	const [resetCount, setResetCount] = useState<boolean>(false)

	const [viewListGamers, setViewListGamers] = useState<boolean>(false)

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
		} else if (color === 'orange') {
			root.style.setProperty('--color-theme01', '#ffd3cc')
			root.style.setProperty('--color-theme02', '#ffa799')
			root.style.setProperty('--color-theme03', '#ff7b66')
			root.style.setProperty('--color-theme04', '#ff4f32')
			root.style.setProperty('--color-theme05', '#ff2400')
			root.style.setProperty('--color-theme06', '#cc1c00')
			root.style.setProperty('--color-theme07', '#991500')
			root.style.setProperty('--color-theme08', '#660e00')
			root.style.setProperty('--color-theme09', '#330700')
		}
	}

	const handleChangeInput = (e: string) => {
		const invalid = [' ', '.', ',']
		if (!invalid.includes(e) && e.length <= 18) {
			setInputName(e)
		}

		if (e.length > 18) {
			setGamerName('za długa nazwa gracza')
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
			setStateStopwatch('STAN')
		} else {
			setGamerName('musisz podać nazwę gracza')
			setMinutes(0)
			setSeconds(0)
			setMilliseconds(0)
			setStartCount(false)
			setPauseCout(false)
			setResetCount(false)
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

		return () => clearInterval(interval)
	}, [startCount])

	const handleStart = () => {
		if (resetCount) return setStartCount(false)

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
		if (resetCount) return setPauseCout(false)
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

	const handleStop = () => {
		const gamer: TypeForGamer = {
			id: uuidv4(),
			name: gamerName,
			minutes: minutes < 10 ? `0${minutes}` : minutes,
			seconds: seconds < 10 ? `0${seconds}` : seconds,
			milliseconds: milliseconds < 10 ? `0${milliseconds}` : milliseconds,
		}

		if (gamerName !== '' && gamerName !== 'musisz podać nazwę gracza') {
			setGamersList(prevState =>
				[...prevState, gamer].sort((a, b) => {
					const timeA =
						parseInt(String(a.minutes)) * 60000 + parseInt(String(a.seconds)) * 1000 + parseInt(String(a.milliseconds))
					const timeB =
						parseInt(String(b.minutes)) * 60000 + parseInt(String(b.seconds)) * 1000 + parseInt(String(b.milliseconds))
					return timeA - timeB
				})
			)
			setResetCount(true)
			setStartCount(false)
			setPauseCout(false)
			setStateStopwatch('STOP/ZAPIS CZASU')
		} else {
			setStartCount(false)
			setPauseCout(false)
			setResetCount(false)
			setStateStopwatch('STAN')
			setGamerName('musisz podać nazwę gracza')
		}
	}

	const handleViewGamers = () => {
		setGamerListView(gamersList)
		setViewListGamers(true)
		setInputName('')
		setGamerName('')
		setStateStopwatch('STAN')
		setStartCount(false)
		setPauseCout(false)
		setResetCount(false)
		setMinutes(0)
		setSeconds(0)
		setMilliseconds(0)
	}

	const handleCleanAll = () => {
		setGamersList([])
		setInputName('')
		setGamerName('')
		setStateStopwatch('STAN')
		setStartCount(false)
		setPauseCout(false)
		setResetCount(false)
		setViewListGamers(false)
		setMinutes(0)
		setSeconds(0)
		setMilliseconds(0)
	}

	console.log(gamerListView)

	return (
		<StopwatchCotext.Provider
			value={{
				gamersList,
				gamerListView,
				modalInfo,
				modalColor,
				inputName,
				gamerName,
				startCount,
				pauseCount,
				resetCount,
				viewListGamers,
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
				handleStop,
				handleViewGamers,
				handleCleanAll,
			}}
		>
			{children} <Analytics />
		</StopwatchCotext.Provider>
	)
}

export default StopwatchCotext

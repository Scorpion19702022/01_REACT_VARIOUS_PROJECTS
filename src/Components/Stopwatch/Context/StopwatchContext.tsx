import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect, useState } from 'react'

type InitialStateType = {
	modalInfo: boolean
	modalColor: boolean
	startCount: boolean
	currentColor: string
	stateStopwatch: string
	minutes: number
	seconds: number
	milliseconds: number
	handleServiceModalInfo: () => void
	handleServiceModalChangeColor: () => void
	handleServiceChangeColor: (color: string) => void
	handleStart: () => void
}

type StopwatchTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	modalInfo: false,
	modalColor: false,
	startCount: false,
	currentColor: 'blue',
	stateStopwatch: '',
	minutes: 0,
	seconds: 0,
	milliseconds: 0,
	handleServiceModalInfo: () => {},
	handleServiceModalChangeColor: () => {},
	handleServiceChangeColor: (color: string) => {},
	handleStart: () => {},
}

const StopwatchCotext = createContext(InitialState)

export const StopwatchProvider = ({ children }: StopwatchTypeProvider) => {
	const [modalInfo, setModalInfo] = useState<boolean>(false)
	const [modalColor, setModalColor] = useState<boolean>(false)
	const [currentColor, setCurrentColor] = useState<string>('blue')

	const [stateStopwatch, setStateStopwatch] = useState<string>('STAN')

	const [startCount, setStartCount] = useState<boolean>(false)

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
			root.style.setProperty('--color-theme01', '#e0f5cc')
			root.style.setProperty('--color-theme02', '#c1eb99')
			root.style.setProperty('--color-theme03', '#a3e166')
			root.style.setProperty('--color-theme04', '#84d732')
			root.style.setProperty('--color-theme05', '#66cd00')
			root.style.setProperty('--color-theme06', '#51a400')
			root.style.setProperty('--color-theme07', '#3d7b00')
			root.style.setProperty('--color-theme08', '#285200')
			root.style.setProperty('--color-theme09', '#142900')
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
		setStartCount(true)
		setStateStopwatch('PLAY')
	}

	return (
		<StopwatchCotext.Provider
			value={{
				modalInfo,
				modalColor,
				startCount,
				currentColor,
				stateStopwatch,
				minutes,
				seconds,
				milliseconds,
				handleServiceModalInfo,
				handleServiceModalChangeColor,
				handleServiceChangeColor,
				handleStart,
			}}
		>
			{children} <Analytics />
		</StopwatchCotext.Provider>
	)
}

export default StopwatchCotext

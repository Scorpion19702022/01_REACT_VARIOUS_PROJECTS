import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	modalInfo: boolean
	modalColor: boolean
	currentColor: string
	handleServiceModalInfo: () => void
	handleServiceModalChangeColor: () => void
	handleServiceChangeColor: (color: string) => void
}

type StopwatchTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	modalInfo: false,
	modalColor: false,
	currentColor: 'blue',
	handleServiceModalInfo: () => {},
	handleServiceModalChangeColor: () => {},
	handleServiceChangeColor: (color: string) => {},
}

const StopwatchCotext = createContext(InitialState)

export const StopwatchProvider = ({ children }: StopwatchTypeProvider) => {
	const [modalInfo, setModalInfo] = useState<boolean>(false)
	const [modalColor, setModalColor] = useState<boolean>(false)
	const [currentColor, setCurrentColor] = useState<string>('blue')

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
			root.style.setProperty('--color-theme01', '#f1d6ec')
			root.style.setProperty('--color-theme02', '#e4adda')
			root.style.setProperty('--color-theme03', '#d784c8')
			root.style.setProperty('--color-theme04', '#8c5382')
			root.style.setProperty('--color-theme05', '#702963')
			root.style.setProperty('--color-theme06', '#59204f')
			root.style.setProperty('--color-theme07', '#43183b')
			root.style.setProperty('--color-theme08', '#2c1027')
			root.style.setProperty('--color-theme09', '#210c1d')
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

	return (
		<StopwatchCotext.Provider
			value={{
				modalInfo,
				modalColor,
				currentColor,
				handleServiceModalInfo,
				handleServiceModalChangeColor,
				handleServiceChangeColor,
			}}
		>
			{children} <Analytics />
		</StopwatchCotext.Provider>
	)
}

export default StopwatchCotext

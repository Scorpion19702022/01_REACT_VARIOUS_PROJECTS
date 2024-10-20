import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	modalInfo: boolean
	modalColor: boolean
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
	handleServiceModalInfo: () => {},
	handleServiceModalChangeColor: () => {},
	handleServiceChangeColor: (color: string) => {},
}

const StopwatchCotext = createContext(InitialState)

export const StopwatchProvider = ({ children }: StopwatchTypeProvider) => {
	const [modalInfo, setModalInfo] = useState<boolean>(false)
	const [modalColor, setModalColor] = useState<boolean>(false)

	const handleServiceModalInfo = () => {
		setModalInfo(!modalInfo)
	}

	const handleServiceModalChangeColor = () => {
		setModalColor(!modalColor)
	}

	const handleServiceChangeColor = (color: string) => {
		setModalColor(false)
	}

	return (
		<StopwatchCotext.Provider
			value={{ modalInfo, modalColor, handleServiceModalInfo, handleServiceModalChangeColor, handleServiceChangeColor }}
		>
			{children} <Analytics />
		</StopwatchCotext.Provider>
	)
}

export default StopwatchCotext

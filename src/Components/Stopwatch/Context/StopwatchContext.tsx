import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	modalInfo: boolean
	modalColor: boolean
	handleServiceModalInfo: () => void
	handleServiceChangeColor: (color: string) => void
}

type StopwatchTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	modalInfo: false,
	modalColor: false,
	handleServiceModalInfo: () => {},
	handleServiceChangeColor: (color: string) => {},
}

const StopwatchCotext = createContext(InitialState)

export const StopwatchProvider = ({ children }: StopwatchTypeProvider) => {
	const [modalInfo, setModalInfo] = useState<boolean>(false)
	const [modalColor, setModalColor] = useState<boolean>(false)

	const handleServiceModalInfo = () => {
		setModalInfo(!modalInfo)
	}

	const handleServiceChangeColor = (color: string) => {
		setModalColor(!modalColor)
	}

	return (
		<StopwatchCotext.Provider value={{ modalInfo, modalColor, handleServiceModalInfo, handleServiceChangeColor }}>
			{children} <Analytics />
		</StopwatchCotext.Provider>
	)
}

export default StopwatchCotext

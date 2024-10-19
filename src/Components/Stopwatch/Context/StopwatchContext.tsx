import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	modalInfo: boolean
	handleServiceModalInfo: () => void
	// handleOpenModalInfo: () => void
	// handleCloseModalInfo: () => void
}

type StopwatchTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	modalInfo: false,
	handleServiceModalInfo: () => {},
	// handleOpenModalInfo: () => {},
	// handleCloseModalInfo: () => {},
}

const StopwatchCotext = createContext(InitialState)

export const StopwatchProvider = ({ children }: StopwatchTypeProvider) => {
	const [modalInfo, setModalInfo] = useState<boolean>(false)

	const handleServiceModalInfo = () => {
		setModalInfo(!modalInfo)
	}

	return (
		<StopwatchCotext.Provider value={{ modalInfo, handleServiceModalInfo }}>
			{children} <Analytics />
		</StopwatchCotext.Provider>
	)
}

export default StopwatchCotext

import { Analytics } from '@vercel/analytics/react'
import React, { createContext } from 'react'

type InitialStateType = {}

type StopwatchTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const StopwatchCotext = createContext(InitialState)

export const StopwatchProvider = ({ children }: StopwatchTypeProvider) => {
	return (
		<StopwatchCotext.Provider value={{}}>
			{children} <Analytics />
		</StopwatchCotext.Provider>
	)
}

export default StopwatchCotext

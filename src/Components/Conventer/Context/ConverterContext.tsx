import React, { createContext } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {}

type ConverterTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const ConverterContext = createContext(InitialState)

export const ConverterProvider = ({ children }: ConverterTypeProvider) => {
	return (
		<ConverterContext.Provider value={{}}>
			<Analytics />
			{children}
		</ConverterContext.Provider>
	)
}

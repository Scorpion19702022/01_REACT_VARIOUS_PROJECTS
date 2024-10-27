import React, { createContext } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {}

type CountdownTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const CountdownContext = createContext(InitialState)

export const CountdownProvider = ({ children }: CountdownTypeProvider) => {
	return (
		<CountdownContext.Provider value={{}}>
			{children}
			<Analytics />
		</CountdownContext.Provider>
	)
}

export default CountdownContext

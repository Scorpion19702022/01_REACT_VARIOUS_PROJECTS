import React, { createContext } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {}

type CountdownTimeTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const CountdownTimeContext = createContext(InitialState)

export const CountdownTimeProvider = ({ children }: CountdownTimeTypeProvider) => {
	return (
		<CountdownTimeContext.Provider value={{}}>
			{children}
			<Analytics />
		</CountdownTimeContext.Provider>
	)
}

export default CountdownTimeContext

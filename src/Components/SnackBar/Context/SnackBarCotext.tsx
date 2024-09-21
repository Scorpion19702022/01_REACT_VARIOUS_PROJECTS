import { Analytics } from '@vercel/analytics/react'
import React, { createContext } from 'react'

type InitialStateType = {}

type SnackBarProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const SnackBarContext = createContext(InitialState)

export const SnackBarProvider = ({ children }: SnackBarProviderType) => {
	return (
		<SnackBarContext.Provider value={{}}>
			{children}
			<Analytics />
		</SnackBarContext.Provider>
	)
}

export default SnackBarContext

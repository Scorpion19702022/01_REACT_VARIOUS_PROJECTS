import { Analytics } from '@vercel/analytics/react'
import React, { createContext } from 'react'

type InitialStateType = {}

type TicTacToeProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: TicTacToeProviderType) => {
	return (
		<TicTacToeContext.Provider value={{}}>
			{children} <Analytics />
		</TicTacToeContext.Provider>
	)
}

export default TicTacToeContext

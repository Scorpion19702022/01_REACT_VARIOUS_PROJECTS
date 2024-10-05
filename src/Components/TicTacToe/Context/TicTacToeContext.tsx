import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	initialGameBorder: any[]
}

type TicTacToeProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	initialGameBorder: [[], [], []],
}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: TicTacToeProviderType) => {
	const [initialGameBorder, setInitialGameBorder] = useState<any[]>([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	])

	return (
		<TicTacToeContext.Provider value={{ initialGameBorder }}>
			{children} <Analytics />
		</TicTacToeContext.Provider>
	)
}

export default TicTacToeContext

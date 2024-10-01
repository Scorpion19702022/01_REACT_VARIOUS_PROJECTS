import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	playerName: string
	handleChangePlayer: (e: string, active: string) => void
}

type TicTacToeProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	playerName: '',
	handleChangePlayer: (e: string, active: string) => {},
}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: TicTacToeProviderType) => {
	const [playerName, setPlayerName] = useState<string>('')

	const handleChangePlayer = (e: string, active: string) => {}

	return (
		<TicTacToeContext.Provider value={{ playerName, handleChangePlayer }}>
			{children} <Analytics />
		</TicTacToeContext.Provider>
	)
}

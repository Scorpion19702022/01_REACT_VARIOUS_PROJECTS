import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	playerName: string
	isActiveInput: boolean
	handleChangePlayer: (e: string, active: string) => void
}

type TicTacToeProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	playerName: '',
	isActiveInput: false,
	handleChangePlayer: (e: string, active: string) => {},
}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: TicTacToeProviderType) => {
	const [playerName, setPlayerName] = useState<string>('')
	const [isActiveInput, setIsActiveInput] = useState<boolean>(false)

	const handleChangePlayer = (e: string, active: string) => {}

	return (
		<TicTacToeContext.Provider value={{ playerName, isActiveInput, handleChangePlayer }}>
			{children} <Analytics />
		</TicTacToeContext.Provider>
	)
}

export default TicTacToeContext

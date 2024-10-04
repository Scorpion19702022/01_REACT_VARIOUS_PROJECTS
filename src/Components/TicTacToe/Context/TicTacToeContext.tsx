import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	playerName: string
	isActiveInput: boolean
	handleInitPlayer: (player: string) => void
	handleChangePlayer: (e: string, active: string) => void
}

type TicTacToeProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	playerName: '',
	isActiveInput: false,
	handleInitPlayer: (player: string) => {},
	handleChangePlayer: (e: string, active: string) => {},
}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: TicTacToeProviderType) => {
	const [playerName, setPlayerName] = useState<string>('')
	const [isActiveInput, setIsActiveInput] = useState<boolean>(false)

	const handleInitPlayer = (player: string) => {
		if (player === 'one_player') {
			console.log('klik 1')
			setIsActiveInput(!isActiveInput)
		} else if (player === 'two_player') {
			console.log('klik 2')
			setIsActiveInput(!isActiveInput)
		}
	}

	const handleChangePlayer = (e: string, active: string) => {}

	return (
		<TicTacToeContext.Provider value={{ playerName, isActiveInput, handleInitPlayer, handleChangePlayer }}>
			{children} <Analytics />
		</TicTacToeContext.Provider>
	)
}

export default TicTacToeContext

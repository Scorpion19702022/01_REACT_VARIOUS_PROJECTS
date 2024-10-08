import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	initialGameBoard: (string | null)[][]
	winningCombination: { row: number; column: number }[][]
	playerNames: { X: string; O: string }
	setPlayerNames: (names: { X: string; O: string }) => void
}

type TicTacToeProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	initialGameBoard: [],
	winningCombination: [],
	playerNames: { X: 'Player-1', O: 'Player-2' },
	setPlayerNames: () => {},
}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: TicTacToeProviderType) => {
	const [playerNames, setPlayerNames] = useState({ X: 'Player-1', O: 'Player-2' })

	const initialGameBoard = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]

	const winningCombination = [
		[
			{ row: 0, column: 0 },
			{ row: 0, column: 1 },
			{ row: 0, column: 2 },
		],
		[
			{ row: 1, column: 0 },
			{ row: 1, column: 1 },
			{ row: 1, column: 2 },
		],
		[
			{ row: 2, column: 0 },
			{ row: 2, column: 1 },
			{ row: 2, column: 2 },
		],
		[
			{ row: 0, column: 0 },
			{ row: 1, column: 0 },
			{ row: 2, column: 0 },
		],
		[
			{ row: 0, column: 1 },
			{ row: 1, column: 1 },
			{ row: 2, column: 1 },
		],
		[
			{ row: 0, column: 2 },
			{ row: 1, column: 2 },
			{ row: 2, column: 2 },
		],
		[
			{ row: 0, column: 0 },
			{ row: 1, column: 1 },
			{ row: 2, column: 2 },
		],
		[
			{ row: 0, column: 2 },
			{ row: 1, column: 1 },
			{ row: 2, column: 0 },
		],
	]

	return (
		<TicTacToeContext.Provider value={{ initialGameBoard, winningCombination, playerNames, setPlayerNames }}>
			{children}
			<Analytics />
		</TicTacToeContext.Provider>
	)
}

export default TicTacToeContext

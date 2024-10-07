import { Analytics } from '@vercel/analytics/react'
import React, { createContext } from 'react'

type Square = string | null // Typ dla kwadratów na planszy (może być "X", "O" lub null)
type InitialStateType = {
	initialGameBoard: Square[][] // Plansza 3x3
	winningCombination: { row: number; column: number }[][] // Kombinacje wygrywające
}

type TicTacToeProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	initialGameBoard: [],
	winningCombination: [],
}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: TicTacToeProviderType) => {
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
		<TicTacToeContext.Provider value={{ initialGameBoard, winningCombination }}>
			{children} <Analytics />
		</TicTacToeContext.Provider>
	)
}

export default TicTacToeContext

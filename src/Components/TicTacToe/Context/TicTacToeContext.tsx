import { Analytics } from '@vercel/analytics/react'
import React, { createContext } from 'react'

type InitialStateType = {
	winningCombination: any[]
}

type TicTacToeProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	winningCombination: [],
}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: TicTacToeProviderType) => {
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
		<TicTacToeContext.Provider value={{ winningCombination }}>
			{children} <Analytics />
		</TicTacToeContext.Provider>
	)
}

export default TicTacToeContext

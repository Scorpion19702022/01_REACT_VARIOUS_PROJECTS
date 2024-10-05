import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useState } from 'react'

type InitialStateType = {
	initialGameBoard: (string | null)[][]
	handleSelectSquare: (colIndex: string | number | any, rowIndex: string | number | any) => void
}

type TicTacToeProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	initialGameBoard: [[], [], []],
	handleSelectSquare: (colIndex: string | number, rowIndex: string | number) => {},
}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: TicTacToeProviderType) => {
	const [initialGameBoard, setInitialGameBoard] = useState<(string | null)[][]>([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	])

	const handleSelectSquare = (rowIndex: number, colIndex: number) => {
		setInitialGameBoard(prevState => {
			const updatedBoard = [...prevState.map((innerAray: any) => [...innerAray])]
			updatedBoard[rowIndex][colIndex] = 'X'
			return updatedBoard
		})
	}

	return (
		<TicTacToeContext.Provider value={{ initialGameBoard, handleSelectSquare }}>
			{children} <Analytics />
		</TicTacToeContext.Provider>
	)
}

export default TicTacToeContext

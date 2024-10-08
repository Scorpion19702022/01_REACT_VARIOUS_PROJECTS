import { createContext, useState } from 'react'
import useTicTacToeData from '../Hook/useTicTacToeData'

type InitialStateType = {
	playerNames: { X: string; O: string }
	setPlayerNames: (names: { X: string; O: string }) => void
	initialGameBoard: (string | null)[][]
	winningCombination: { row: number; column: number }[][]
}

const InitialState: InitialStateType = {
	playerNames: { X: 'Player-1', O: 'Player-2' },
	setPlayerNames: () => {},
	initialGameBoard: [],
	winningCombination: [],
}

const TicTacToeContext = createContext(InitialState)

export const TicTacToeProvider = ({ children }: { children: React.ReactNode }) => {
	const [playerNames, setPlayerNames] = useState({ X: 'Player-1', O: 'Player-2' })
	const { initialGameBoard, winningCombination } = useTicTacToeData()

	return (
		<TicTacToeContext.Provider value={{ playerNames, setPlayerNames, initialGameBoard, winningCombination }}>
			{children}
		</TicTacToeContext.Provider>
	)
}

export default TicTacToeContext

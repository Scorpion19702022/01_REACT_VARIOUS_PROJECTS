import React, { useContext, useEffect, useState } from 'react'

import TicTacToePlayer from './TicTacToePlayer'

import styles from './Styles/TicTacToePlayers.module.css'
import TicTacToeGameBoard from './TicTacToeGameBoard'
import TicTacToeLog from './TicTacToeLog'
import TicTacToeContext from './Context/TicTacToeContext'

const TicTacToePlayers = () => {
	const { initialGameBoard, winningCombination } = useContext(TicTacToeContext)

	const [gameTurns, setGameTurns] = useState<any[]>([])

	// let gameBoard = initialGameBoard

	// for (const combination of winningCombination) {
	// 	const firstSquareSymbol =
	// 	const secondSquareSymbol =
	// 	const thirdSquareSymbol =
	// }

	const deriveActivePlayer = (gameTurns: any) => {
		let currentPlayer = 'X'

		if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
			currentPlayer = 'O'
		}

		return currentPlayer
	}
	const activePlayer = deriveActivePlayer(gameTurns)

	const [gameBoard, setGameBoard] = useState<(string | null)[][]>(initialGameBoard)

	useEffect(() => {
		const updatedBoard = initialGameBoard.map(row => row.slice())

		for (const turn of gameTurns) {
			const { square, player } = turn
			const { row, col } = square
			updatedBoard[row][col] = player
		}

		setGameBoard(updatedBoard)
	}, [gameTurns])

	const handleChangePlayer = (rowIndex: any, colIndex: any) => {
		setGameTurns(prevTurns => {
			const currentPlayer = deriveActivePlayer(prevTurns)

			const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]

			return updateTurns
		})
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_players}>
				<ol className={styles.players}>
					<TicTacToePlayer InitialName='Player-1' symbol='X' isActivPlayer={activePlayer === 'X'} />
					<TicTacToePlayer InitialName='Player-2' symbol='O' isActivPlayer={activePlayer === 'O'} />
				</ol>
			</div>
			<div className={styles.box_game}>
				<TicTacToeGameBoard changePlayer={handleChangePlayer} board={gameBoard} />
				<TicTacToeLog turns={gameTurns} />
			</div>
		</section>
	)
}

export default TicTacToePlayers

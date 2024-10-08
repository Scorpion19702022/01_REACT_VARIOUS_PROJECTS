import React, { useContext, useEffect, useState } from 'react'

import TicTacToePlayer from './TicTacToePlayer'

import styles from './Styles/TicTacToePlayers.module.css'
import TicTacToeGameBoard from './TicTacToeGameBoard'
import TicTacToeLog from './TicTacToeLog'
import TicTacToeContext from './Context/TicTacToeContext'
import TicTacToeGameOver from './TicTacToeGameOver'

const TicTacToePlayers = () => {
	const { initialGameBoard, winningCombination } = useContext(TicTacToeContext)

	const [gameTurns, setGameTurns] = useState<any[]>([])
	const [gameBoard, setGameBoard] = useState<(string | null)[][]>(initialGameBoard)

	// let gameBoard = initialGameBoard

	let winner

	for (const combination of winningCombination) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

		if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
			winner = firstSquareSymbol
		}
	}

	const deriveActivePlayer = (gameTurns: any) => {
		let currentPlayer = 'X'

		if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
			currentPlayer = 'O'
		}

		return currentPlayer
	}
	const activePlayer = deriveActivePlayer(gameTurns)

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
				{winner ? <TicTacToeGameOver winner={winner} /> : null}
				<TicTacToeGameBoard changePlayer={handleChangePlayer} board={gameBoard} />
				<TicTacToeLog turns={gameTurns} />
			</div>
		</section>
	)
}

export default TicTacToePlayers

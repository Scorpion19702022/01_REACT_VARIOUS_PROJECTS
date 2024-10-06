import React, { useState } from 'react'

import TicTacToePlayer from './TicTacToePlayer'

import styles from './Styles/TicTacToePlayers.module.css'
import TicTacToeGameBoard from './TicTacToeGameBoard'
import TicTacToeLog from './TicTacToeLog'

const TicTacToePlayers = () => {
	const [gameTurns, setGameTurns] = useState<any[]>([])
	const [activePlayer, setActivePlayer] = useState<string | boolean>('X')

	const handleChangePlayer = (rowIndex, colIndex) => {
		setActivePlayer(curActivePlayer => (curActivePlayer === 'X' ? 'O' : 'X'))
		setGameTurns(prevTurns => {
			let currentPlayer = 'X'

			if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
				currentPlayer = 'O'
			}

			const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns]

			return updatedTurns
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
				<TicTacToeGameBoard changePlayer={handleChangePlayer} activePlayerSymbol={activePlayer} turns={gameTurns} />
				<TicTacToeLog />
			</div>
		</section>
	)
}

export default TicTacToePlayers

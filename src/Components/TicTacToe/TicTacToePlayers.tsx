import React, { useState } from 'react'

import TicTacToePlayer from './TicTacToePlayer'

import styles from './Styles/TicTacToePlayers.module.css'
import TicTacToeGameBoard from './TicTacToeGameBoard'

const TicTacToePlayers = () => {
	const [activePlayer, setActivePlayer] = useState<string | boolean>('X')

	const handleChangePlayer = () => {
		setActivePlayer(curActivePlayer => (curActivePlayer === 'X' ? 'O' : 'X'))

		console.log(activePlayer)
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_players}>
				<ol className={styles.players}>
					<TicTacToePlayer InitialName='Player-1' symbol='X' isActivPlayer={activePlayer === 'X'} />
					<TicTacToePlayer InitialName='Player-2' symbol='O' isActivPlayer={activePlayer === 'O'} />
				</ol>
			</div>
			<TicTacToeGameBoard changePlayer={handleChangePlayer} activePlayerSymbol={activePlayer} />
		</section>
	)
}

export default TicTacToePlayers

import React from 'react'

import styles from './Styles/TicTacToeGameBoard.module.css'

const TicTacToeGameBoard = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_game_board}></div>
		</section>
	)
}

export default TicTacToeGameBoard

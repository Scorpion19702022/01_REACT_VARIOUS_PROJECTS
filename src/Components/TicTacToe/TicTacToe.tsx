import React from 'react'
import TicTacToeHeader from './TicTacToeHeader'

import styles from './Styles/TicTacToe.module.css'
import TicTacToePlayers from './TicTacToePlayers'

const TicTacToe = () => {
	return (
		<main className={styles.wrapper}>
			<TicTacToeHeader />
			<TicTacToePlayers />
		</main>
	)
}

export default TicTacToe

import React from 'react'
import TicTacToeHeader from './TicTacToeHeader'

import styles from './Styles/TicTacToe.module.css'
import TicTacToePlayers from './TicTacToePlayers'
import { TicTacToeProvider } from './Context/TicTacToeContext'

const TicTacToe = () => {
	return (
		<main className={styles.wrapper}>
			<TicTacToeHeader />
			<TicTacToeProvider>
				<TicTacToePlayers />
			</TicTacToeProvider>
		</main>
	)
}

export default TicTacToe

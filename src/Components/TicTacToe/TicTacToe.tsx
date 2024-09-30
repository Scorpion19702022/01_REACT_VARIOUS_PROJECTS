import React from 'react'
import TicTacToeHeader from './TicTacToeHeader'

import styles from './Styles/TicTacToe.module.css'

const TicTacToe = () => {
	return (
		<main className={styles.wrapper}>
			<TicTacToeHeader />
		</main>
	)
}

export default TicTacToe

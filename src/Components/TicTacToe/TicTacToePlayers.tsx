import React from 'react'

import TicTacToePlayer from './TicTacToePlayer'

import styles from './Styles/TicTacToePlayers.module.css'

const TicTacToePlayers = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_players}>
				<ol className={styles.players}>
					<TicTacToePlayer InitialName='Player-1' symbol='X' />
					<TicTacToePlayer InitialName='Player-2' symbol='O' />
				</ol>
			</div>
		</section>
	)
}

export default TicTacToePlayers

import React, { useContext } from 'react'

import TicTacToePlayer from './TicTacToePlayer'

import styles from './Styles/TicTacToePlayers.module.css'
import TicTacToeContext from './Context/TicTacToeContext'

const TicTacToePlayers = () => {
	const { handleInitPlayer } = useContext(TicTacToeContext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_players}>
				<ol className={styles.players}>
					<TicTacToePlayer name='Player - X' symbol='X' buttonActive={() => handleInitPlayer('one_player')} />
					<TicTacToePlayer name='Player - 0' symbol='O' buttonActive={() => handleInitPlayer('two_player')} />
				</ol>
			</div>
		</section>
	)
}

export default TicTacToePlayers

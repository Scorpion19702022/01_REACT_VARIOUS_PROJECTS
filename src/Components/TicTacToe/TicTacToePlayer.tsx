import React from 'react'

import styles from './Styles/TicTacToePlayers.module.css'

type InitialTypeProps = {
	name: string
	symbol: string
}

const TicTacToePlayer: React.FC<InitialTypeProps> = ({ name, symbol }) => {
	return (
		<li className={styles.players_list}>
			<span className={styles.player}>
				<span className={styles.player_name}>{name}</span>
				<span className={styles.player_symbol}>{symbol}</span>
			</span>
			<button className={styles.btn_edit}>edytuj</button>
		</li>
	)
}

export default TicTacToePlayer

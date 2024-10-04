import React, { useContext } from 'react'

import styles from './Styles/TicTacToePlayers.module.css'
import TicTacToeContext from './Context/TicTacToeContext'

type InitialTypeProps = {
	name: string
	symbol: string
	buttonActive: any
}

const TicTacToePlayer: React.FC<InitialTypeProps> = ({ name, symbol, buttonActive }) => {
	const { isActiveInput } = useContext(TicTacToeContext)

	return (
		<li className={styles.players_list}>
			<span className={styles.player}>
				<span className={styles.player_name}>{name}</span>
				<span className={styles.player_symbol}>{symbol}</span>
			</span>
			<button className={styles.btn_edit} onClick={buttonActive}>
				{!isActiveInput ? 'edytuj' : 'zapisz'}
			</button>
		</li>
	)
}

export default TicTacToePlayer

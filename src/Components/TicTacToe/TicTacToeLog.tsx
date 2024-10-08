import React, { useContext } from 'react'

import styles from './Styles/TicTacToeLog.module.css'
import TicTacToeContext from './Context/TicTacToeContext'

type InitialTypeProps = {
	turns: any
}

const TicTacToeLog: React.FC<InitialTypeProps> = ({ turns }) => {
	const { playerNames } = useContext(TicTacToeContext)

	return (
		<section className={styles.box_log}>
			<ol className={styles.log}>
				{turns.map((turn: any) => (
					<li className={styles.log_list} key={`${turn.square.row}${turn.square.col}`}>
						Ruch gracza: <span className={styles.player_name}>{playerNames[turn.player as 'X' | 'O']}</span> zaznaczono:{' '}
						<span className={styles.player_name}>{turn.player}</span>
					</li>
				))}
			</ol>
		</section>
	)
}

export default TicTacToeLog

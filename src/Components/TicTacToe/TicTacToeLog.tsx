import React from 'react'

import styles from './Styles/TicTacToeLog.module.css'

type InitialTypeProps = {
	turns: any
}

const TicTacToeLog: React.FC<InitialTypeProps> = ({ turns }) => {
	return (
		<section className={styles.box_log}>
			<ol className={styles.log}>
				{turns.map((turn: any) => (
					<li className={styles.log_list} key={`${turn.square.row}${turn.square.col}`}>
						Gracz: {turn.player} zaznaczył {turn.square.row}, {turn.square.col}
					</li>
				))}
			</ol>
		</section>
	)
}

export default TicTacToeLog

import React, { useContext } from 'react'

import styles from './Styles/TicTacToeGameOver.module.css'
import TicTacToeContext from './Context/TicTacToeContext'

export type InitialTypeProps = {
	winner: string | undefined
	restartGame: () => void
}

const TicTacToeGameOver: React.FC<InitialTypeProps> = ({ winner, restartGame }) => {
	const { playerNames } = useContext(TicTacToeContext)

	return (
		<div className={styles.box_game_over}>
			<h2 className={styles.game_over_heading}>Gra zakończona!</h2>
			{winner && (
				<p className={styles.game_over_win}>
					Zwycięzca: <span className={styles.player_name_win}>{playerNames[winner as 'X' | 'O']}</span>
				</p>
			)}
			{!winner && <p className={styles.game_over_draw}>Gra nierozstrzygnięta</p>}
			<button className={styles.btn_reset} onClick={restartGame}>
				Restart
			</button>
		</div>
	)
}

export default TicTacToeGameOver

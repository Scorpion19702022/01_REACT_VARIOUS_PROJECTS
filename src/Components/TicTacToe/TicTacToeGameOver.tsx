import React, { useContext } from 'react'

import styles from './Styles/GameOver.module.css'
import TicTacToeContext from './Context/TicTacToeContext'

export type InitialTypeProps = {
	winner: string | undefined
	restartGame: () => void
}

const TicTacToeGameOver: React.FC<InitialTypeProps> = ({ winner, restartGame }) => {
	const { playerNames } = useContext(TicTacToeContext)

	return (
		<div className={styles.box_game_over}>
			<h2 className={styles.game_over_heading}>Gra zakończona</h2>
			{winner && <p>Zwyciężył: {playerNames[winner as 'X' | 'O']}</p>}
			{!winner && <p>Gra nie rozstrzygnięta</p>}
			<button onClick={restartGame}>Restart</button>
		</div>
	)
}

export default TicTacToeGameOver

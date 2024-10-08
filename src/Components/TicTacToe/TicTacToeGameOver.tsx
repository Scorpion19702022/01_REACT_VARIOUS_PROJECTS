import React from 'react'

import styles from './Styles/GameOver.module.css'

export type InitialTypeProps = {
	winner: string
}

const TicTacToeGameOver: React.FC<InitialTypeProps> = ({ winner }) => {
	return (
		<div className={styles.box_game_over}>
			<h2 className={styles.game_over_heading}>Gra zakończona</h2>
			<p>Zwyciężył: {winner}</p>
			<button>Restart</button>
		</div>
	)
}

export default TicTacToeGameOver

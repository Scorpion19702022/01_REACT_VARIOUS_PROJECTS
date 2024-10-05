import React, { useContext } from 'react'

import styles from './Styles/TicTacToeGameBoard.module.css'
import TicTacToeContext from './Context/TicTacToeContext'

const TicTacToeGameBoard = () => {
	const { initialGameBorder } = useContext(TicTacToeContext)

	console.log(initialGameBorder)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_game_board}>
				<ol className={styles.game_board}>
					{initialGameBorder.map((row, rowIndex) => (
						<li key={rowIndex} className={styles.game_row}>
							<ol className={styles.game_group}>
								{row.map((playerSymbol: any, colIndex: any) => (
									<li key={colIndex} className={styles.game_col}>
										<button className={styles.game_btns}>{playerSymbol}</button>
									</li>
								))}
							</ol>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}

export default TicTacToeGameBoard

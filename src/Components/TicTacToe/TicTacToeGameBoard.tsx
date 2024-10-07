import React from 'react'

import styles from './Styles/TicTacToeGameBoard.module.css'

type TicTacToeGameBoardProps = {
	changePlayer: (rowIndex: number, colIndex: number) => void
	board: (string | null)[][]
}

const TicTacToeGameBoard: React.FC<TicTacToeGameBoardProps> = ({ changePlayer, board }) => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_game_board}>
				<ol className={styles.game_board}>
					{board.map((row, rowIndex) => (
						<li key={rowIndex} className={styles.game_row}>
							<ol className={styles.game_group}>
								{row.map((playerSymbol, colIndex) => (
									<li key={colIndex} className={styles.game_col}>
										<button
											className={styles.game_btns}
											onClick={() => changePlayer(rowIndex, colIndex)}
											disabled={playerSymbol !== null}
										>
											{playerSymbol}
										</button>
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

import React, { useContext, useEffect, useState } from 'react'

import styles from './Styles/TicTacToeGameBoard.module.css'
import TicTacToeContext from './Context/TicTacToeContext'

type InitialTypeProps = {
	changePlayer: (rowIndex: number, colIndex: number) => void
	turns: { square: { row: number; col: number }; player: string }[]
}

const TicTacToeGameBoard: React.FC<InitialTypeProps> = ({ changePlayer, turns }) => {
	const { initialGameBoard } = useContext(TicTacToeContext)

	const [gameBoard, setGameBoard] = useState<(string | null)[][]>(initialGameBoard)

	useEffect(() => {
		const updatedBoard = initialGameBoard.map(row => row.slice())

		for (const turn of turns) {
			const { square, player } = turn
			const { row, col } = square
			updatedBoard[row][col] = player
		}

		setGameBoard(updatedBoard)
	}, [turns])

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_game_board}>
				<ol className={styles.game_board}>
					{gameBoard.map((row, rowIndex) => (
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

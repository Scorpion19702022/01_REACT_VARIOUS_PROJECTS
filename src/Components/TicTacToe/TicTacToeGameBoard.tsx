import React, { useState } from 'react'

import styles from './Styles/TicTacToeGameBoard.module.css'

type InitialTypeProps = {
	changePlayer: (rowIndex: any, colIndex: any) => void
	turns: any[]
}

const initialGameBorder: (string | null)[][] = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
]

const TicTacToeGameBoard: React.FC<InitialTypeProps> = ({ changePlayer, turns }) => {
	let gameBoard = initialGameBorder

	for (const turn of turns) {
		const { square, player } = turn
		const { row, col } = square

		gameBoard[row][col] = player
	}

	// const [gameBoard, setGameBoard] = useState<(string | null)[][]>(initialGameBorder)

	// const handleSelectSquare = (rowIndex: number, colIndex: number) => {
	// 	setGameBoard(prevState => {
	// 		const updatedBoard = [...prevState.map(innerAray => [...innerAray])]
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol
	// 		return updatedBoard
	// 	})

	// 	changePlayer()
	// }

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_game_board}>
				<ol className={styles.game_board}>
					{gameBoard.map((row, rowIndex) => (
						<li key={rowIndex} className={styles.game_row}>
							<ol className={styles.game_group}>
								{row.map((playerSymbol: any, colIndex: any) => (
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

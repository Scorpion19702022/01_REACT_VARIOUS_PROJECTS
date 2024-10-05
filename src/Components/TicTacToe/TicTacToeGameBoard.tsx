import React, { useState } from 'react'

import styles from './Styles/TicTacToeGameBoard.module.css'

const initialGameBorder: (string | null)[][] = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
]

const TicTacToeGameBoard = () => {
	const [gameBoard, setGameBoard] = useState(initialGameBorder)

	const handleSelectSquare = (rowIndex: number, colIndex: number) => {
		setGameBoard(prevState => {
			const updatedBoard = [...prevState.map(innerAray => [...innerAray])]
			updatedBoard[rowIndex][colIndex] = 'X'
			return updatedBoard
		})
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_game_board}>
				<ol className={styles.game_board}>
					{gameBoard.map((row, rowIndex) => (
						<li key={rowIndex} className={styles.game_row}>
							<ol className={styles.game_group}>
								{row.map((playerSymbol: any, colIndex: any) => (
									<li key={colIndex} className={styles.game_col}>
										<button className={styles.game_btns} onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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

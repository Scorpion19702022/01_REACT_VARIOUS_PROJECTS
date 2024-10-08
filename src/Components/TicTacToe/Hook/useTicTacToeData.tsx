const useTicTacToeData = () => {
	const initialGameBoard = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]

	const winningCombination = [
		[
			{ row: 0, column: 0 },
			{ row: 0, column: 1 },
			{ row: 0, column: 2 },
		],
		[
			{ row: 1, column: 0 },
			{ row: 1, column: 1 },
			{ row: 1, column: 2 },
		],
		[
			{ row: 2, column: 0 },
			{ row: 2, column: 1 },
			{ row: 2, column: 2 },
		],
		[
			{ row: 0, column: 0 },
			{ row: 1, column: 0 },
			{ row: 2, column: 0 },
		],
		[
			{ row: 0, column: 1 },
			{ row: 1, column: 1 },
			{ row: 2, column: 1 },
		],
		[
			{ row: 0, column: 2 },
			{ row: 1, column: 2 },
			{ row: 2, column: 2 },
		],
		[
			{ row: 0, column: 0 },
			{ row: 1, column: 1 },
			{ row: 2, column: 2 },
		],
		[
			{ row: 0, column: 2 },
			{ row: 1, column: 1 },
			{ row: 2, column: 0 },
		],
	]

	return { initialGameBoard, winningCombination }
}

export default useTicTacToeData

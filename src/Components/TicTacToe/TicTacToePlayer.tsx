import React, { useContext, useState } from 'react'

import styles from './Styles/TicTacToePlayers.module.css'
import TicTacToeContext from './Context/TicTacToeContext'

type InitialTypeProps = {
	InitialName: string
	symbol: string
	isActivPlayer: string | boolean
}

const TicTacToePlayer: React.FC<InitialTypeProps> = ({ InitialName, symbol, isActivPlayer }) => {
	const { playerNames, setPlayerNames } = useContext(TicTacToeContext)

	const [playerName, setPlayerName] = useState<string>(InitialName)
	const [isEditing, setIsEditing] = useState<boolean>(false)

	const handleEditClick = () => {
		setIsEditing(editing => !editing)
		if (playerName === '') {
			setPlayerName(InitialName)
		} else {
			setPlayerNames({
				...playerNames,
				[symbol]: playerName,
			})
		}
	}

	const handleChange = (e: string) => {
		setPlayerName(e)
	}

	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			handleEditClick()
			e.preventDefault()
		}
	}

	let player = <span className={isActivPlayer ? styles.active_player_name : styles.player_name}>{playerName}</span>

	if (isEditing) {
		player = (
			<input
				className={styles.input}
				type='text'
				required
				placeholder={playerName}
				value={playerName}
				onChange={e => handleChange(e.target.value)}
			/>
		)
	}

	return (
		<li className={styles.players_list} onKeyDown={handleKeyDown}>
			<span className={styles.player}>
				{player}
				<span className={isActivPlayer ? styles.active_player_symbol : styles.player_symbol}>{symbol}</span>
			</span>
			<button className={styles.btn_edit} onClick={handleEditClick}>
				{!isEditing ? 'edytuj' : 'zapisz'}
			</button>
		</li>
	)
}

export default TicTacToePlayer

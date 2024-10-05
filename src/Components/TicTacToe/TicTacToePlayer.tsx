import React, { useState } from 'react'

import styles from './Styles/TicTacToePlayers.module.css'

type InitialTypeProps = {
	InitialName: string
	symbol: string
	// isActivPlayer: string
}

const TicTacToePlayer: React.FC<InitialTypeProps> = ({ InitialName, symbol }) => {
	const [playerName, setPlayerName] = useState<string>(InitialName)
	const [isEditing, setIsEditing] = useState<boolean>(false)

	const handleEditClick = () => {
		setIsEditing(editing => !editing)
		if (playerName === '') {
			setPlayerName(InitialName)
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

	let player = <span className={styles.player_name}>{playerName}</span>

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
				<span className={styles.player_symbol}>{symbol}</span>
			</span>
			<button className={styles.btn_edit} onClick={handleEditClick}>
				{!isEditing ? 'edytuj' : 'zapisz'}
			</button>
		</li>
	)
}

export default TicTacToePlayer

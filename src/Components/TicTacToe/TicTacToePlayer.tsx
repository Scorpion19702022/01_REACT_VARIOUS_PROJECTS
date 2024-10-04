import React, { useState } from 'react'

import styles from './Styles/TicTacToePlayers.module.css'

type InitialTypeProps = {
	name: string
	symbol: string
}

const TicTacToePlayer: React.FC<InitialTypeProps> = ({ name, symbol }) => {
	const [isEditing, setIsEditing] = useState<boolean>(false)

	const handleEditClick = () => {
		setIsEditing(!isEditing)
	}

	let player = <span className={styles.player_name}>{name}</span>

	if (isEditing) {
		player = <input className={styles.input} type='text' required placeholder={name} />
	}

	return (
		<li className={styles.players_list}>
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

import React, { useContext } from 'react'

import styles from './Styles/TicTacToePlayers.module.css'
import TicTacToeContext from './Context/TicTacToeContext'

const TicTacToePlayers = () => {
	const { handleChangePlayer } = useContext(TicTacToeContext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_players}>
				<div className={styles.box_player_one}>
					<input
						className={styles.player_input}
						type='text'
						placeholder='Player-X'
						onChange={e => handleChangePlayer(e.target.value, 'player1')}
					/>
					<i className={`fas fa-xmark ${styles.sign}`}></i>
					<button className={styles.player_save_btn}>edytuj</button>
				</div>
				<div className={styles.line_select}></div>
				<div className={styles.box_player_two}>
					<input
						className={styles.player_input}
						type='text'
						placeholder='Player-0'
						onChange={e => handleChangePlayer(e.target.value, 'player2')}
					/>
					<i className={`fa-regular fa-circle ${styles.sign}`}></i>
					<button className={styles.player_save_btn}>edytuj</button>
				</div>
			</div>
		</section>
	)
}

export default TicTacToePlayers

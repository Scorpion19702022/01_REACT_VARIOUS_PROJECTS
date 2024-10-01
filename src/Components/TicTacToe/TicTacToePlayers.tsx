import React from 'react'

import styles from './Styles/TicTacToePlayers.module.css'

const TicTacToePlayers = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_players}>
				<div className={styles.box_player_one}>
					<input className={styles.player_input} type='text' placeholder='Player-X' />
					<button className={styles.player_save_btn}>edytuj</button>
				</div>
				<div className={styles.line_select}></div>
				<div className={styles.box_player_two}>
					<input className={styles.player_input} type='text' placeholder='Player-0' />
					<button className={styles.player_save_btn}>edytuj</button>
				</div>
			</div>
		</section>
	)
}

export default TicTacToePlayers

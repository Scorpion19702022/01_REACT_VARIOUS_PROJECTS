import React from 'react'

import styles from './Styles/TicTacToePlayers.module.css'

const TicTacToePlayers = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_players}>
				<ol className={styles.players}>
					<li className={styles.players_list}>
						<span className={styles.player}>
							<span className={styles.player_name}>Player 1</span>
							<span className={styles.player_symbol}>X</span>
						</span>
						<button className={styles.btn_edit}>edytuj</button>
					</li>
					<li className={styles.players_list}>
						<span className={styles.player}>
							<span className={styles.player_name}>Player 1</span>
							<span className={styles.player_symbol}>0</span>
						</span>
						<button className={styles.btn_edit}>edytuj</button>
					</li>
				</ol>
			</div>
		</section>
	)
}

export default TicTacToePlayers

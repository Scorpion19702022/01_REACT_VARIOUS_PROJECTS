import React from 'react'

import styles from './Styles/TicTacToeHeader.module.css'
import TicTacImg01 from './assets/tic_01.png'

const TicTacToeHeader = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header_img}>
				<img className={styles.img} src={TicTacImg01} alt='' />
			</div>
			<div className={styles.back}></div>
			<div className={styles.header_text}>
				<h1>Tic Tac Toe</h1>
				<span>zagraj w popularną grę</span>
			</div>
		</section>
	)
}

export default TicTacToeHeader

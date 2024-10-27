import React from 'react'

import styles from './Styles/CountdownTimer.module.css'

import Joy from './assets/joy.png'

const CountdownTimer = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_img}>
				<img className={styles.img} src={Joy} alt='woman_is_joy' />
			</div>
			<div className={styles.box_count}>
				<h2 className={styles.heading_count}>Ile zostało do... ?</h2>
				<div className={styles.box_theme}>
					<div className={styles.box_inputs}>
						<label className={styles.label}>Podaj zdarzenie</label>
						<input className={styles.input} type='text' />
					</div>
					<div className={styles.box_btn_theme}>
						<button className={styles.btn_theme}>zapisz</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CountdownTimer

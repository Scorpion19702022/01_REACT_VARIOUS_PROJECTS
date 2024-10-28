import React, { useContext } from 'react'

import styles from './Styles/CountdownTimer.module.css'

import Joy from './assets/joy.png'
import CountdownContext from './Context/CountdownContext'

const CountdownTimer = () => {
	const { eventInput, eventEmpty, event, eventError, handleChangeEvent, handleAddEvent } = useContext(CountdownContext)

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
						<input
							className={styles.input}
							type='text'
							value={eventInput}
							onChange={e => handleChangeEvent(e.target.value)}
						/>
					</div>
					<div className={styles.box_btn_theme}>
						<button className={styles.btn_theme} onClick={handleAddEvent}>
							zapisz
						</button>
					</div>
				</div>
				<div className={styles.box_your_event}>
					<span className={styles.your_event}>{!eventEmpty ? eventError : event}</span>
				</div>
			</div>
		</section>
	)
}

export default CountdownTimer

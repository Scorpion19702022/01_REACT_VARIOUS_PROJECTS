import React, { useContext } from 'react'

import styles from './Styles/CountdownData.module.css'

import Joy from './assets/joy.png'
import CountdownContext from './Context/CountdownContext'

const CountdownData = () => {
	const {
		eventInput,
		eventEmpty,
		event,
		eventError,
		handleChangeEvent,
		handleAddEvent,
		handleClearAll,
		handleUseEnter,
	} = useContext(CountdownContext)

	return (
		<section className={styles.wrapper} onKeyDown={handleUseEnter}>
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
						<button className={styles.btn_theme} onClick={handleClearAll} disabled={event === '' ? true : false}>
							wyczyść
						</button>
					</div>
				</div>
				<div className={styles.box_date}>
					<label className={styles.label}> wybierz datę zdarzenia:</label>
					<input className={styles.input_date} type='date' />
				</div>
				<div className={styles.box_your_event}>
					<span className={styles.your_event}>
						<span className={styles.title_event}>Zdarzenie:</span> {!eventEmpty ? eventError : event}
					</span>
					<span className={styles.your_event_date}>
						<span className={styles.title_event}>Data zdarzenia:</span>data
					</span>
				</div>
			</div>
		</section>
	)
}

export default CountdownData

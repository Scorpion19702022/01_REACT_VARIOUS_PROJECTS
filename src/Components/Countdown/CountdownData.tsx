import React, { useContext } from 'react'

import styles from './Styles/CountdownData.module.css'

import Joy from './assets/joy.png'
import CountdownContext from './Context/CountdownContext'
import CountdownCount from './CountdownCount'

const CountdownData = () => {
	const {
		eventInput,
		eventEmpty,
		event,
		eventError,
		changeDate,
		eventDate,
		popupOpen,
		handleChangeEvent,
		handleAddEvent,
		handleClearAll,
		handleUseEnter,
		handleChangeDate,
	} = useContext(CountdownContext)

	return (
		<section className={styles.wrapper} onKeyDown={handleUseEnter}>
			<div className={styles.box_img}>
				<img className={styles.img} src={Joy} alt='woman_is_joy' />
			</div>
			<div className={popupOpen ? styles.box_popup : styles.no_box_popup}>
				<h2 className={styles.popup_heading}>UWAGA!!!</h2>
				<p className={styles.popup_text}>Musisz podać nazwę zdarzenia i wybrać czas w przyszłości.</p>
				<p className={styles.popup_text}>
					Czas jest liczony od godziny 00:00 dnia następnego. Jeżeli chcesz sprawdzić ile pozostało czasu do końca
					bierzącego dnia wybierz datę dnia kolejnego. W przypadku innego czasu w przyszłości czas będzie odliczany od
					rozpoczęcia wybranego dnia.
				</p>
				<p className={styles.popup_text}>
					Odliczanie pokazuje i odlicza w dniach i godzinach łączny czas do rozpoczęcia dnia ze zdarzeniem.
				</p>
				<button className={styles.popup_btn}>zamknij</button>
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
					<label className={styles.label_date}> wybierz datę zdarzenia:</label>
					<input
						className={styles.input_date}
						type='date'
						value={changeDate}
						min={changeDate}
						onChange={e => handleChangeDate(e.target.value)}
					/>
				</div>
				<div className={styles.box_your_event}>
					<span className={styles.your_event}>
						<span className={styles.title_event}>Zdarzenie:</span> {!eventEmpty ? eventError : event}
					</span>
					<span className={styles.your_event_date}>
						<span className={styles.title_event}>Data zdarzenia:</span>
						{eventDate}
					</span>
				</div>
			</div>
			<CountdownCount />
		</section>
	)
}

export default CountdownData

import React, { useContext } from 'react'

import styles from './Styles/CountdownCount.module.css'
import CountdownContext from './Context/CountdownContext'

const CountdownCount = () => {
	const { countdown } = useContext(CountdownContext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.popup}>
				<h2 className={styles.popup_heading}>UWAGA!!!</h2>
				<p className={styles.popup_text}>
					Czas jest liczony od godziny 00:00 dnia następnego. Jeżeli chcesz sprawdzić ile pozostało czasu do końca
					bierzącego dnia wybierz datę dnia kolejnego. W przypadku innego czasu w przyszłości czas będzie odliczany od
					rozpoczęcia wybranego dnia.
				</p>
				<p className={styles.popup_text}>
					Odliczanie pokazuje i odlicza w dniach i godzinach łączny czas do rozpoczęcia dnia ze zdarzeniem. Minuty i
					sekundy pokazują rzeczywiste odliczanie.
				</p>
				<button className={styles.popup_btn}>zamknij</button>
			</div>
			<div className={styles.box_heading}>
				<h2 className={styles.heading}>Pozostało:</h2>
				<h2 className={styles.heading}>Odliczanie minut i sekund:</h2>
			</div>
			<div className={styles.box_count}>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>dni</h4>
					<span className={styles.count_timer}>{countdown.days}</span>
				</div>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>godzin</h4>
					<span className={styles.count_timer}>{countdown.hours}</span>
				</div>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>minuty</h4>
					<span className={styles.count_timer}>
						{countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}
					</span>
				</div>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>sekundy</h4>
					<span className={styles.count_timer}>
						{countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}
					</span>
				</div>
			</div>
		</section>
	)
}

export default CountdownCount

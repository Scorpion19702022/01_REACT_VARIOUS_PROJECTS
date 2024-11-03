import React, { useContext } from 'react'

import styles from './Styles/CountdownCount.module.css'
import CountdownContext from './Context/CountdownContext'

const CountdownCount = () => {
	const { countdown } = useContext(CountdownContext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_heading}>
				<h2 className={styles.heading}>Pozostało:</h2>
				<h2 className={styles.heading}>Odliczanie minut i sekund:</h2>
			</div>
			<div className={styles.box_count}>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>dni do:</h4>
					<span className={styles.count_timer}>{countdown.days}</span>
				</div>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>godzin do:</h4>
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

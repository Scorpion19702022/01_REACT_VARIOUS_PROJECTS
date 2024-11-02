import React, { useContext } from 'react'

import styles from './Styles/CountdownCount.module.css'
import CountdownContext from './Context/CountdownContext'

const CountdownCount = () => {
	const { countdown } = useContext(CountdownContext)

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Pozostało:</h2>
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
					<h4 className={styles.count_heading}>minut</h4>
					<span className={styles.count_timer}>{countdown.minutes}</span>
				</div>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>sekund</h4>
					<span className={styles.count_timer}>{countdown.seconds}</span>
				</div>
			</div>
		</section>
	)
}

export default CountdownCount

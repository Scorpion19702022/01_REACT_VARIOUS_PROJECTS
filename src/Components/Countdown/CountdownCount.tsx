import React from 'react'

import styles from './Styles/CountdownCount.module.css'

const CountdownCount = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Pozostało:</h2>
			<div className={styles.box_count}>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>dni</h4>
					<span className={styles.count_timer}>0</span>
				</div>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>godziny</h4>
					<span className={styles.count_timer}>0</span>
				</div>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>minuty</h4>
					<span className={styles.count_timer}>0</span>
				</div>
				<div className={styles.count}>
					<h4 className={styles.count_heading}>sekundy</h4>
					<span className={styles.count_timer}>0</span>
				</div>
			</div>
		</section>
	)
}

export default CountdownCount

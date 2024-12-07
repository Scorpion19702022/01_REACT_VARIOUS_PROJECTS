import React from 'react'

import styles from './Styles/ExchangeRateTrendData.module.css'

const ExchangeRateTrendData = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Trend</h2>
			<p className={styles.text_info}>
				Wykres pokazuje trend kursów walut w przedziale czasowym od 12.11.2024 do 12.12.2024
			</p>
		</section>
	)
}

export default ExchangeRateTrendData

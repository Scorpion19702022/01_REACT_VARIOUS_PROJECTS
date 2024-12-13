import React from 'react'

import styles from './Styles/ExchangeRateTrendData.module.css'
import useExchangeRateTrendData from './Hook/useExchangeRateTrendData'

const ExchangeRateTrendData = () => {
	const { startDate, endDate } = useExchangeRateTrendData()

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Trend</h2>
			<p className={styles.text_info}>
				Wykres pokazuje trend kursów walut w przedziale czasowym od {startDate} do {endDate}
			</p>
		</section>
	)
}

export default ExchangeRateTrendData

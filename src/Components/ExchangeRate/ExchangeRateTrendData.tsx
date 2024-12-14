import React from 'react'

import styles from './Styles/ExchangeRateTrendData.module.css'
import useExchangeRateTrendData from './Hook/useExchangeRateTrendData'
import ExchangeRateChart from './ExchangeRateChart'

const ExchangeRateTrendData = () => {
	const { startDate, endDate } = useExchangeRateTrendData()

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_info_text}>
				<h2 className={styles.heading}>Trend</h2>
				<p className={styles.text_info}>
					Wykres pokazuje trend kursów walut w przedziale czasowym od {startDate} do {endDate}
				</p>
				<p className={styles.text_info}>
					Gdy w danym okresie wystąpił dzień wolny, data nie będzie wyświetlana, a dane kursów będą z dnia ostatniej
					aktualizacji
				</p>
			</div>
			<ExchangeRateChart />
		</section>
	)
}

export default ExchangeRateTrendData

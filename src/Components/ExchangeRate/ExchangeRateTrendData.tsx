import React from 'react'

import styles from './Styles/ExchangeRateTrendData.module.css'
import useExchangeRateTrendData from './Hook/useExchangeRateTrendData'
import ExchangeRateChart from './ExchangeRateChart'

const ExchangeRateTrendData = () => {
	const { quantityDays } = useExchangeRateTrendData()

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Trend</h2>

			<div className={styles.box_navigation}>
				<div className={styles.box_info_text}>
					<p className={styles.text_info}>Wykres pokazuje trend kursów walut z ostatich {quantityDays} dni</p>
					<p className={styles.text_info}>
						Gdy w danym okresie wystąpił dzień wolny, data nie będzie wyświetlana, a dane kursów będą z dnia ostatniej
						aktualizacji
					</p>
				</div>
				<div className={styles.box_change_date}>
					<p className={styles.info_input}>Wybierz datę z przeszłości i sprawdż trend do obecnego kursu</p>
					<div className={styles.box_inputs}>
						<div className={styles.box_input}></div>
					</div>
				</div>
			</div>
			<ExchangeRateChart />
		</section>
	)
}

export default ExchangeRateTrendData

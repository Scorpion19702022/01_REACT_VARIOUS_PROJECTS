import React from 'react'

import styles from './Styles/ExchangeRateTrendData.module.css'
import useExchangeRateTrendData from './Hook/useExchangeRateTrendData'
import ExchangeRateChart from './ExchangeRateChart'

const ExchangeRateTrendData = () => {
	const {
		quantityDays,
		startDate,
		endDate,
		endDateTrend,
		checkStartDate,
		chooseStartDate,
		handleChangeDate,
		handleChooseTrendDate,
	} = useExchangeRateTrendData()

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Trend</h2>

			<p className={styles.text_info_trend}>
				Wstępnie wykres pokazuje trend kursów walut z ostatich {quantityDays} dni
			</p>
			<div className={styles.box_navigation}>
				<div className={styles.box_info_text}>
					<p className={styles.text_info}>
						Maksymalnie możesz wybrać 60 dni wstecz. Gdy w danym okresie wystąpił dzień wolny, data nie będzie
						wyświetlana, a dane kursów będą z dnia ostatniej aktualizacji
					</p>
				</div>
				<div className={styles.line}></div>
				<div className={styles.box_change_date}>
					<p className={styles.info_input}>Wybierz datę z przeszłości i sprawdż trend do obecnego kursu</p>
					<div className={styles.box_inputs}>
						<div className={styles.box_input}>
							<label className={styles.label}>Wybierz datę:</label>
							<input
								className={styles.input}
								type='date'
								value={checkStartDate}
								max={startDate}
								min={chooseStartDate}
								onChange={e => handleChangeDate(e.target.value)}
							/>
						</div>
						<div className={styles.box_btns}>
							<button className={styles.btn} onClick={handleChooseTrendDate}>
								sprawdź
							</button>
							<button className={styles.btn}>wyczyść</button>
						</div>
					</div>
				</div>
			</div>
			<ExchangeRateChart key={checkStartDate} />
		</section>
	)
}

export default ExchangeRateTrendData

import React from 'react'

import styles from './Styles/ExchangeRateHistoryData.module.css'
// import ExchangeRateContext from './Context/ExchangeRateContext'
import useHistoryExchageRate from './Hook/useHistoryExchangeRate'

const ExchangeRateHistoryData = () => {
	// const { historyDate } = useContext(ExchangeRateContext)

	const { historyDate, checkDate, handleChangeDate, handleResetDate, historyRate } = useHistoryExchageRate()

	const historyExchangeRate = historyRate.map(item => (
		<div className={styles.box_rate} key={item.code}>
			<ul className={styles.rate_list}>
				<li className={styles.rate}>
					<p>{item.currency}:</p> <p>{item.mid.toFixed(2)} zł</p>
				</li>
			</ul>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_check}>
				<h2 className={styles.header}>Sprawdż kurs z innej daty</h2>
				<div className={styles.box_inputs}>
					<div className={styles.box_input}>
						<label className={styles.label}>Wybierz datę:</label>
						<input
							className={styles.input}
							type='date'
							value={historyDate}
							max={historyDate}
							onChange={e => handleChangeDate(e.target.value)}
						/>
					</div>
					<button className={styles.btn} onClick={handleResetDate}>
						resetuj
					</button>
				</div>
				<p className={styles.error_date}>
					Po wybraniu dnia świateczego wyświetli się kurs i data z dnia ostatnich publikowanych danych
				</p>
				<p className={styles.text}>Kurs z dnia: {checkDate}</p>
			</div>
			<div className={styles.box_exchange_rate}>{historyExchangeRate}</div>
		</section>
	)
}

export default ExchangeRateHistoryData

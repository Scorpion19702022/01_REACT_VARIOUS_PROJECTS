import React, { useContext } from 'react'

import styles from './Styles/ExchangeRateCurrentData.module.css'
import ExchangeRateContext from './Context/ExchangeRateContext'
import ExchangeRateHistoryData from './ExchangeRateHistoryData'

const ExchangeRateCurrentData = () => {
	const { todayRatesData, handleRefresh } = useContext(ExchangeRateContext)

	let currentDate = new Date()

	currentDate.setDate(currentDate.getDate() + 1)
	let dayOfWeek = currentDate.getDay()

	console.log(dayOfWeek)

	if (dayOfWeek === 0) {
		currentDate.setDate(currentDate.getDate() + 1)
	} else if (dayOfWeek === 6) {
		currentDate.setDate(currentDate.getDate() + 2)
	} else if (dayOfWeek === 5) {
		currentDate.setDate(currentDate.getDate() + 3)
	}

	let nextUpdateData = currentDate.toLocaleString().slice(0, 10)

	console.log(nextUpdateData)

	// let currentDate = new Date().toLocaleString('pl-CA').slice(0, 10)

	const currentExchangeRate = todayRatesData.map(item => (
		<div key={item.code} className={styles.box_rate}>
			<ul className={styles.rate_list}>
				<li className={styles.rate}>
					<p>{item.currency}:</p> <p>{item.mid.toFixed(2)} zł</p>
				</li>
			</ul>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_current_data}>
				<div className={styles.box_info}>
					<h1 className={styles.header}>Kursy walut względem złotego</h1>
					<p className={styles.info}>Aktualizacja: {nextUpdateData} około godziny 12:00</p>
					<button className={styles.btn_refresh} onClick={handleRefresh}>
						Zaktualizuj dane
					</button>
				</div>
				<div className={styles.box_exchange_rate}>{currentExchangeRate}</div>
			</div>
			<ExchangeRateHistoryData />
		</section>
	)
}

export default ExchangeRateCurrentData

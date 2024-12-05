import React, { useContext } from 'react'

import styles from './Styles/ExchangeRateCurrentData.module.css'
import ExchangeRateContext from './Context/ExchangeRateContext'
import ExchangeRateHistoryData from './ExchangeRateHistoryData'

const ExchangeRateCurrentData = () => {
	const { todayRatesData, handleRefresh } = useContext(ExchangeRateContext)

	let currentDate = new Date()
	let currentHour = currentDate.getHours()

	// currentDate.setDate(currentDate.getDate() + 1)

	// if (currentHour >= 12) {
	// 	currentDate.setDate(currentDate.getDate() + 1)
	// }

	let dayOfWeek = currentDate.getDay()

	console.log(dayOfWeek)
	console.log(currentDate)

	if (dayOfWeek === 0) {
		currentDate.setDate(currentDate.getDate() + 1)
	} else if (dayOfWeek === 6) {
		currentDate.setDate(currentDate.getDate() + 2)
	} else if (dayOfWeek === 5 && currentHour >= 12) {
		currentDate.setDate(currentDate.getDate() + 3)
	} else if (currentHour >= 12) {
		currentDate.setDate(currentDate.getDate() + 1)
	} else {
		currentDate.setDate(currentDate.getDate() + 1)
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
					<h2 className={styles.header}>Aktualny kurs walut względem złotego</h2>
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

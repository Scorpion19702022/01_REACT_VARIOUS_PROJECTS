import React, { useContext } from 'react'

import styles from './Styles/ExchangeRateCurrentData.module.css'
import ExchangeRateContext from './Context/ExchangeRateContext'

const ExchangeRateCurrentData = () => {
	const { todayRatesData } = useContext(ExchangeRateContext)

	let currentDate = new Date().toLocaleString('pl-CA').slice(0, 10)

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
			<div className={styles.box_info}>
				<h1 className={styles.header}>Kursy walut względem złotego</h1>
				<p className={styles.info}>Aktualizacja: {currentDate} około godziny 12:00</p>
				<button>Zamknij stronę</button>
			</div>
			<div className={styles.box_exchange_rate}>{currentExchangeRate}</div>
		</section>
	)
}

export default ExchangeRateCurrentData

import React, { useContext } from 'react'

import styles from './Styles/ExchangeRateCurrentData.module.css'
import ExchangeRateContext from './Context/ExchangeRateContext'

const ExchangeRateCurrentData = () => {
	const { todayRatesData } = useContext(ExchangeRateContext)

	console.log(todayRatesData)

	const currentExchangeRate = todayRatesData.map(item => (
		<div key={item.code} className={styles.box_rate}>
			<ul className={styles.rate_list}>
				<li className={styles.rate}>
					<p>{item.currency}:</p> <p>{item.mid} zł</p>
				</li>
			</ul>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<h1 className={styles.header}>Kursy walut względem złotego:</h1>
			<div className={styles.box_exchange_rate}>{currentExchangeRate}</div>
		</section>
	)
}

export default ExchangeRateCurrentData

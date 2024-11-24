import React, { useContext } from 'react'

import styles from './Styles/ExchangeRateCurrentData.module.css'
import ExchangeRateContext from './Context/ExchangeRateContext'

const ExchangeRateCurrentData = () => {
	const { todayRatesData } = useContext(ExchangeRateContext)

	console.log(todayRatesData)

	const currentExchangeRate = todayRatesData.map((item, index) => (
		<div>
			<ul key={index}>
				<li>{item.currency}</li>
			</ul>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<div>
				<h1>Kursy walut:</h1>
				<div>{currentExchangeRate}</div>
			</div>
		</section>
	)
}

export default ExchangeRateCurrentData

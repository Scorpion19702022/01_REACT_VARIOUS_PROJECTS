import React from 'react'

import styles from './Styles/ExchangeRate.module.css'
import ExchangeRateHeader from './ExchangeRateHeader'
import { ExchangeRateProvider } from './Context/ExchangeRateContext'
import ExchangeRateCurrentData from './ExchangeRateCurrentData'
import ExchangeRateTrendData from './ExchangeRateTrendData'

const ExchangeRate = () => {
	return (
		<main className={styles.wrapper}>
			<ExchangeRateProvider>
				<ExchangeRateHeader />
				<div className={styles.box_exchange_rate}>
					<ExchangeRateCurrentData />
					<ExchangeRateTrendData />
				</div>
			</ExchangeRateProvider>
		</main>
	)
}

export default ExchangeRate

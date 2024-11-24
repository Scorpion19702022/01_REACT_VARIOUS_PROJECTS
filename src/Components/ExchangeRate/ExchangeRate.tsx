import React from 'react'

import styles from './Styles/ExchangeRate.module.css'
import ExchangeRateHeader from './ExchangeRateHeader'
import { ExchangeRateProvider } from './Context/ExchangeRateContext'
import ExchangeRateCurrentData from './ExchangeRateCurrentData'

const ExchangeRate = () => {
	return (
		<main className={styles.wrapper}>
			<ExchangeRateProvider>
				<ExchangeRateHeader />
				<ExchangeRateCurrentData />
			</ExchangeRateProvider>
		</main>
	)
}

export default ExchangeRate

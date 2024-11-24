import React from 'react'

import styles from './Styles/ExchangeRate.module.css'
import ExchangeRateHeader from './ExchangeRateHeader'
import { ExchangeRateProvider } from './Context/ExchangeRateContext'

const ExchangeRate = () => {
	return (
		<main className={styles.wrapper}>
			<ExchangeRateProvider>
				<ExchangeRateHeader />
			</ExchangeRateProvider>
		</main>
	)
}

export default ExchangeRate

import React from 'react'

import styles from './Styles/Investment.module.css'
import InvestmentHeader from './InvestmentHeader'
import InvestmentInputs from './InvestmentInputs'
import { InvestmentProvider } from './Context/InvestmentContext'
import InvestmentResult from './InvestmentResult'
import InvestmentChart from './InvestmentChart'

const Investment = () => {
	return (
		<main className={styles.wrapper}>
			<InvestmentHeader />
			<InvestmentProvider>
				<InvestmentInputs />
				<InvestmentResult />
				<InvestmentChart />
			</InvestmentProvider>
		</main>
	)
}

export default Investment

import React from 'react'

import styles from './Styles/Investment.module.css'
import InvestmentHeader from './InvestmentHeader'
import InvestmentInputs from './InvestmentInputs'

const Investment = () => {
	return (
		<main className={styles.wrapper}>
			<InvestmentHeader />
			<InvestmentInputs />
		</main>
	)
}

export default Investment

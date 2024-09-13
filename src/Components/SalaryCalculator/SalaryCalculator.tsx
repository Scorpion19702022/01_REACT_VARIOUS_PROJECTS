import React from 'react'
import SalaryInput from './SalaryInput'
import SalaryResult from './SalaryResult'

import styles from './Styles/SalaryCalculator.module.css'
import { SalaryProvider } from './Context/SalaryContext'

const SalaryCalculator = () => {
	return (
		<main className={styles.wrapper}>
			<SalaryProvider>
				<SalaryInput />
				<SalaryResult />
			</SalaryProvider>
		</main>
	)
}

export default SalaryCalculator

import React from 'react'
import SalaryInput from './SalaryInput'
import SalaryResult from './SalaryResult'

import styles from './Styles/SalaryCalculator.module.css'

const SalaryCalculator = () => {
	return (
		<main className={styles.wrapper}>
			<SalaryInput />
			<SalaryResult />
		</main>
	)
}

export default SalaryCalculator

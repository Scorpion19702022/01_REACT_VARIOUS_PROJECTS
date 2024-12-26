import React from 'react'

import styles from './Styles/Calculator.module.css'
import CalculatorHeader from './CalculatorHeader'

const Calculator = () => {
	return (
		<main className={styles.wrapper}>
			<CalculatorHeader />
		</main>
	)
}

export default Calculator

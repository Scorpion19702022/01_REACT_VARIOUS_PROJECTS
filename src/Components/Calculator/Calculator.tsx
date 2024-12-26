import React from 'react'

import styles from './Styles/Calculator.module.css'
import CalculatorHeader from './CalculatorHeader'
import { CalculatorProvider } from './Context/CalculatorContext'
import CalculatorUsing from './CalculatorUsing'

const Calculator = () => {
	return (
		<main className={styles.wrapper}>
			<CalculatorProvider>
				<CalculatorHeader />
				<CalculatorUsing />
			</CalculatorProvider>
		</main>
	)
}

export default Calculator

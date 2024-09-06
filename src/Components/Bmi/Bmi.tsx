import React from 'react'

import styles from './Style/Bmi.module.css'
import BmiInputs from './BmiInputs'
import BmiInfo from './BmiInfo'
import { BmiProvider } from './Context/BmiContext'

const Bmi = () => {
	return (
		<main className={styles.wrapper}>
			<BmiInfo />
			<BmiProvider>
				<BmiInputs />
			</BmiProvider>
		</main>
	)
}

export default Bmi

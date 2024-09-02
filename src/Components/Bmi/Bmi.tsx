import React from 'react'

import styles from './Style/Bmi.module.css'
import BmiInputs from './BmiInputs'
import BmiInfo from './BmiInfo'

const Bmi = () => {
	return (
		<main className={styles.wrapper}>
			<BmiInfo />
			<BmiInputs />
		</main>
	)
}

export default Bmi

import React from 'react'

import styles from './Style/Bmi.module.css'
import BmiInputs from './BmiInputs'
import BmiResult from './BmiResult'

const Bmi = () => {
	return (
		<main className={styles.wrapper}>
			<BmiInputs />
			<BmiResult />
		</main>
	)
}

export default Bmi

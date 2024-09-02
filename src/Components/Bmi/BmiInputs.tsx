import React from 'react'
import BmiResult from './BmiResult'

import styles from './Style/BmiInputs.module.css'

const BmiInputs = () => {
	return (
		<section className={styles.wrapper}>
			<h1>Inputs</h1>
			<BmiResult />
		</section>
	)
}

export default BmiInputs

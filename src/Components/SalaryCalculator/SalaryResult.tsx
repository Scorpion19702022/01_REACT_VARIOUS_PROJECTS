import React from 'react'
import SalaryTax from './SalaryTax'

import styles from './Styles/SalaryResult.module.css'

const SalaryResult = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_result}>
				<h2>Box result</h2>
			</div>
			<SalaryTax />
		</section>
	)
}

export default SalaryResult

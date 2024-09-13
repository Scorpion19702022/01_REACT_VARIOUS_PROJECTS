import React, { useContext } from 'react'
import SalaryTax from './SalaryTax'

import styles from './Styles/SalaryResult.module.css'
import SalaryContext from './Context/SalaryContext'

const SalaryResult = () => {
	const { resultContract, resultGrossSalary } = useContext(SalaryContext)
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_results}>
				<div className={styles.result}>
					<h2 className={styles.heading_small}>Rodzaj umowy:</h2>
					<span className={styles.result_small}>{resultContract}</span>
				</div>
				<div className={styles.result}>
					<h2 className={styles.heading_small}>Wynagrodzenie brutto:</h2>
					<span className={styles.result_small}>{resultGrossSalary}</span>
				</div>
				<div className={styles.result}>
					<h2 className={styles.heading_salary}>Wynagrodzenie netto:</h2>
					<span className={styles.result_salary}>800000 zł</span>
				</div>
				<div className={styles.box_btn}>
					<button className={styles.btn}>wyczyść</button>
				</div>
			</div>
			<SalaryTax />
		</section>
	)
}

export default SalaryResult

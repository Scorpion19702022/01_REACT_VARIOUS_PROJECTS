import React from 'react'

import styles from './Styles/SalaryTax.module.css'

const SalaryTax = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading_tax}>Składki</h2>
			<div className={styles.box_tax}>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka ZUS:</h4>
					<span className={styles.result_tax}>0 zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka emerytalna:</h4>
					<span className={styles.result_tax}>0 zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka rentowa:</h4>
					<span className={styles.result_tax}>0 zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka chorobowa:</h4>
					<span className={styles.result_tax}>0 zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka zdrowotna:</h4>
					<span className={styles.result_tax}>0 zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Zaliczka na podatek:</h4>
					<span className={styles.result_tax}>0 zł</span>
				</div>
				<div className={styles.sum_tax}>
					<h4 className={styles.name_sum_tax}>Składki razem:</h4>
					<span className={styles.result_sum_tax}>0 zł</span>
				</div>
			</div>
		</section>
	)
}

export default SalaryTax

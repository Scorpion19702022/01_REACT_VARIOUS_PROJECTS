import React, { useContext } from 'react'

import styles from './Styles/SalaryTax.module.css'
import SalaryContext from './Context/SalaryContext'

const SalaryTax = () => {
	const { contributions, contributionsAll } = useContext(SalaryContext)

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading_tax}>Składki</h2>
			<div className={styles.box_tax}>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka ZUS:</h4>
					<span className={styles.result_tax}>{contributions.contrZUS.toFixed(2)} zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka emerytalna:</h4>
					<span className={styles.result_tax}>{contributions.contrPension.toFixed(2)} zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka rentowa:</h4>
					<span className={styles.result_tax}>{contributions.contrDisability.toFixed(2)} zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka chorobowa:</h4>
					<span className={styles.result_tax}>{contributions.contrSickness.toFixed(2)} zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Składka zdrowotna:</h4>
					<span className={styles.result_tax}>{contributions.contrHealthy.toFixed(2)} zł</span>
				</div>
				<div className={styles.tax}>
					<h4 className={styles.name_tax}>Zaliczka na podatek:</h4>
					<span className={styles.result_tax}>{contributions.contrTax.toFixed(2)} zł</span>
				</div>
				<div className={styles.sum_tax}>
					<h4 className={styles.name_sum_tax}>Składki razem:</h4>
					<span className={styles.result_sum_tax}>{Number(contributionsAll).toFixed(2)} zł</span>
				</div>
			</div>
		</section>
	)
}

export default SalaryTax

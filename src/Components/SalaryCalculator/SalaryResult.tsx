import React, { useContext } from 'react'
import SalaryTax from './SalaryTax'

import styles from './Styles/SalaryResult.module.css'
import SalaryContext from './Context/SalaryContext'

const SalaryResult = () => {
	const { resultContract, resultGrossSalary, resultNetSalary, handleDeleteAll } = useContext(SalaryContext)
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_info}>
				<h2 className={styles.heading_info}>Informacja</h2>
				<p className={styles.text_info}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorum minus optio obcaecati excepturi
					similique consequuntur illo, magnam aliquid, perspiciatis laboriosam sunt ullam sint ea, aspernatur rerum
					mollitia! Molestiae architecto quibusdam quos modi aliquid delectus numquam consectetur non in est quod
					laudantium ipsum itaque hic animi quae voluptatem, illo consequatur.
				</p>
				<button className={styles.btn_close_info}>Zamknij i zobacz obliczenia</button>
			</div>
			<div className={styles.box_results}>
				<div className={styles.result}>
					<h2 className={styles.heading_small}>Rodzaj umowy:</h2>
					<span className={styles.result_small}>{resultContract}</span>
				</div>
				<div className={styles.result}>
					<h2 className={styles.heading_small}>Wynagrodzenie brutto:</h2>
					<span className={styles.result_small}>{resultGrossSalary} zł</span>
				</div>
				<div className={styles.result}>
					<h2 className={styles.heading_salary}>Wynagrodzenie netto:</h2>
					<span className={styles.result_salary}>{resultNetSalary.toFixed(2)} zł</span>
				</div>
				<div className={styles.box_btn}>
					<button className={styles.btn} onClick={handleDeleteAll}>
						wyczyść
					</button>
				</div>
			</div>
			<SalaryTax />
		</section>
	)
}

export default SalaryResult

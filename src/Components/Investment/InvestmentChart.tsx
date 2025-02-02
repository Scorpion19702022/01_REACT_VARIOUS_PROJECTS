import React from 'react'

import styles from './Styles/InvestmentChart.module.css'

const InvestmentChart = () => {
	return (
		<section className={styles.no_wrapper}>
			<button className={styles.btn_close}>X</button>
			<h2 className={styles.heading}>Tu będzie wykres</h2>
		</section>
	)
}

export default InvestmentChart

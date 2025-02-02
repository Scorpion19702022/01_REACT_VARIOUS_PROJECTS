import React, { useContext } from 'react'

import styles from './Styles/InvestmentChart.module.css'
import InvestmentContext from './Context/InvestmentContext'

const InvestmentChart = () => {
	const { chartView, handleCloseChart } = useContext(InvestmentContext)

	return (
		<section className={!chartView ? styles.no_wrapper : styles.wrapper}>
			<button className={styles.btn_close} onClick={handleCloseChart}>
				X
			</button>
			<h2 className={styles.heading}>Tu będzie wykres</h2>
		</section>
	)
}

export default InvestmentChart

import React, { useContext } from 'react'

import styles from './Styles/InvestmentChart.module.css'
import InvestmentContext from './Context/InvestmentContext'

const InvestmentChart = () => {
	const { chartView } = useContext(InvestmentContext)

	return (
		<section className={styles.no_wrapper}>
			<button className={styles.btn_close}>X</button>
			<h2 className={styles.heading}>Tu będzie wykres</h2>
		</section>
	)
}

export default InvestmentChart

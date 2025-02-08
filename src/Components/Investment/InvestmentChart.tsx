import React, { useContext } from 'react'

import styles from './Styles/InvestmentChart.module.css'
import InvestmentContext from './Context/InvestmentContext'

import { Line } from 'react-chartjs-2'
import { Filler } from 'chart.js'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const InvestmentChart = () => {
	const { yourInvest, chartView, handleCloseChart } = useContext(InvestmentContext)

	let labels = yourInvest.map(item => item.investMbank)

	console.log(labels)

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

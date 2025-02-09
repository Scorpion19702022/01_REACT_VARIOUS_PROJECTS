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

	console.log(yourInvest)

	let labels = yourInvest.map(item => item.year)

	const chartData = {
		labels,
		datasets: [
			{
				label: 'PkoBp',
				data: yourInvest.map(item => item.investPkoBp),
				borderColor: '#0048ba',
				backgroundColor: '#fdee00',
				pointBackgroundColor: '#fdee00',
				fill: false,
				tension: 0,
				borderWidth: 3,
			},
			{
				label: 'PkoSa',
				data: yourInvest.map(item => item.investPkoSa),
				borderColor: '#a50b5e',
				backgroundColor: '#fdee00',
				pointBackgroundColor: '#fdee00',
				fill: false,
				tension: 0,
				borderWidth: 3,
			},
			{
				label: 'Santander',
				data: yourInvest.map(item => item.investSantander),
				borderColor: '#e30022',
				backgroundColor: '#fdee00',
				pointBackgroundColor: '#fdee00',
				fill: false,
				tension: 0,
				borderWidth: 3,
			},
			{
				label: 'Mbank',
				data: yourInvest.map(item => item.investMbank),
				borderColor: '#006400',
				backgroundColor: '#fdee00',
				pointBackgroundColor: '#fdee00',
				fill: false,
				tension: 0,
				borderWidth: 3,
			},
		],
	}

	return (
		<section className={!chartView ? styles.no_wrapper : styles.wrapper}>
			<button className={styles.btn_close} onClick={handleCloseChart}>
				X
			</button>
			<h2 className={styles.heading}>Tu będzie wykres</h2>
			<div>
				<Line data={chartData} />
			</div>
		</section>
	)
}

export default InvestmentChart

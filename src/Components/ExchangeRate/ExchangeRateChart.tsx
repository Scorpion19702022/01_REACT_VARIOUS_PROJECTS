import React from 'react'

import styles from './Styles/ExchangeRateChart.module.css'

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
import useExchangeRateTrendData from './Hook/useExchangeRateTrendData'

const ExchangeRateChart = () => {
	const { filteredTrendData } = useExchangeRateTrendData()

	console.log(filteredTrendData)

	ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

	const chartData = {}

	const chartOptions = {}

	return (
		<section className={styles.wrapper}>
			<h3 className={styles.heading}>Wykres</h3>
			<div className={styles.box_chart}>{/* <Line data={chartData} options={chartOptions} /> */}</div>
		</section>
	)
}

export default ExchangeRateChart

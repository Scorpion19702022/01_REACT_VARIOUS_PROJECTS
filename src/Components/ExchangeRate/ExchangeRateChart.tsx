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

	const labels = filteredTrendData.USD.map(item => item.date)

	console.log(labels)

	const chartData = {
		datasets: [
			{
				label: 'USD',
				data: filteredTrendData.USD.map(item => item.value),
				borderColor: '#228b22',
				backgroundColor: '#bcdcbc',
				pointBackgroundColor: '#bcdcbc',
				fill: false,
				tension: 0,
			},
			{
				label: 'EUR',
				data: filteredTrendData.EUR.map(item => item.value),
				borderColor: '#00ced1',
				backgroundColor: '#ccf5f5',
				pointBackgroundColor: '#ccf5f5',
				fill: false,
				tension: 0,
			},
			{
				label: 'CHF',
				data: filteredTrendData.CHF.map(item => item.value),
				borderColor: '#0048ba',
				backgroundColor: '#b2c8ea',
				pointBackgroundColor: '#b2c8ea',
				fill: false,
				tension: 0,
			},
			{
				label: 'GBP',
				data: filteredTrendData.GBP.map(item => item.value),
				borderColor: '#c32148',
				backgroundColor: '#edbcc8',
				pointBackgroundColor: '#edbcc8',
				fill: false,
				tension: 0,
			},
		],
	}

	const chartOptions = {}

	return (
		<section className={styles.wrapper}>
			<h3 className={styles.heading}>Wykres</h3>
			<div className={styles.box_chart}>
				<Line data={chartData} options={chartOptions} />
			</div>
		</section>
	)
}

export default ExchangeRateChart

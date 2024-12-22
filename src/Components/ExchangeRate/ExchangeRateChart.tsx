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

ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const ExchangeRateChart = () => {
	const { checkStartDate, endDate, filteredTrendData, updateTrendData } = useExchangeRateTrendData()

	let labels = filteredTrendData.USD.map(item => item.date)

	console.log(updateTrendData)

	const chartData = {
		labels,
		datasets: [
			{
				label: 'USD',
				data: filteredTrendData.USD.map(item => item.value),
				borderColor: '#228b22',
				backgroundColor: '#bcdcbc',
				pointBackgroundColor: '#bcdcbc',
				fill: false,
				tension: 0,
				borderWidth: 2,
			},
			{
				label: 'EUR',
				data: filteredTrendData.EUR.map(item => item.value),
				borderColor: '#00ced1',
				backgroundColor: '#ccf5f5',
				pointBackgroundColor: '#ccf5f5',
				fill: false,
				tension: 0,
				borderWidth: 2,
			},
			{
				label: 'CHF',
				data: filteredTrendData.CHF.map(item => item.value),
				borderColor: '#0048ba',
				backgroundColor: '#b2c8ea',
				pointBackgroundColor: '#b2c8ea',
				fill: false,
				tension: 0,
				borderWidth: 2,
			},
			{
				label: 'GBP',
				data: filteredTrendData.GBP.map(item => item.value),
				borderColor: '#c32148',
				backgroundColor: '#edbcc8',
				pointBackgroundColor: '#edbcc8',
				fill: false,
				tension: 0,
				borderWidth: 2,
			},
		],
	}

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			title: {
				display: true,
				text: `Trend kursów od ${checkStartDate} do ${endDate}`,
				color: 'white',
			},
			tooltip: {
				callbacks: {
					label: (context: any) => {
						return `${context.dataset.label}: ${context.raw.toFixed(2)}`
					},
				},
			},
			legend: {
				labels: {
					color: '#c4c4c2',
				},
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'Data',
					color: '#898a86',
				},
				ticks: {
					color: '#85c6db',
				},
				grid: {
					color: '#2f302b',
				},
			},
			y: {
				title: {
					display: true,
					text: 'Wartość w zł',
					color: '#898a86',
				},
				ticks: {
					color: '#85c6db',
					stepSize: 0.2,
				},
				grid: {
					color: '#2f302b',
				},
				beginAtZero: false,
				min: 3.8,
				max: 5.6,
			},
		},
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_chart}>
				<Line data={chartData} options={chartOptions} />
			</div>
		</section>
	)
}

export default ExchangeRateChart

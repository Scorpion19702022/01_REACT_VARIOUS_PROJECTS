import React, { useContext } from 'react'

import styles from './Styles/DemographyChart.module.css'

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
import DemographyContext from './Context/DemographyContext'

const DemographyChart = () => {
	const { selectCity, cityDemography } = useContext(DemographyContext)

	const dataPopulation = Object.entries(cityDemography[0].population)

	ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

	const chartData = {
		labels: dataPopulation.map(([year, _]) => year),
		datasets: [
			{
				label: 'Populacja',
				data: dataPopulation.map(([_, population]) => population),
				borderColor: 'red',
				backgroundColor: 'yellow',
				pointBackgroundColor: 'yellow',
				fill: false,
				tension: 0,
			},
		],
	}

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			title: {
				display: true,
				text: `Wykres pokazujący przyrost ludności dla miasta ${selectCity}`,
				color: 'white',
			},
			tooltip: {
				callbacks: {
					label: (context: any) => {
						return context.raw === 0 ? 'Brak danych' : `Populacja: ${context.raw.toLocaleString('pl-PL')}`
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
					text: 'Rok',
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
					text: 'Populacja',
					color: '#898a86',
				},
				ticks: {
					color: '#85c6db',
					// stepSize: 100000,
				},
				grid: {
					color: '#2f302b',
				},
				beginAtZero: false,
				// min: 0,
				// max: 2400000,
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

export default DemographyChart

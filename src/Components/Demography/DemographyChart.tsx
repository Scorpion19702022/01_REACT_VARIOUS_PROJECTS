import React, { useContext } from 'react'

import styles from './Styles/DemographyChart.module.css'

import { Line } from 'react-chartjs-2'
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
import { callback } from 'chart.js/dist/helpers/helpers.core'

const DemographyChart = () => {
	const { selectCity, cityDemography } = useContext(DemographyContext)

	const dataPopulation = Object.entries(cityDemography[0].population)

	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

	const chartData = {
		labels: dataPopulation.map(([year, _]) => year),
		datasets: [
			{
				label: 'Populacja',
				data: dataPopulation.map(([_, population]) => population),
				borderColor: 'red',
				backgroundColor: 'yellow',
				fill: true,
				tension: 0,
			},
		],
	}

	const chartOptions = {
		responsive: true,
		plugin: {
			title: {
				display: true,
				text: `wykres demografii dla miasta ${selectCity}`,
			},
			tooltip: {
				callbacks: {
					label: (content: any) => {
						return `Populacja: ${content.raw}`
					},
				},
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: 'Rok',
					color: 'red',
				},
			},
			y: {
				title: {
					display: true,
					text: 'Populacja',
					color: 'red',
				},
				beginAtZero: false,
			},
		},
	}

	return (
		<section className={styles.wrapper}>
			<Line data={chartData} options={chartOptions} />
		</section>
	)
}

export default DemographyChart

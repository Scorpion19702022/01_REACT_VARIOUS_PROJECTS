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
				backgroundColor: 'red',
				pointBackgroundColor: 'white',
				fill: false,
				tension: 0,
			},
		],
	}

	const chartOptions = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: `Wykres demografii dla miasta ${selectCity}`,
				color: 'white',
			},
			tooltip: {
				callbacks: {
					label: (context: any) => {
						return context.raw === 0 ? 'Brak danych' : `Populacja: ${context.raw}`
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

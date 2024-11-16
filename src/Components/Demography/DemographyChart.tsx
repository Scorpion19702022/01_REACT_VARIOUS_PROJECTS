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
				tension: 0.4,
			},
		],
	}

	console.log(chartData)

	return (
		<section className={styles.wrapper}>
			<h2>Wykresy</h2>
		</section>
	)
}

export default DemographyChart

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

	console.log(dataPopulation)

	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

	return (
		<section className={styles.wrapper}>
			<h2>Wykresy</h2>
		</section>
	)
}

export default DemographyChart

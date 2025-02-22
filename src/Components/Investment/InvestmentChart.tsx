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
	const { inputInvest, inputYearInvest, inputTime, allInvest, yourInvest, chartView, handleCloseChart } =
		useContext(InvestmentContext)

	let labels = yourInvest.map(item => `${item.year} rok`)

	const formatter = new Intl.NumberFormat('pl-PL', { useGrouping: true })

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
				borderWidth: 1.8,
			},
			{
				label: 'PkoSa',
				data: yourInvest.map(item => item.investPkoSa),
				borderColor: '#a50b5e',
				backgroundColor: '#fdee00',
				pointBackgroundColor: '#fdee00',
				fill: false,
				tension: 0,
				borderWidth: 1.8,
			},
			{
				label: 'Santander',
				data: yourInvest.map(item => item.investSantander),
				borderColor: '#e30022',
				backgroundColor: '#fdee00',
				pointBackgroundColor: '#fdee00',
				fill: false,
				tension: 0,
				borderWidth: 1.8,
			},
			{
				label: 'Mbank',
				data: yourInvest.map(item => item.investMbank),
				borderColor: '#006400',
				backgroundColor: '#fdee00',
				pointBackgroundColor: '#fdee00',
				fill: false,
				tension: 0,
				borderWidth: 1.8,
			},
		],
	}

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			title: {
				display: true,
				text: `Przyrost oprocentowania`,
				color: 'white',
			},
			tooltip: {
				callbacks: {
					label: (context: any) => {
						return `${context.dataset.label}: ${formatter.format(context.raw.toFixed(2))} zł`
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
					text: 'Lata',
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
					// stepSize: Number(inputInvest) / 2,
					// stepSize: 100,
				},
				grid: {
					color: '#2f302b',
				},
				beginAtZero: false,
				min: Number(inputInvest),
				// max: Number(inputInvest) * 10,
			},
		},
	}

	return (
		<section className={!chartView ? styles.no_wrapper : styles.wrapper}>
			<button className={styles.btn_close} onClick={handleCloseChart}>
				X
			</button>
			<div className={styles.box_heading}>
				<h2 className={styles.heading}>Wykres wzrostu oszczędności:</h2>
				<div className={styles.box_info}>
					<p className={styles.all_invest}>
						Całkowita inwestycja: <span className={styles.span}>{formatter.format(Number(allInvest))}</span> zł
					</p>
					<p className={styles.time_invest}>
						Czas wkładu: <span className={styles.span}>{inputTime}</span>{' '}
						{Number(inputTime) > 1 && Number(inputTime) <= 4 ? 'lata' : 'lat'}
					</p>
				</div>
			</div>
			<div className={styles.box_chart}>
				<Line data={chartData} options={chartOptions} />
			</div>
		</section>
	)
}

export default InvestmentChart

import React, { useContext } from 'react'

import styles from './Styles/InvestmentResult.module.css'
import InvestmentContext from './Context/InvestmentContext'

const InvestmentResult = () => {
	const { allInvest, periodInvest, chartInfo, chartAvailable } = useContext(InvestmentContext)
	const contentForTable = 'wynik twojej inwestycji'

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_your_invest}>
				<span className={styles.your_invest}>
					Zainwestowałeś: <span className={styles.span}>{allInvest}</span>
				</span>
				<span className={styles.your_period}>
					Czas inwestycji: <span className={styles.span}>{periodInvest}</span>
				</span>

				<button className={styles.btn_chart} disabled={chartAvailable ? false : true}>
					Zobacz wykres
				</button>
				<span className={chartAvailable ? styles.chart_available : styles.no_chart_available}>{chartInfo}</span>
			</div>
			<table className={styles.box_table}>
				<thead>
					<tr className={styles.name_information}>
						<th className={styles.one_rubric} colSpan={5}>
							{contentForTable.toLocaleUpperCase()}
						</th>
					</tr>
					<tr className={styles.name_bank}>
						<th>Rok</th>
						<th>PKO BP</th>
						<th>PKO SA</th>
						<th>Santander</th>
						<th>mBank</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default InvestmentResult

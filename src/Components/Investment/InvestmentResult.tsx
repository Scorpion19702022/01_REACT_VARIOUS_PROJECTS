import React, { useContext } from 'react'

import styles from './Styles/InvestmentResult.module.css'
import InvestmentContext from './Context/InvestmentContext'

const InvestmentResult = () => {
	const { allInvest, inputTime, periodInvest, chartInfo, chartAvailable, yourInvest } = useContext(InvestmentContext)

	const contentForTable = 'wynik twojej inwestycji'
	const formatter = new Intl.NumberFormat('pl-PL', { useGrouping: true })

	const resultInvestArray = yourInvest.map(item => {
		return (
			<tr key={item.year} className={styles.result_invest}>
				<td>{item.year}</td>
				<td>{formatter.format(item.investPkoBp)} zł</td>
				<td>{formatter.format(item.investPkoSa)} zł</td>
				<td>{formatter.format(item.investSantander)} zł</td>
				<td>{formatter.format(item.investMbank)} zł</td>
			</tr>
		)
	})

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_your_invest}>
				<span className={styles.your_invest}>
					Zainwestowałeś:{' '}
					<span className={styles.span}>
						{Number(inputTime) >= 0 ? formatter.format(allInvest) + ' zł' : 'musisz podać okres'}
					</span>
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
				<tbody>{resultInvestArray}</tbody>
			</table>
		</section>
	)
}

export default InvestmentResult

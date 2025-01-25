import React from 'react'

import styles from './Styles/InvestmentResult.module.css'

const InvestmentResult = () => {
	const contentForTable = 'wynik twojej inwestycji'

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_your_invest}>
				<h2 className={styles.your_invest}>
					Zainwestowałeś: <span className={styles.span}>1000000 zł</span>
				</h2>
				<button className={styles.btn}>Zobacz wykres</button>
			</div>
			<table className={styles.box_table}>
				<thead>
					<tr className={styles.name_bank}>
						<th></th>
						<th>PKO BP</th>
						<th>PKO SA</th>
						<th>Santander</th>
						<th>mBank</th>
					</tr>
					<tr className={styles.name_information}>
						<th>Rok</th>
						<th className={styles.one_rubric} colSpan={4}>
							{contentForTable.toLocaleUpperCase()}
						</th>
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

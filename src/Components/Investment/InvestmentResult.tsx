import React from 'react'

import styles from './Styles/InvestmentResult.module.css'

const InvestmentResult = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_your_invest}>
				<h2 className={styles.your_invest}>Zaiwestowałeś: 1000000</h2>
			</div>
			<table className={styles.box_name_bank}>
				<thead className={styles.name_bank}>
					<tr>
						<th>Rok</th>
						<th>PKO BP</th>
						<th>PKO SA</th>
						<th>Santander</th>
						<th>ING</th>
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
						<td></td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default InvestmentResult

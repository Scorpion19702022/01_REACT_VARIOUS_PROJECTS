import React, { useContext } from 'react'

import styles from './Styles/ExchangeRateHistoryData.module.css'
import ExchangeRateContext from './Context/ExchangeRateContext'
// import useHistoryExchageRate from './Hook/useHistoryExchangeRate'

const ExchangeRateHistoryData = () => {
	const { historyDate } = useContext(ExchangeRateContext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_check}>
				<h2 className={styles.header}>Sprawdż kurs z innej daty</h2>
				<input className={styles.input} type='date' value={historyDate} max={historyDate} />
			</div>
		</section>
	)
}

export default ExchangeRateHistoryData

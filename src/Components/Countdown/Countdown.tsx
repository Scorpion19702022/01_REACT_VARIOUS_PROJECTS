import React from 'react'

import styles from './Styles/Countdown.module.css'
import CoutdownHeader from './CoutdownHeader'
import { CountdownProvider } from './Context/CountdownContext'
import CountdownTimer from './CountdownTimer'

const CountdownTime = () => {
	return (
		<main className={styles.wrapper}>
			<CountdownProvider>
				<CoutdownHeader />
				<CountdownTimer />
			</CountdownProvider>
		</main>
	)
}

export default CountdownTime

import React from 'react'

import styles from './Styles/Countdown.module.css'
import CoutdownHeader from './CoutdownHeader'
import { CountdownProvider } from './Context/CountdownContext'
import CountdownData from './CountdownData'

const CountdownTime = () => {
	return (
		<main className={styles.wrapper}>
			<CountdownProvider>
				<CoutdownHeader />
				<CountdownData />
			</CountdownProvider>
		</main>
	)
}

export default CountdownTime

import React from 'react'

import styles from './Styles/Countdown.module.css'
import CoutdownHeader from './CoutdownHeader'
import { CountdownProvider } from './Context/CountdownContext'
import CountdownData from './CountdownData'

const Countdown = () => {
	return (
		<main className={styles.wrapper}>
			<CountdownProvider>
				<CoutdownHeader />
				<CountdownData />
			</CountdownProvider>
		</main>
	)
}

export default Countdown

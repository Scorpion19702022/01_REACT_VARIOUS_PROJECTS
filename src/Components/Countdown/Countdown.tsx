import React from 'react'

import styles from './Styles/Countdown.module.css'
import CoutdownHeader from './CoutdownHeader'
import { CountdownProvider } from './Context/CountdownContext'

const CountdownTime = () => {
	return (
		<main className={styles.wrapper}>
			<CountdownProvider>
				<CoutdownHeader />
			</CountdownProvider>
		</main>
	)
}

export default CountdownTime

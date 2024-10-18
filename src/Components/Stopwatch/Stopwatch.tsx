import React from 'react'

import styles from './Styles/Stopwatch.module.css'
import StopwatchHeader from './StopwatchHeader'
import { StopwatchProvider } from './Context/StopwatchContext'

const Stopwatch = () => {
	return (
		<main className={styles.wrapper}>
			<StopwatchProvider>
				<StopwatchHeader />
			</StopwatchProvider>
		</main>
	)
}

export default Stopwatch

import React from 'react'

import styles from './Styles/Stopwatch.module.css'
import StopwatchHeader from './StopwatchHeader'
import { StopwatchProvider } from './Context/StopwatchContext'
import StopwatchCountBox from './StopwatchCountBox'
import StopwatchList from './StopwatchList'

const Stopwatch = () => {
	return (
		<main className={styles.wrapper}>
			<StopwatchProvider>
				<StopwatchHeader />
				<div className={styles.box_stopwatch}>
					<StopwatchCountBox />
					<StopwatchList />
				</div>
			</StopwatchProvider>
		</main>
	)
}

export default Stopwatch

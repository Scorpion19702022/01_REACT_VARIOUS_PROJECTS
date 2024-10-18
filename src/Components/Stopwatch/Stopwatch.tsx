import React from 'react'

import styles from './Styles/Stopwatch.module.css'
import StopwatchHeader from './StopwatchHeader'

const Stopwatch = () => {
	return (
		<main className={styles.wrapper}>
			<StopwatchHeader />
		</main>
	)
}

export default Stopwatch

import React from 'react'

import styles from './Styles/CountdownTime.module.css'
import CoutdownTimeHeader from './CoutdownTimeHeader'
import { CountdownTimeProvider } from './Context/CountdownTimeContext'

const CountdownTime = () => {
	return (
		<main className={styles.wrapper}>
			<CountdownTimeProvider>
				<CoutdownTimeHeader />
			</CountdownTimeProvider>
		</main>
	)
}

export default CountdownTime

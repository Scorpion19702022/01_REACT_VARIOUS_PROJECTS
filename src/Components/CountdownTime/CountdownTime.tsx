import React from 'react'

import styles from './Styles/CountdownTime.module.css'
import CoutdownTimeHeader from './CoutdownTimeHeader'

const CountdownTime = () => {
	return (
		<main className={styles.wrapper}>
			<CoutdownTimeHeader />
		</main>
	)
}

export default CountdownTime

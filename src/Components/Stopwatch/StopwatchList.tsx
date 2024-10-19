import React from 'react'

import styles from './Styles/StopwatchList.module.css'

const StopwatchList = () => {
	return (
		<section className={styles.wrapper}>
			<ol className={styles.time_list}>
				<li className={styles.time}>czas</li>
			</ol>
		</section>
	)
}

export default StopwatchList

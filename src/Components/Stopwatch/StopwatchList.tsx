import React from 'react'

import styles from './Styles/StopwatchList.module.css'

const StopwatchList = () => {
	return (
		<section className={styles.wrapper}>
			<ul className={styles.time_list}>
				<li className={styles.time}>czas</li>
			</ul>
		</section>
	)
}

export default StopwatchList

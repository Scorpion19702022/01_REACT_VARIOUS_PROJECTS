import React from 'react'

import styles from './Styles/StopwatchHeader.module.css'
import Watch from './assets/stopwatch.png'

const StopwatchHeader = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_header}>
				<h1 className={styles.heading}>
					STOP{' '}
					<span className={styles.box_img}>
						<img className={styles.img} src={Watch} alt='stopwatch_picture' />
					</span>
					WATCH
				</h1>
			</div>
		</section>
	)
}

export default StopwatchHeader

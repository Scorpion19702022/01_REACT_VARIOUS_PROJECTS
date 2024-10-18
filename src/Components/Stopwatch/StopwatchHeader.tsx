import React from 'react'

import styles from './Styles/StopwatchHeader.module.css'
import Watch from './assets/stopwatch.png'

const StopwatchHeader = () => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.heading}>
				St{' '}
				<span className={styles.box_img}>
					<img className={styles.img} src={Watch} alt='stopwatch_picture' />
				</span>
				per
			</h1>
		</section>
	)
}

export default StopwatchHeader

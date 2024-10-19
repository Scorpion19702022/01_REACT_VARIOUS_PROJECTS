import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { IoColorPalette } from 'react-icons/io5'

import styles from './Styles/StopwatchCountBox.module.css'

const StopwatchCoutBox = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_icons}>
				<AiFillInfoCircle className={styles.icon_info} />
				<IoColorPalette className={styles.icon_info} />
			</div>
			<div className={styles.box_count}>
				<span className={styles.count}>0:00</span>
			</div>
		</section>
	)
}

export default StopwatchCoutBox

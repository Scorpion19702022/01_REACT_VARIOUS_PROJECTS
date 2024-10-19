import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { IoColorPalette } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa6'
import { FaPause } from 'react-icons/fa6'
import { FaStop } from 'react-icons/fa6'
import { ImCross } from 'react-icons/im'

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
			<div className={styles.box_control}>
				<button className={styles.btn_control}>
					<FaPlay />
				</button>
				<button className={styles.btn_control}>
					<FaPause />
				</button>
				<button className={styles.btn_control}>
					<FaStop />
				</button>
				<button className={styles.btn_control}>
					<ImCross />
				</button>
			</div>
		</section>
	)
}

export default StopwatchCoutBox

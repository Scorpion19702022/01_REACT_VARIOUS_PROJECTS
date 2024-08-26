import React from 'react'

import styles from './Style/DoneTask.module.css'

const DoneTask = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_content}>
				<h2 className={styles.heading}>Lista zadań zrobionych</h2>
				<div className={styles.box_info}>
					<span className={styles.info}>Informacja:</span>
				</div>
				<div className={styles.box_done}>
					<p>pierwszy</p>
					<p>drugi</p>
					<p>trzeci</p>
				</div>
			</div>
			<button className={styles.main_btn}>Usuń wszystko</button>
		</section>
	)
}

export default DoneTask

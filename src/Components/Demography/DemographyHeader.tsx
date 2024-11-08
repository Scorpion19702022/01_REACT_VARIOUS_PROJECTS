import React from 'react'

import styles from './Styles/DemographyHeader.module.css'

import arrow from './assets/arrow.png'

const DemographyHeader = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header_img}>
				<img className={styles.img} src={arrow} alt='logo' />
			</div>
			<div className={styles.back}></div>
			<div className={styles.header_text}>
				<h1 className={styles.header}>Demografia</h1>
				<span className={styles.text}>przyrost ludności miast Polski</span>
			</div>
		</section>
	)
}

export default DemographyHeader

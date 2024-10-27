import React from 'react'

import styles from './Styles/CountdownHeader.module.css'

import Time from './assets/time.png'

const CoutdownTimeHeader = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header_img}>
				<img className={styles.img} src={Time} alt='logo_time' />
			</div>
			<div className={styles.header_text}>
				<h1 className={styles.header}>Odliczanie czasu</h1>
				<span className={styles.text}>ile zostało do przyjemnej chwili?</span>
			</div>
		</section>
	)
}

export default CoutdownTimeHeader

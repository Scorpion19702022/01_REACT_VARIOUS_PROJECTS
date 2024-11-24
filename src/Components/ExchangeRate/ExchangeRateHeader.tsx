import React from 'react'

import styles from './Styles/ExchangeRateHeader.module.css'

import Money from './assets/money.png'

const ExchangeRateHeader = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header_img}>
				<img className={styles.img} src={Money} alt='logo_time' />
			</div>
			<div className={styles.header_text}>
				<h1 className={styles.header}>Kurs złotego</h1>
				<span className={styles.text}>Aktualny kurs złotego względem światowych walut</span>
			</div>
		</section>
	)
}

export default ExchangeRateHeader

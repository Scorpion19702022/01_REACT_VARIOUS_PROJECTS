import React from 'react'

import styles from './Styles/InvestmentHeader.module.css'

import Bank from './assets/bank.png'

const InvestmentHeader = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header_img}>
				<img className={styles.img} src={Bank} alt='photo_savings_account' />
			</div>
			<div className={styles.back}></div>
			<div className={styles.header_text}>
				<h1 className={styles.header}>Kalkulator</h1>
			</div>
		</section>
	)
}

export default InvestmentHeader

import React from 'react'

import styles from './Styles/ExchangeRateHeader.module.css'
import { BiDollar } from 'react-icons/bi'
import { MdOutlineEuro } from 'react-icons/md'
import { MdCurrencyPound } from 'react-icons/md'
import { MdCurrencyFranc } from 'react-icons/md'

const ExchangeRateHeader = () => {
	return (
		<section className={styles.wrapper}>
			<BiDollar className={styles.icon_dollar} />
			<MdOutlineEuro className={styles.icon_euro} />
			<MdCurrencyPound className={styles.icon_pound} />
			<MdCurrencyFranc className={styles.icon_franc} />
			<div className={styles.header_text}>
				<h1 className={styles.header}>Kurs złotego</h1>
				<span className={styles.text}>Aktualny kurs złotego względem światowych walut</span>
			</div>
		</section>
	)
}

export default ExchangeRateHeader

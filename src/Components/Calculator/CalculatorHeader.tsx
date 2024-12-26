import React from 'react'

import styles from './Styles/CalculatorHeader.module.css'

import CalcImage from './assets/calculator.png'

const CalculatorHeader = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header_img}>
				<img className={styles.img} src={CalcImage} alt='photo_calculator' />
			</div>
			<div className={styles.back}></div>
			<div className={styles.header_text}>
				<h1 className={styles.header}>Kalkulator</h1>
			</div>
		</section>
	)
}

export default CalculatorHeader

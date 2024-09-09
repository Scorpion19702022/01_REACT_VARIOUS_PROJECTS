import React from 'react'

import imgInput from './assets/salary.png'

import styles from './Styles/SalaryInput.module.css'

const SalaryInput = () => {
	return (
		<section className={styles.wrapper}>
			<h4 className={styles.heading}>Kalkulator wynagrodzenia dotyczy tylko umowy o pracę na pełny etat.</h4>
			<div className={styles.box_inputs}>
				<div className={styles.box_input_img}>
					<img className={styles.input_img} src={imgInput} alt='' />
				</div>
				<div className={styles.box_input}>
					<label className={styles.label}>Wpisz swoje wynagrodzenie brutto</label>
					<input className={styles.input} type='number' />
				</div>
			</div>
			<div className={styles.box_btns}>
				<button className={styles.btn}>Sprawdź</button>
				<button className={styles.btn}>Wyczyść</button>
			</div>
		</section>
	)
}

export default SalaryInput

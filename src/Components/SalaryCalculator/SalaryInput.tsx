import React from 'react'

import imgInput from './assets/salary.png'

import styles from './Styles/SalaryInput.module.css'

const SalaryInput = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Kalkulator wynagrodzenia dotyczy tylko umowy o pracę na pełny etat.</h2>
			<div className={styles.box_main}>
				<div className={styles.box_input_img}>
					<img className={styles.input_img} src={imgInput} alt='' />
				</div>
				<div className={styles.box_inputs}>
					<div className={styles.box_input_label}>
						<label className={styles.label}>Wpisz wynagrodzenie brutto:</label>
						<div className={styles.box_input}>
							<input className={styles.input} type='number' />
							<span className={styles.kind_value}>zł brutto</span>
						</div>
					</div>
					<div className={styles.box_btns}>
						<button className={styles.btn}>Sprawdź</button>
						<button className={styles.btn}>Wyczyść</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SalaryInput

import React from 'react'

import imgInput from './assets/salary1.png'

import styles from './Styles/SalaryInput.module.css'

const SalaryInput = () => {
	const typeOfContract = {
		contract01: 'wybierz umowę',
		contract02: 'umowa o pracę',
		contract03: 'umowa zlecenie',
		contract04: 'umowa o dzieło',
		contract05: 'umowa B2B',
	}

	const selectContract = Object.entries(typeOfContract).map(([value, contract]) => (
		<option className={styles.option} key={value} value={contract}>
			{contract}
		</option>
	))

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Kalkulator wynagrodzenia dotyczy tylko umowy o pracę na pełny etat.</h2>
			<img className={styles.input_img} src={imgInput} alt='moneyimage' />
			<div className={styles.box_main}>
				<div className={styles.box_inputs}>
					<div className={styles.box_input_label}>
						<label>wybierz rodzaj umowy:</label>
						<select>{selectContract}</select>
						<span className={styles.error}>error</span>
						<label className={styles.label}>Wpisz wynagrodzenie brutto:</label>
						<div className={styles.box_input}>
							<input className={styles.input} type='number' />
							<span className={styles.kind_value}>zł brutto</span>
						</div>
						<span className={styles.error}>error</span>
					</div>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn}>Sprawdź</button>
					<button className={styles.btn}>Wyczyść</button>
				</div>
			</div>
		</section>
	)
}

export default SalaryInput

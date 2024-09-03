import React from 'react'
import BmiResult from './BmiResult'

import styles from './Style/BmiInputs.module.css'

const BmiInputs = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_inputs}>
				<h2 className={styles.heading}>Wprowadź swoje dane</h2>
				<div className={styles.input_tall}>
					<label className={styles.label}>Podaj wzrost w centymetrach:</label>
					<input className={styles.input} type='number' min={0} />
				</div>
				<div className={styles.input_weight}>
					<div className={styles.input_tall}>
						<label className={styles.label}>Podaj wagę w kilogramach:</label>
						<input className={styles.input} type='number' min={0} />
					</div>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn}>Sprawdź</button>
					<button className={styles.btn}>Wyczyść</button>
				</div>
			</div>
			<BmiResult />
		</section>
	)
}

export default BmiInputs

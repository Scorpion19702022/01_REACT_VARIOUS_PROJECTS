import React from 'react'

import styles from './Styles/InvestmentInputs.module.css'

const InvestmentInputs = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_inputs}>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj kwotę wpłaty bazowej</label>
					<input className={styles.input} type='number' />
				</div>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj kwotę wpłaty rocznej</label>
					<input className={styles.input} type='number' />
				</div>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj okres w latach</label>
					<input className={styles.input} type='number' />
				</div>
			</div>
		</section>
	)
}

export default InvestmentInputs

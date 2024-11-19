import React from 'react'

import styles from './Styles/ConverterResult.module.css'

const ConverterResult = () => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.heading}>Sprawdż ile stopni ℃ to stopni ℉ i odwrotnie</h1>
			<div className={styles.box_data}>
				<label className={styles.label}>Konvertuj z na</label>
				<div className={styles.box_input}>
					<input className={styles.input} type='number' />
					<p className={styles.degrees}>℃</p>
				</div>
				<p className={styles.error}>error</p>
				<div className={styles.box_btns}>
					<button className={styles.btn}>konwertuj</button>
					<button className={styles.btn}>zmień</button>
					<button className={styles.btn}>resetuj</button>
				</div>
			</div>
		</section>
	)
}

export default ConverterResult

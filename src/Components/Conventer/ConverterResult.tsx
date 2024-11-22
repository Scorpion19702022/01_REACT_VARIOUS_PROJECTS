import React, { useContext } from 'react'

import styles from './Styles/ConverterResult.module.css'
import ConverterContext from './Context/ConverterContext'

const ConverterResult = () => {
	const { valueInput, handleChangeInput } = useContext(ConverterContext)

	return (
		<section className={styles.wrapper}>
			<h1 className={styles.heading}>Sprawdż ile stopni ℃ to stopni ℉ i odwrotnie</h1>
			<div className={styles.box_data}>
				<label className={styles.label}>Konvertuj z na</label>
				<div className={styles.box_input}>
					<input
						className={styles.input}
						value={Number(valueInput) || ''}
						type='number'
						onChange={e => handleChangeInput(e.target.value)}
					/>
					<p className={styles.degrees}>℃</p>
				</div>
				<p className={styles.error}>error</p>
				<div className={styles.box_btns}>
					<button className={styles.btn}>konwertuj</button>
					<button className={styles.btn}>zmień</button>
					<button className={styles.btn}>resetuj</button>
				</div>
			</div>
			<div className={styles.box_result}>
				<h2 className={styles.heading_result}>Wynik:</h2>
				<p className={styles.result}>
					{' '}
					℃ <span className={styles.span_result}>to:</span> ℉
				</p>
			</div>
		</section>
	)
}

export default ConverterResult

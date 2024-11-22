import React, { useContext } from 'react'

import styles from './Styles/ConverterResult.module.css'
import ConverterContext from './Context/ConverterContext'

const ConverterResult = () => {
	const { degreesIn, degreesOut, valueInput, error, isError, handleChangeInput, handleChangeDegrees } =
		useContext(ConverterContext)

	return (
		<section className={styles.wrapper}>
			<h1 className={styles.heading}>
				Sprawdż ile {degreesIn} to {degreesOut}
			</h1>
			<div className={styles.box_data}>
				<label className={styles.label}>Konvertuj z na</label>
				<div className={styles.box_input}>
					<input
						className={styles.input}
						value={Number(valueInput) || ''}
						type='number'
						onChange={e => handleChangeInput(e.target.value)}
					/>
					<p className={styles.degrees}>{degreesIn}</p>
				</div>
				<p className={error ? styles.error : styles.no_error}>{isError}</p>
				<div className={styles.box_btns}>
					<button className={styles.btn}>konwertuj</button>
					<button className={styles.btn} onClick={handleChangeDegrees}>
						zmień
					</button>
					<button className={styles.btn}>resetuj</button>
				</div>
			</div>
			<div className={styles.box_result}>
				<h2 className={styles.heading_result}>Wynik:</h2>
				<p className={styles.result}>
					{' '}
					{degreesIn} <span className={styles.span_result}>to:</span> {degreesOut}
				</p>
			</div>
		</section>
	)
}

export default ConverterResult

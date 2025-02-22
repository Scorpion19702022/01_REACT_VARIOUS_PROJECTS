import React, { useContext } from 'react'

import styles from './Styles/ConverterResult.module.css'
import ConverterContext from './Context/ConverterContext'

const ConverterResult = () => {
	const {
		degreesIn,
		degreesOut,
		valueInput,
		error,
		isError,
		degreesResult,
		valueFromInput,
		handleChangeInput,
		handleKeyDown,
		handleUseEnter,
		handleCountDegrees,
		handleChangeDegrees,
		handleClean,
	} = useContext(ConverterContext)

	return (
		<section className={styles.wrapper} onKeyDown={handleUseEnter}>
			<h1 className={styles.heading}>
				Sprawdż ile {degreesIn} to {degreesOut}
			</h1>
			<div className={styles.box_data}>
				<label className={styles.label}>
					Konvertuj z {degreesIn} na {degreesOut}
				</label>
				<div className={styles.box_input}>
					<input
						className={styles.input}
						value={valueInput}
						type='number'
						onKeyDown={handleKeyDown}
						onChange={e => handleChangeInput(e.target.value)}
					/>
					<p className={styles.degrees}>{degreesIn}</p>
				</div>
				<p className={error ? styles.error : styles.no_error}>{isError}</p>
				<div className={styles.box_btns}>
					<button className={styles.btn} onClick={() => handleCountDegrees(degreesIn)}>
						konwertuj
					</button>
					<button className={styles.btn} onClick={handleChangeDegrees}>
						zmień
					</button>
					<button className={styles.btn} onClick={handleClean}>
						resetuj
					</button>
				</div>
			</div>
			<div className={styles.box_result}>
				<h2 className={styles.heading_result}>Wynik:</h2>
				<p className={styles.result}>
					<span className={styles.degrees_in}>
						{valueFromInput}
						{degreesIn}
					</span>
					<span className={styles.span_result}>to: </span>
					<span className={styles.degrees_result}>
						{degreesResult}
						{degreesOut}
					</span>
				</p>
			</div>
		</section>
	)
}

export default ConverterResult

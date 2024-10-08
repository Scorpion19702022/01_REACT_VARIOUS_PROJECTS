import React, { useContext } from 'react'
import BmiResult from './BmiResult'

import styles from './Style/BmiInputs.module.css'
import BmiContext from './Context/BmiContext'

const BmiInputs = () => {
	const {
		tall,
		weight,
		errorTall,
		errorWeight,
		handleChangeTall,
		handleChangeWeight,
		handleKeyDown,
		handleUseEnter,
		handleCountBmi,
		handleDeleteAll,
	} = useContext(BmiContext)

	return (
		<section className={styles.wrapper} onKeyDown={handleUseEnter}>
			<div className={styles.box_inputs}>
				<h2 className={styles.heading}>Wprowadź swoje dane</h2>
				<div className={styles.input_tall}>
					<label className={styles.label}>Podaj wzrost w centymetrach:</label>
					<div className={styles.box_input}>
						<input
							className={styles.input}
							type='number'
							min={0}
							value={Number(tall) || ''}
							onKeyDown={handleKeyDown}
							onChange={e => handleChangeTall(e.target.value)}
						/>
						<span className={styles.span_input}>cm</span>
					</div>
					<div className={styles.box_error}>
						<span className={styles.error}>{errorTall}</span>
					</div>
				</div>
				<div className={styles.input_weight}>
					<div className={styles.input_tall}>
						<label className={styles.label}>Podaj wagę w kilogramach:</label>
						<div className={styles.box_input}>
							<input
								className={styles.input}
								type='number'
								min={0}
								value={Number(weight) || ''}
								onKeyDown={handleKeyDown}
								onChange={e => handleChangeWeight(e.target.value)}
							/>
							<span className={styles.span_input}>kg</span>
						</div>
						<div className={styles.box_error}>
							<span className={styles.error}>{errorWeight}</span>
						</div>
					</div>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn} onClick={handleCountBmi}>
						Sprawdź
					</button>
					<button className={styles.btn} onClick={handleDeleteAll}>
						Wyczyść
					</button>
				</div>
			</div>
			<BmiResult />
		</section>
	)
}

export default BmiInputs

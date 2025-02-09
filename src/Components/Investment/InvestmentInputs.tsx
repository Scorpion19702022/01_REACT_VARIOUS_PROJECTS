import React, { useContext } from 'react'

import styles from './Styles/InvestmentInputs.module.css'

import bank01 from './assets/bank01.jpg'
import bank02 from './assets/bank02.jpg'
import bank03 from './assets/bank03.jpg'
import bank04 from './assets/bank05.jpg'
import InvestmentContext from './Context/InvestmentContext'

const InvestmentInputs = () => {
	const {
		inputInvest,
		inputYearInvest,
		inputTime,
		handleChangeInvest,
		handleChangeYearInvest,
		handleChangeTime,
		handleAddInvest,
		handleCleanAllInvest,
		handleKeyDown,
		handleUseEnter,
	} = useContext(InvestmentContext)

	return (
		<section className={styles.wrapper} onKeyDown={handleUseEnter}>
			<h4 className={styles.heading}>
				Podając wartości swojego wkładu początkowego i deklarację corrocznej wpłaty oraz okres jaki przwidujesz a
				oszczędości sprawdzisz ile zarobisz a corocznych odsetkach w 4 najpopularniejszych bankach w Polsce. Maksymalny
				okres to 10 lat. Maksymalne wartości to 1 000 000 zł
			</h4>
			<div className={styles.box_inputs}>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj kwotę wpłaty bazowej:</label>
					<input
						className={styles.input}
						type='number'
						value={inputInvest || ''}
						min={0}
						max={10000000}
						onKeyDown={handleKeyDown}
						onChange={e => handleChangeInvest(e.target.value)}
					/>
				</div>
				<div className={styles.inputs}>
					<label className={styles.label}>Kwota deklarowanej corocznej wpłaty po 1 roku:</label>
					<input
						className={styles.input}
						type='number'
						value={inputYearInvest || ''}
						min={0}
						max={10000000}
						onKeyDown={handleKeyDown}
						onChange={e => handleChangeYearInvest(e.target.value)}
					/>
				</div>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj okres w latach. Maksymalnie 10 lat:</label>
					<input
						className={styles.input}
						type='number'
						value={inputTime || ''}
						min={1}
						max={10}
						onKeyDown={handleKeyDown}
						onChange={e => handleChangeTime(e.target.value)}
					/>
				</div>
				<div className={styles.box_img}>
					<img className={styles.img} src={bank01} alt='logo_bank' />
					<img className={styles.img} src={bank02} alt='logo_bank' />
					<img className={styles.img} src={bank03} alt='logo_bank' />
					<img className={styles.img} src={bank04} alt='logo_bank' />
				</div>
			</div>
			<div className={styles.box_btns}>
				<button className={styles.btn} onClick={handleAddInvest}>
					wykonaj
				</button>
				<button className={styles.btn} onClick={handleCleanAllInvest}>
					resetuj
				</button>
			</div>
		</section>
	)
}

export default InvestmentInputs

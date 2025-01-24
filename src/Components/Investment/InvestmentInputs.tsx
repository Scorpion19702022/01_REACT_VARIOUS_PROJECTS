import React, { useContext } from 'react'

import styles from './Styles/InvestmentInputs.module.css'

import bank01 from './assets/bank01.jpg'
import bank02 from './assets/bank02.jpg'
import bank03 from './assets/bank03.jpg'
import bank04 from './assets/bank05.jpg'
import InvestmentContext from './Context/InvestmentContext'

const InvestmentInputs = () => {
	const { inputInvest } = useContext(InvestmentContext)

	console.log(inputInvest)

	return (
		<section className={styles.wrapper}>
			<h4 className={styles.heading}>
				Podając wartości swojego wkładu początkowego i deklarację corrocznej wpłaty oraz okres jaki przwidujesz a
				oszczędości sprawdzisz ile zarobisz a corocznych odsetkach w 5 najpopularniejszych bankach w Polsce. Maksymalny
				okres to 10 lat.
			</h4>
			<div className={styles.box_inputs}>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj kwotę wpłaty bazowej:</label>
					<input className={styles.input} type='number' />
				</div>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj kwotę wpłaty rocznej:</label>
					<input className={styles.input} type='number' />
				</div>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj okres w latach:</label>
					<input className={styles.input} type='number' />
				</div>
				<div className={styles.box_img}>
					<img className={styles.img} src={bank01} alt='logo_bank' />
					<img className={styles.img} src={bank02} alt='logo_bank' />
					<img className={styles.img} src={bank03} alt='logo_bank' />
					<img className={styles.img} src={bank04} alt='logo_bank' />
				</div>
			</div>
			<div className={styles.box_btns}>
				<button className={styles.btn}>wykonaj</button>
				<button className={styles.btn}>resetuj</button>
			</div>
		</section>
	)
}

export default InvestmentInputs

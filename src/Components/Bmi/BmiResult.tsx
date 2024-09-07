import React, { useContext } from 'react'

import styles from './Style/BmiResult.module.css'
import BmiContext from './Context/BmiContext'

const BmiResult = () => {
	const { tall, weight, errorAll, yourTall, yourWeight, resultBmi, textInfo, imgWoman } = useContext(BmiContext)
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_info_result}>
				<div className={styles.box_your_parametrs}>
					<h4 className={styles.your_parametr}>
						Twój wzrost: <span className={styles.parametr}>{`${yourTall} cm`}</span>
					</h4>
					<h4 className={styles.your_parametr}>
						Twoja waga: <span className={styles.parametr}>{`${yourWeight} kg`}</span>
					</h4>
				</div>
				<h4 className={styles.heading_result}>
					Twoje BMI wynosi: <span className={styles.result}>{resultBmi.toFixed(0)}</span>
				</h4>
				<div className={styles.info_result}>
					<div className={styles.box_text}>
						<p className={tall === '' || weight === '' ? styles.error : styles.text}>
							{tall === '' || weight === '' ? errorAll : textInfo}
						</p>
					</div>
					<div className={styles.box_img}>
						<img className={styles.img} src={imgWoman} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default BmiResult

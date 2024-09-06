import React, { useContext } from 'react'

import styles from './Style/BmiResult.module.css'
import BmiContext from './Context/BmiContext'

const BmiResult = () => {
	const { imgWoman } = useContext(BmiContext)
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_info_result}>
				<div className={styles.box_your_parametrs}>
					<h4 className={styles.your_parametr}>
						Twój wzrost: <span className={styles.parametr}>180 cm</span>
					</h4>
					<h4 className={styles.your_parametr}>
						Twoja waga: <span className={styles.parametr}>75 kg</span>
					</h4>
				</div>
				<h4 className={styles.heading_result}>
					Twoje BMI wynosi: <span className={styles.result}>28</span>
				</h4>
				<div className={styles.info_result}>
					<div className={styles.box_text}>
						<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, inventore.</p>
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

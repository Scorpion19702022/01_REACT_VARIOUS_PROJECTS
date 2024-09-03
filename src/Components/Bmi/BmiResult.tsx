import React from 'react'

import styles from './Style/BmiResult.module.css'

import woman from './assets/bmi_4.png'

const BmiResult = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Poznaj swoje BMI</h2>
			<div className={styles.box_info_result}>
				<h4 className={styles.headig_result}>
					Twoje BMI wynosi: <span className={styles.result}>28</span>
				</h4>
				<div className={styles.box_info_result}>
					<div className={styles.box_text}>
						<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, inventore.</p>
					</div>
					<div className={styles.box_img}>
						<img className={styles.img} src={woman} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default BmiResult

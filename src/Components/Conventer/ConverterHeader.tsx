import React from 'react'

import styles from './Styles/ConverterHeader.module.css'

import thermometrC from './assets/thermometer_C.png'
import thermometrF from './assets/thermometer_F.png'

import { RiCelsiusFill } from 'react-icons/ri'
import { RiFahrenheitFill } from 'react-icons/ri'

const ConverterHeader = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header_img_one}>
				<img className={styles.img_one} src={thermometrC} alt='photo_thermometr' />
			</div>
			<div className={styles.header_img_two}>
				<img className={styles.img_two} src={thermometrF} alt='photo_thermometr' />
			</div>
			<RiCelsiusFill className={styles.icon_c} />
			<RiFahrenheitFill className={styles.icon_f} />
			<div className={styles.back}></div>
			<div className={styles.header_text}>
				<h1 className={styles.header}>Konwerter stopni</h1>
				<span className={styles.text}>sprawdź ile stopni ℃ to stopni ℉</span>
			</div>
		</section>
	)
}

export default ConverterHeader

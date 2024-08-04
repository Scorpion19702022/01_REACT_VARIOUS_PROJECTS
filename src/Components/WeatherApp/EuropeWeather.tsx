import React, { useContext } from 'react'

import EuropeMap from './assets/EuropeMAP.png'

import styles from './EuropeWeather.module.css'

import NavWorld from './NavWorld'
import EuropeContext from './Context/EuropeContext'

const EuropeWeather = () => {
	const { refresh } = useContext(EuropeContext)
	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<div className={styles.box_content}>
				<h4 className={styles.count}>Aktualizacja pogody za {refresh} min.</h4>
				<div className={styles.box_map}>
					<img className={styles.img_europe_map} src={EuropeMap} alt='' />
				</div>
			</div>
		</section>
	)
}

export default EuropeWeather

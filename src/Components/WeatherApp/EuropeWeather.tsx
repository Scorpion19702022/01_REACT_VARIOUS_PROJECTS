import React from 'react'

import EuropeMap from './assets/EuropeMAP.png'

import styles from './EuropeWeather.module.css'

import NavWorld from './NavWorld'

const EuropeWeather = () => {
	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<div className={styles.box_content}>
				<h4 className={styles.count}>Aktualizacja pogody za 0 min.</h4>
				<div className={styles.box_map}>
					<img className={styles.img_europe_map} src={EuropeMap} alt='' />
				</div>
			</div>
		</section>
	)
}

export default EuropeWeather

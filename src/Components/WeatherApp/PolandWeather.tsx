import React from 'react'
import NavWorld from './NavWorld'

import PolandMap from './assets/polandMAP.png'

import styles from './PolandWeather.module.css'

const PolandWeather = () => {
	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<div className={styles.box_content}>
				<div className={styles.box_map}>
					<img className={styles.img_poland_map} src={PolandMap} alt='poland_map' />
				</div>
				<div className={styles.box_cities}></div>
			</div>
		</section>
	)
}

export default PolandWeather

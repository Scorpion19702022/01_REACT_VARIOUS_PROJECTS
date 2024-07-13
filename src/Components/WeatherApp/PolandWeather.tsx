import React, { useContext } from 'react'
import NavWorld from './NavWorld'

import PolandMap from './assets/polandMAP.png'

import styles from './PolandWeather.module.css'
import PolandContext from './Context/PolandContext'

const PolandWeather = () => {
	const { refresh, cityPol01, imgPol01, tempPol01, windPol01, pressurePol01 } = useContext(PolandContext)

	const CityPolStetin = (
		<div>
			<p>Jest</p>
		</div>
	)

	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<div className={styles.box_content}>
				<h4 className={styles.heading}>Aktualizacja pogody za {refresh} minut</h4>
				<div className={styles.box_map}>
					<img className={styles.img_poland_map} src={PolandMap} alt='poland_map' />
				</div>
				<div className={styles.box_cities}>{CityPolStetin}</div>
			</div>
		</section>
	)
}

export default PolandWeather

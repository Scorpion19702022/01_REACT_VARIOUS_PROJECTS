import React, { useContext } from 'react'
import NavWorld from './NavWorld'

import PolandMap from './assets/polandMAP.png'

import styles from './PolandWeather.module.css'
import PolandContext from './Context/PolandContext'

const PolandWeather = () => {
	const { refresh, cityPol01, imgPol01, tempPol01, windPol01, pressurePol01 } = useContext(PolandContext)

	const CityPolStetin = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{cityPol01}</h4>
				<img className={styles.img_city} src={imgPol01} alt='' />
			</div>
			<div className={styles.bottom}>
				<span className={styles.city_info_weather}>{tempPol01}</span>
				<span className={styles.city_info_weather}>{windPol01}</span>
				<span className={styles.city_info_weather}>{pressurePol01}</span>
			</div>
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
				<div className={styles.box_cities_01}>{CityPolStetin}</div>
			</div>
		</section>
	)
}

export default PolandWeather

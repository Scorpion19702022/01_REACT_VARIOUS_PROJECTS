import React, { useContext } from 'react'
import NavWorld from './NavWorld'

import PolandMap from './assets/polandMAP.png'

import styles from './PolandWeather.module.css'
import PolandContext from './Context/PolandContext'

const PolandWeather = () => {
	const {
		refresh,

		// === SZCZECIN ===

		cityPol01,
		imgPol01,
		tempPol01,
		windPol01,

		// === GDANSK ===

		cityPol02,
		imgPol02,
		tempPol02,
		windPol02,
	} = useContext(PolandContext)

	const CityPol01 = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{cityPol01}</h4>
			</div>
			<div className={styles.bottom}>
				<div className={styles.box_img}>
					<img className={styles.img_city} src={imgPol01} alt='weather_icon' />
				</div>
				<div className={styles.box_info}>
					<span className={styles.city_info_weather}>{tempPol01}</span>
					<span className={styles.city_info_weather}>{windPol01}</span>
				</div>
			</div>
		</div>
	)

	const CityPol02 = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{cityPol02}</h4>
			</div>
			<div className={styles.bottom}>
				<div className={styles.box_img}>
					<img className={styles.img_city} src={imgPol02} alt='weather_icon' />
				</div>
				<div className={styles.box_info}>
					<span className={styles.city_info_weather}>{tempPol02}</span>
					<span className={styles.city_info_weather}>{windPol02}</span>
				</div>
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
				<div className={styles.box_cities}>{CityPol01}</div>
				<div className={styles.box_cities}>{CityPol02}</div>
			</div>
		</section>
	)
}

export default PolandWeather

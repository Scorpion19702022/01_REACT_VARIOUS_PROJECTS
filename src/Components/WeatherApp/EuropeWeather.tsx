import React, { useContext } from 'react'

import EuropeMap from './assets/EuropeMAP.png'

import styles from './EuropeWeather.module.css'

import NavWorld from './NavWorld'
import EuropeContext from './Context/EuropeContext'

const EuropeWeather = () => {
	const { refresh, citiesEurope } = useContext(EuropeContext)

	const citiesOfEurope = citiesEurope.map((city, index) => (
		<div key={index} className={styles.box_cities}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{city.city}</h4>
			</div>
			<div className={styles.bottom}>
				<div className={styles.box_img}>
					<img className={styles.img_city} src={city.img} alt='' />
				</div>
				<div className={styles.box_info}>
					<span className={styles.city_info_weather}>
						{city.temp} <span className={styles.parametr}> ℃</span>
					</span>
					<span className={styles.city_info_weather}>
						{city.wind} <span className={styles.parametr}> km/h</span>
					</span>
				</div>
			</div>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<div className={styles.box_content}>
				<h4 className={styles.count}>Aktualizacja pogody za {refresh} min.</h4>
				<div className={styles.box_map}>
					<img className={styles.img_europe_map} src={EuropeMap} alt='' />
				</div>
				<div className={styles.city_weather}>{citiesOfEurope}</div>
			</div>
		</section>
	)
}

export default EuropeWeather

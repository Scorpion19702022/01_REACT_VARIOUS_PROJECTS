import React, { useContext } from 'react'
import NavWorld from './NavWorld'

import PolandMap from './assets/polandMAP.png'

import styles from './PolandWeather.module.css'
import PolandContext from './Context/PolandContext'

const PolandWeather = () => {
	const { refresh, citiesPoland } = useContext(PolandContext)

	const citiesOfPoland = citiesPoland.map((city, index) => (
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
					<img className={styles.img_poland_map} src={PolandMap} alt='poland_map' />
				</div>
				<div className={styles.city_weather}>{citiesOfPoland}</div>
			</div>
		</section>
	)
}

export default PolandWeather

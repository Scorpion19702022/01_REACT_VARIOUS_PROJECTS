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

		// === KOSZALIN ===

		cityPol02,
		imgPol02,
		tempPol02,
		windPol02,

		// === GDANSK ===

		cityPol03,
		imgPol03,
		tempPol03,
		windPol03,

		// === OLSZTYN ===

		cityPol04,
		imgPol04,
		tempPol04,
		windPol04,

		// === BIALYSTOK ===

		cityPol05,
		imgPol05,
		tempPol05,
		windPol05,

		// === ZIELONA GORA ===

		// cityPol06,
		imgPol06,
		tempPol06,
		windPol06,

		// === POZNAN ===

		cityPol07,
		imgPol07,
		tempPol07,
		windPol07,
	} = useContext(PolandContext)

	const CityPol01 = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{cityPol01}</h4>
				<img className={styles.img_city} src={imgPol01} alt='' />
			</div>
			<div className={styles.bottom}>
				<span className={styles.city_info_weather}>{tempPol01}</span>
				<span className={styles.city_info_weather}>{windPol01}</span>
			</div>
		</div>
	)

	const CityPol02 = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{cityPol02}</h4>
				<img className={styles.img_city} src={imgPol02} alt='' />
			</div>
			<div className={styles.bottom}>
				<span className={styles.city_info_weather}>{tempPol02}</span>
				<span className={styles.city_info_weather}>{windPol02}</span>
			</div>
		</div>
	)

	const CityPol03 = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{cityPol03}</h4>
				<img className={styles.img_city} src={imgPol03} alt='' />
			</div>
			<div className={styles.bottom}>
				<span className={styles.city_info_weather}>{tempPol03}</span>
				<span className={styles.city_info_weather}>{windPol03}</span>
			</div>
		</div>
	)
	const CityPol04 = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{cityPol04}</h4>
				<img className={styles.img_city} src={imgPol04} alt='' />
			</div>
			<div className={styles.bottom}>
				<span className={styles.city_info_weather}>{tempPol04}</span>
				<span className={styles.city_info_weather}>{windPol04}</span>
			</div>
		</div>
	)

	const CityPol05 = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{cityPol05}</h4>
				<img className={styles.img_city} src={imgPol05} alt='' />
			</div>
			<div className={styles.bottom}>
				<span className={styles.city_info_weather}>{tempPol05}</span>
				<span className={styles.city_info_weather}>{windPol05}</span>
			</div>
		</div>
	)

	const CityPol06 = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>Zielona G.</h4>
				<img className={styles.img_city} src={imgPol06} alt='' />
			</div>
			<div className={styles.bottom}>
				<span className={styles.city_info_weather}>{tempPol06}</span>
				<span className={styles.city_info_weather}>{windPol06}</span>
			</div>
		</div>
	)

	const CityPol07 = (
		<div className={styles.city_weather}>
			<div className={styles.top}>
				<h4 className={styles.name_city}>{cityPol07}</h4>
				<img className={styles.img_city} src={imgPol07} alt='' />
			</div>
			<div className={styles.bottom}>
				<span className={styles.city_info_weather}>{tempPol07}</span>
				<span className={styles.city_info_weather}>{windPol07}</span>
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
				<div className={styles.box_cities_01}>{CityPol01}</div>
				<div className={styles.box_cities_02}>{CityPol02}</div>
				<div className={styles.box_cities_03}>{CityPol03}</div>
				<div className={styles.box_cities_04}>{CityPol04}</div>
				<div className={styles.box_cities_05}>{CityPol05}</div>
				<div className={styles.box_cities_06}>{CityPol06}</div>
				<div className={styles.box_cities_07}>{CityPol07}</div>
			</div>
		</section>
	)
}

export default PolandWeather

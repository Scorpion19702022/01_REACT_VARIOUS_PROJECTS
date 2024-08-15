import React, { useContext } from 'react'

import EuropeMap from './assets/EuropeMAP.png'

import Sun from './assets/sun.png'
import FewClouds from './assets/few_clouds.png'
import Cloud from './assets/cloud.png'
import Rain from './assets/rain.png'
import Thunder from './assets/thunderstorm.png'
import Fog from './assets/fog.png'
import Snow from './assets/snow.png'

import WomanWeather from './assets/back2.png'

import styles from './EuropeWeather.module.css'

import NavWorld from './NavWorld'
import EuropeContext from './Context/EuropeContext'

const EuropeWeather = () => {
	const { refresh, citiesEurope } = useContext(EuropeContext)

	const divsLines = []

	for (let i = 0; i < 22; i++) {
		divsLines.push(<div key={i} className={styles.line}></div>)
	}

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
						{city.temp} <span className={styles.parametr}>℃</span>
					</span>
				</div>
			</div>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<img className={styles.back_img} src={WomanWeather} alt='woman weather' />
			<div className={styles.weather_legend}>
				<h4 className={styles.legend_heading}>Legenda:</h4>
				<div className={styles.legend}>
					<div className={styles.info_legend}>
						<img className={styles.legend_img} src={Sun} alt='sun' />
						<span className={styles.legend_info}>- słonecznie</span>
					</div>
					<div className={styles.info_legend}>
						<img className={styles.legend_img} src={FewClouds} alt='sun' />
						<span className={styles.legend_info}>- częściowe zachmurzenie</span>
					</div>
					<div className={styles.info_legend}>
						<img className={styles.legend_img} src={Cloud} alt='cloud' />
						<span className={styles.legend_info}>- pochmurnie</span>
					</div>
					<div className={styles.info_legend}>
						<img className={styles.legend_img} src={Rain} alt='rain' />
						<span className={styles.legend_info}>- deszczowo</span>
					</div>
					<div className={styles.info_legend}>
						<img className={styles.legend_img} src={Thunder} alt='thunder' />
						<span className={styles.legend_info}>- burza</span>
					</div>
					<div className={styles.info_legend}>
						<img className={styles.legend_img} src={Snow} alt='snow' />
						<span className={styles.legend_info}>- śnieg</span>
					</div>
					<div className={styles.info_legend}>
						<img className={styles.legend_img} src={Fog} alt='fog' />
						<span className={styles.legend_info}>- mgliście</span>
					</div>
				</div>
			</div>
			<div className={styles.box_content}>
				<h4 className={styles.count}>Aktualizacja pogody za {refresh} min.</h4>
				<div className={styles.box_map}>
					<img className={styles.img_europe_map} src={EuropeMap} alt='' />
				</div>
				<div className={styles.box_lines}>{divsLines}</div>
				<div className={styles.city_weather}>{citiesOfEurope}</div>
			</div>
		</section>
	)
}

export default EuropeWeather

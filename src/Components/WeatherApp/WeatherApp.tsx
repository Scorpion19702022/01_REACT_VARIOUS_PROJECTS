import React from 'react'
import NavWorld from './NavWorld'
import styles from './WeatherApp.module.css'

import Unknown from './assets/unknown.png'

const WeatherApp = () => {
	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<div className={styles.box_main_info}>
				<h1 className={styles.heading}>Co zobaczysz na stronach?</h1>
				<img src={Unknown} alt='some_weather' />
				<p>
					Po wybraniu pastwa/kontynentu przeniesiesz się na stronę i uzyskasz informację o stanie pogody w głównych
					miastach w regionie. Jeżeli długo przebywasz na stronie pogoda będzie aktualizowana co 20 minut
				</p>
			</div>
			<div className={styles.box_legend}></div>
		</section>
	)
}

export default WeatherApp

import React from 'react'
import NavWorld from './NavWorld'
import styles from './WeatherApp.module.css'

import Unknown from './assets/unknown.png'
import Sun from './assets/sun.png'
import Cloud from './assets/cloud.png'
import Rain from './assets/rain.png'
import Thunder from './assets/thunderstorm.png'
import Drizzle from './assets/drizzle.png'
import Fog from './assets/fog.png'
import Ice from './assets/ice.png'
import Snow from './assets/snow.png'

const WeatherApp = () => {
	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<h1 className={styles.heading}>Co zobaczysz na stronach?</h1>
			<div className={styles.box_main}>
				<div className={styles.main_info}>
					<img className={styles.main_img} src={Unknown} alt='some_weather' />
					<p className={styles.main_text}>
						Po wybraniu państwa/kontynentu przeniesiesz się na stronę i uzyskasz informację o stanie pogody w głównych
						miastach w regionie. Jeżeli długo przebywasz na stronie pogoda będzie aktualizowana co 20 minut
					</p>
				</div>
				<div className={styles.main_legend}>
					<h4 className={styles.legend_heading}>Legenda:</h4>
					<div className={styles.legend}>
						<div className={styles.info_legend}>
							<img className={styles.legend_img} src={Sun} alt='sun' />
							<span className={styles.legend_info}>- słonecznie</span>
						</div>
						<div className={styles.info_legend}>
							<img className={styles.legend_img} src={Sun} alt='sun' />
							<span className={styles.legend_info}>- słonecznie</span>
						</div>
						<div className={styles.info_legend}>
							<img className={styles.legend_img} src={Sun} alt='sun' />
							<span className={styles.legend_info}>- słonecznie</span>
						</div>
						<div className={styles.info_legend}>
							<img className={styles.legend_img} src={Sun} alt='sun' />
							<span className={styles.legend_info}>- słonecznie</span>
						</div>
						<div className={styles.info_legend}>
							<img className={styles.legend_img} src={Sun} alt='sun' />
							<span className={styles.legend_info}>- słonecznie</span>
						</div>
						<div className={styles.info_legend}>
							<img className={styles.legend_img} src={Sun} alt='sun' />
							<span className={styles.legend_info}>- słonecznie</span>
						</div>
						<div className={styles.info_legend}>
							<img className={styles.legend_img} src={Sun} alt='sun' />
							<span className={styles.legend_info}>- słonecznie</span>
						</div>
						<div className={styles.info_legend}>
							<img className={styles.legend_img} src={Sun} alt='sun' />
							<span className={styles.legend_info}>- słonecznie</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WeatherApp

import React from 'react'
import NavWorld from './NavWorld'
import styles from './WeatherApp.module.css'

import Unknown from './assets/unknown.png'
import FewClouds from './assets/few_clouds.png'
import Sun from './assets/sun.png'
import Cloud from './assets/cloud.png'
import Rain from './assets/rain.png'
import Drizzle from './assets/drizzle.png'
import Thunder from './assets/thunderstorm.png'
import Fog from './assets/fog.png'
import Snow from './assets/snow.png'

import WeatherWoman from './assets/back2.png'

const WeatherApp = () => {
	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<h1 className={styles.heading}>Co zobaczysz na stronach?</h1>
			<div className={styles.box_info}>
				<div className={styles.box_main}>
					<div className={styles.main_info}>
						<img className={styles.main_img} src={Unknown} alt='some_weather' />
						<p className={styles.main_text}>
							Po wybraniu państwa/kontynentu przeniesiesz się na stronę i uzyskasz informację o stanie pogody w głównych
							miastach w regionie. Jeżeli długo przebywasz na stronie pogoda będzie aktualizowana co 10 minut
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
								<img className={styles.legend_img} src={FewClouds} alt='few_clouds' />
								<span className={styles.legend_info}>- częściowo słonecznie</span>
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
								<img className={styles.legend_img} src={Drizzle} alt='drizzle' />
								<span className={styles.legend_info}>- mżawka</span>
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
							<div className={styles.legend_other_info}>
								<p className={styles.other_info}>W kolejnych informacjach pojawią się stan pogody, temperatura w ℃.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img className={styles.back_img} src={WeatherWoman} alt='woman_weather' />
		</section>
	)
}

export default WeatherApp

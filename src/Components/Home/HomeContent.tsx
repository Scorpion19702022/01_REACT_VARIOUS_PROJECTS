import React, { useContext } from 'react'

import styles from './Home.module.css'
import HomeContext from './Context/HomeContext'

import imgSlider01 from './assets/imgSwiper01.jpg'
import imgSlider02 from './assets/imgSwiper02.jpg'
import imgSlider03 from './assets/imgSwiper03.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const HomeContent = () => {
	const { textPL, textEN, isActivePL, isActiveEN, addedText } = useContext(HomeContext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_btns}>
				<button className={isActivePL ? styles.btn_pl_active : styles.btn_pl} onClick={() => addedText(textPL)}>
					Polski
				</button>
				<button className={isActiveEN ? styles.btn_en_active : styles.btn_en} onClick={() => addedText(textEN)}>
					English
				</button>
			</div>
			<div className={styles.box_content}>
				<p className={styles.text}>{isActivePL ? textPL : isActiveEN ? textEN : textPL}</p>
			</div>
			<div className={styles.box_card}>
				<h4 className={styles.card_heading}>Aplikacja pogodowa</h4>
				<div className={styles.card_box_img}>
					<img className={styles.card_img} src={imgSlider01} alt='photoSlider' />
				</div>
			</div>
		</section>
	)
}

export default HomeContent

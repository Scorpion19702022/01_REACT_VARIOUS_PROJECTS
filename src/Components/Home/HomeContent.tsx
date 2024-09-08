import React, { useContext } from 'react'

import styles from './Home.module.css'
import HomeContext from './Context/HomeContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'

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
		</section>
	)
}

export default HomeContent

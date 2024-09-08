import React from 'react'

import styles from './Home.module.css'

import imgSlider01 from './assets/imgSwiper01.jpg'
import imgSlider02 from './assets/imgSwiper02.jpg'
import imgSlider03 from './assets/imgSwiper03.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const HomeSwiper = () => {
	return (
		<section className={styles.wrapper_card}>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					778: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className={styles.swiper}
			>
				<SwiperSlide className={styles.box_swiper}>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Aplikacja pogodowa</h4>
						<p className={styles.card_text}>
							Aktualna pogoda dla miast Polski i ważniejszych miast na poszczególnych kontyentach. Aktualizacja co 10
							miut
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider01} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>ToDoList</h4>
						<p className={styles.card_text}>
							Aktualna pogoda dla miast Polski i ważniejszych miast na poszczególnych kontyentach. Aktualizacja co 10
							miut
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider02} alt='photoSlider' />
				</SwiperSlide>

				<SwiperSlide className={styles.box_swiper}>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Kalkulator BMI</h4>
						<p className={styles.card_text}>
							Aktualna pogoda dla miast Polski i ważniejszych miast na poszczególnych kontyentach. Aktualizacja co 10
							miut
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider03} alt='photoSlider' />
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default HomeSwiper

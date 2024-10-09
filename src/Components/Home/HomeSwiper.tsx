import React from 'react'

import styles from './Home.module.css'

import { NavLink } from 'react-router-dom'

import imgSlider01 from './assets/imgSwiper01.jpg'
import imgSlider02 from './assets/imgSwiper02.jpg'
import imgSlider03 from './assets/imgSwiper03.jpg'
import imgSlider04 from './assets/imgSwiper04.jpg'
import imgSlider05 from './assets/imgSwiper05.jpg'
import imgSlider06 from './assets/imgSwiper06.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper/modules'

const HomeSwiper = () => {
	return (
		<section className={styles.wrapper_card}>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				loop={true}
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
				modules={[Autoplay, Navigation]}
				className={styles.swiper}
			>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./WeatherApp'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Aplikacja pogodowa</h4>
						<p className={styles.card_text}>
							Aktualna pogoda dla miast Polski i ważniejszych miast na poszczególnych kontyentach. Aktualizacja co 10
							minut.
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider01} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./ToDoList'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>ToDoList</h4>
						<p className={styles.card_text}>
							Zaawansowana lista zadań do zrobienia. Dane zapisywane są w LocalStorage i można je przetrzymywać na danym
							urządzeiu.
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider02} alt='photoSlider' />
				</SwiperSlide>

				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Bmi'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Kalkulator BMI</h4>
						<p className={styles.card_text}>
							Kalkulator pokazuje nie tylko wskaźnik BMI, ale także wyświetli poradę i pokaże sylwetkę ciała adekwatną
							do wskaźnika.
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider03} alt='photoSlider' />
				</SwiperSlide>

				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./SalaryCalculator'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Kalkulator wynagrodzeń</h4>
						<p className={styles.card_text}>
							Umożliwia obliczenie wartości wynagrodzenia netto z brutto dla poszczególych typów umowy, wysokość składek
							i podatek.
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider04} alt='photoSlider' />
				</SwiperSlide>

				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./SnackBar'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>SnackBar</h4>
						<p className={styles.card_text}>
							Zamawiaie produktów. Sprawdzenie ilości zamówienia i ceny. Wysłanie zamówienia i czas oczekiwania.
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider05} alt='photoSlider' />
				</SwiperSlide>

				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./SnackBar'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>SnackBar</h4>
						<p className={styles.card_text}>
							Zamawiaie produktów. Sprawdzenie ilości zamówienia i ceny. Wysłanie zamówienia i czas oczekiwania.
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider06} alt='photoSlider' />
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default HomeSwiper

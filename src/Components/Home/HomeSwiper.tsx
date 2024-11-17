import React from 'react'

import styles from './Home.module.css'

import { NavLink } from 'react-router-dom'

import imgSlider01 from './assets/imgSwiper01.jpg'
import imgSlider02 from './assets/imgSwiper02.jpg'
import imgSlider03 from './assets/imgSwiper03.jpg'
import imgSlider04 from './assets/imgSwiper04.jpg'
import imgSlider05 from './assets/imgSwiper05.jpg'
import imgSlider06 from './assets/imgSwiper06.jpg'
import imgSlider07 from './assets/imgSwiper07.jpg'
import imgSlider08 from './assets/imgSwiper08.jpg'
import imgSlider09 from './assets/imgSwiper09.jpg'
import imgSlider10 from './assets/imgSwiper10.jpg'

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
					1200: {
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
					<NavLink to='./TicTacToe'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>TicTacToe</h4>
						<p className={styles.card_text}>
							Popularna gra w kółko i krzyżyk. Edycja nazwy graczy, lista wykonanych ruchów i info o wyniku gry.
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider06} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Quiz'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Quiz</h4>
						<p className={styles.card_text}>
							10 pytań o stolice europejskie. Pokazuje poszczególne wyniki oraz wynik końcowy.
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider07} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Stopwatch'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Stopwatch/Stoper</h4>
						<p className={styles.card_text}>
							Zaawansoway stoper z zapisem sortowanej listy zmierzonych czasów od najszybszego. Można zmienić kolor
							layoutu.
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider08} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Countdown'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Odliczanie czasu do ...</h4>
						<p className={styles.card_text}>
							Pokazuje czas w godzinach i dniach jaki został do zdarzenia w przyszłości
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider09} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Demography'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Demografia miast Polski</h4>
						<p className={styles.card_text}>Przedstawia liczbowo i na wykresie przyrost mieszkańców miast w Polsce</p>
					</div>
					<img className={styles.card_img} src={imgSlider10} alt='photoSlider' />
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default HomeSwiper

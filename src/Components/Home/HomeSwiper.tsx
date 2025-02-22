import React, { useContext } from 'react'

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
import imgSlider11 from './assets/imgSwiper11.jpg'
import imgSlider12 from './assets/imgSwiper12.jpg'
import imgSlider13 from './assets/imgSwiper13.jpg'
import imgSlider14 from './assets/imgSwiper14.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper/modules'
import HomeContext from './Context/HomeContext'

const HomeSwiper = () => {
	const { isActiveEN } = useContext(HomeContext)

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
						<h4 className={styles.card_heading}>{isActiveEN ? 'Weather App' : 'Aplikacja pogodowa'}</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Current weather for Polish cities and major cities on individual continents. Updated every 10 minutes.'
								: 'Aktualna pogoda dla miast Polski i ważniejszych miast na poszczególnych kontyentach. Aktualizacja co 10 minut.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider01} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Converter'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>{isActiveEN ? 'Degree conventer' : 'Konwerter stopni'}</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Degree Converter. Check how many degrees ℃ is degrees ℉. Change and check how many ℉ is ℃.'
								: 'Konwerter stopni. Sprawdż ile stopni ℃ to stopni ℉. Zmień i sprawdż ile ℉ to ℃.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider02} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./ToDoList'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>ToDoList</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Advanced To-Do List. Data is saved in LocalStorage and can be stored on a given device.'
								: 'Zaawansowana lista zadań do zrobienia. Dane zapisywane są w LocalStorage i można je przetrzymywać na danym urządzeniu.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider03} alt='photoSlider' />
				</SwiperSlide>

				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Bmi'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>{isActiveEN ? 'BMI calculator' : 'Kalkulator BMI'}</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'The calculator not only shows the BMI, but also provides advice and shows the body shape appropriate to the index.'
								: 'Kalkulator pokazuje nie tylko wskaźnik BMI, ale także wyświetli poradę i pokaże sylwetkę ciała adekwatną do wskaźnika.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider04} alt='photoSlider' />
				</SwiperSlide>

				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./SalaryCalculator'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>{isActiveEN ? 'Salary calculator' : 'Kalkulator wynagrodzeń'}</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Calculate the net salary value from the gross salary for individual contract types, the amount of contributions and tax.'
								: 'Obliczenie wartości wynagrodzenia netto z brutto dla poszczególnych typów umowy, wysokość składek i podatek.'}
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
							{isActiveEN
								? 'Ordering products. Checking order quantity and price. Sending order.'
								: 'Zamawianie produktów. Sprawdzenie ilości zamówienia i ceny. Wysłanie zamówienia.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider06} alt='photoSlider' />
				</SwiperSlide>

				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./TicTacToe'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>TicTacToe</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Popular game of tic-tac-toe. Edit player names, list of moves made and info about the game result.'
								: 'Popularna gra w kółko i krzyżyk. Edycja nazwy graczy, lista wykonanych ruchów i info o wyniku gry.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider07} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Quiz'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Quiz</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? '10 Questions about European Capitals. Shows individual results and the final score.'
								: '10 pytań o stolice europejskie. Pokazuje poszczególne wyniki oraz wynik końcowy.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider08} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Stopwatch'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>Stopwatch/Stoper</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Stopwatch with a sorted list of measured times from the fastest. You can change the layout color.'
								: 'Stoper z zapisem posortowanej listy zmierzonych czasów od najszybszego. Można zmienić kolor layoutu.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider09} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Countdown'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>{isActiveEN ? 'Countdown to ...' : 'Odliczanie czasu do ...'}</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Shows the time in hours and days left until a future event.'
								: 'Pokazuje czas w godzinach i dniach jaki został do zdarzenia w przyszłości.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider10} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Demography'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>
							{isActiveEN ? 'Demographics of Polish cities' : 'Demografia miast Polski'}
						</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'It presents numerically and on a graph the growth of the urban population in Poland.'
								: 'Przedstawia liczbowo i na wykresie przyrost mieszkańców miast w Polsce.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider11} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./ExchangeRate'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>{isActiveEN ? 'NBP exchange rate' : 'Kurs walut NBP'}</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Current NBP exchange rate. Selection of the rate from another day and a chart of rates with the selection of the starting date.'
								: 'Aktualny kurs walut NBP. Wybór kursu z innego dnia i wykres  kursów z wyborem daty początkowej.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider12} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Calculator'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>{isActiveEN ? 'Calculator' : 'Kalkulator'}</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Traditional calculator. Using a reducer in the project.'
								: 'Tradycyjny kalkulator. Wykorzystanie w projekcie reducera.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider13} alt='photoSlider' />
				</SwiperSlide>
				<SwiperSlide className={styles.box_swiper}>
					<NavLink to='./Investment'>
						<button className={styles.btn_link}>LINK</button>
					</NavLink>
					<div className={styles.card_box_text}>
						<h4 className={styles.card_heading}>
							{isActiveEN ? 'Contribution interest rate' : 'Oprocentowanie wkładu'}
						</h4>
						<p className={styles.card_text}>
							{isActiveEN
								? 'Bank deposit interest rates in the most popular banks. Table and chart.'
								: 'Oprocentowanie wkładu bankowego w najpopularniejszych bankach. Tabela i wykres.'}
						</p>
					</div>
					<img className={styles.card_img} src={imgSlider14} alt='photoSlider' />
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default HomeSwiper

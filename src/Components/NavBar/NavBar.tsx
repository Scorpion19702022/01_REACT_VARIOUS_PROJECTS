import React, { useEffect, useState } from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	const [navView, setNavView] = useState(false)

	const handleNavView = () => {
		setNavView(!navView)
	}

	useEffect(() => {
		if (navView) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [navView])

	return (
		<nav className={styles.nav}>
			<button className={styles.nav_btn} onClick={handleNavView}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</button>
			<div className={!navView ? styles.nav_links_no_view : styles.nav_links_view}>
				<ul className={styles.list_links}>
					<NavLink to='/'>
						<li className={styles.link} onClick={handleNavView}>
							Home
						</li>
					</NavLink>
					<NavLink to='./WeatherApp'>
						<li className={styles.link} onClick={handleNavView}>
							WeatherApp
						</li>
					</NavLink>
					<NavLink to='./ToDoList'>
						<li className={styles.link} onClick={handleNavView}>
							ToDoList
						</li>
					</NavLink>
					<NavLink to='./Bmi'>
						<li className={styles.link} onClick={handleNavView}>
							Bmi
						</li>
					</NavLink>
					<NavLink to='./SalaryCalculator'>
						<li className={styles.link} onClick={handleNavView}>
							Kalkulator wynagrodzeń
						</li>
					</NavLink>
					<NavLink to='./SnackBar'>
						<li className={styles.link} onClick={handleNavView}>
							SnackBar
						</li>
					</NavLink>
					<NavLink to='./TicTacToe'>
						<li className={styles.link} onClick={handleNavView}>
							TicTacToe
						</li>
					</NavLink>
					<NavLink to='./Quiz'>
						<li className={styles.link} onClick={handleNavView}>
							Quiz
						</li>
					</NavLink>
					<NavLink to='./Stoper'>
						<li className={styles.link} onClick={handleNavView}>
							Stoper
						</li>
					</NavLink>
					<NavLink to='./Countdown'>
						<li className={styles.link} onClick={handleNavView}>
							Odliczanie czasu
						</li>
					</NavLink>
					<NavLink to='./Demography'>
						<li className={styles.link} onClick={handleNavView}>
							Demografia
						</li>
					</NavLink>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar

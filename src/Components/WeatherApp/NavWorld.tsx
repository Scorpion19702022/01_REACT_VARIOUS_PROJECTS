import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './NavWorld.module.css'

const NavWorld = () => {
	const location = useLocation()

	return (
		<nav className={styles.nav_links}>
			<Link to='/WeatherApp' className={location.pathname === '/WeatherApp' ? styles.btn_active : styles.btn_no_active}>
				<p className={styles.into_btn}>Legenda</p>
			</Link>
			<Link
				to='/WeatherApp/Poland'
				className={location.pathname === '/WeatherApp/Poland' ? styles.btn_active : styles.btn_no_active}
			>
				<p className={styles.into_btn}>Polska</p>
			</Link>
			<Link
				to='/WeatherApp/Europe'
				className={location.pathname === '/WeatherApp/Europe' ? styles.btn_active : styles.btn_no_active}
			>
				<p className={styles.into_btn}>Europa</p>
			</Link>
			<Link
				to='/WeatherApp/Asia'
				className={location.pathname === '/WeatherApp/Asia' ? styles.btn_active : styles.btn_no_active}
			>
				<p className={styles.into_btn}>Azja</p>
			</Link>
			<Link
				to='/WeatherApp/Europe'
				className={location.pathname === '/WeatherApp/Europe' ? styles.btn_active : styles.btn_no_active}
			>
				<p className={styles.into_btn}>Ameryka Płn</p>
			</Link>
			<Link
				to='/WeatherApp/Europe'
				className={location.pathname === '/WeatherApp/Europe' ? styles.btn_active : styles.btn_no_active}
			>
				<p className={styles.into_btn}>Ameryka Płd</p>
			</Link>
			<Link
				to='/WeatherApp/Europe'
				className={location.pathname === '/WeatherApp/Europe' ? styles.btn_active : styles.btn_no_active}
			>
				<p className={styles.into_btn}>Afryka</p>
			</Link>
			<Link
				to='/WeatherApp/Europe'
				className={location.pathname === '/WeatherApp/Europe' ? styles.btn_active : styles.btn_no_active}
			>
				<p className={styles.into_btn}>Oceania</p>
			</Link>
		</nav>
	)
}

export default NavWorld

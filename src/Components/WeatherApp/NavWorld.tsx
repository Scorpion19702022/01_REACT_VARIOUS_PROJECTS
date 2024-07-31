import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './NavWorld.module.css'

const NavWorld = () => {
	const location = useLocation()

	return (
		<nav className={styles.nav_links}>
			<Link to='/WeatherApp' className={location.pathname === '/WeatherApp' ? styles.btn_active : styles.btn_no_active}>
				<p className={styles.into_btn}>Main</p>
			</Link>
			<Link
				to='/WeatherApp/Poland'
				className={location.pathname === '/WeatherApp/Poland' ? styles.btn_active : styles.btn_no_active}
			>
				<p className={styles.into_btn}>Poland</p>
			</Link>
			<Link
				to='/WeatherApp/WestEurope'
				className={location.pathname === '/WeatherApp/WestEurope' ? styles.btn_active : styles.btn_no_active}
			>
				<p className={styles.into_btn}>West Europe</p>
			</Link>
		</nav>
	)
}

export default NavWorld

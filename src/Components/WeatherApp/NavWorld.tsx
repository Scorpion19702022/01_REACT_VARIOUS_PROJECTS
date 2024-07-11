import React from 'react'
import { Link } from 'react-router-dom'

import styles from './NavWorld.module.css'

const NavWorld = () => {
	return (
		<nav className={styles.nav_btns}>
			<Link to='/WeatherApp'>
				<button></button>
			</Link>
			<Link to='/WeatherApp/Poland'>
				<button></button>
			</Link>
			<Link to='/WeatherApp/Europe'>
				<button></button>
			</Link>
		</nav>
	)
}

export default NavWorld

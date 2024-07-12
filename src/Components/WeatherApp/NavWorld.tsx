import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './NavWorld.module.css'

const NavWorld = () => {
	const [activeButton, setActiveButton] = useState<string>('')

	const handleActive = (button: string) => {
		setActiveButton(button)
	}

	return (
		<nav className={styles.nav_btns}>
			<button
				className={activeButton === 'main' ? styles.btn_active : styles.btn_no_active}
				onClick={() => handleActive('main')}
			>
				<Link to='/WeatherApp'>
					<p className={styles.into_btn}>Main</p>
				</Link>
			</button>
			<button
				className={activeButton === 'poland' ? styles.btn_active : styles.btn_no_active}
				onClick={() => handleActive('poland')}
			>
				<Link to='/WeatherApp/Poland'>
					<p className={styles.into_btn}>Poland</p>
				</Link>
			</button>
			<button
				className={activeButton === 'europe' ? styles.btn_active : styles.btn_no_active}
				onClick={() => handleActive('europe')}
			>
				<Link to='/WeatherApp/Europe'>
					<p className={styles.into_btn}>Europe</p>
				</Link>
			</button>
		</nav>
	)
}

export default NavWorld

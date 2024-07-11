import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './NavWorld.module.css'

const NavWorld = () => {
	const [isActiveMain, setIsActiveMain] = useState<boolean>(false)
	const [isActivePoland, setIsActivePoland] = useState<boolean>(false)
	const [isActiveEurope, setIsActiveEurope] = useState<boolean>(false)

	const handleActive = (event: string) => {
		if (event === 'main') {
			setIsActiveMain(!isActiveMain)
			setIsActivePoland(false)
			setIsActiveEurope(false)
		} else if (event === 'poland') {
			setIsActiveMain(false)
			setIsActivePoland(!isActivePoland)
			setIsActiveEurope(false)
		} else if (event === 'europe') {
			setIsActiveMain(false)
			setIsActivePoland(false)
			setIsActiveEurope(!isActiveEurope)
		} else {
			setIsActiveMain(false)
			setIsActivePoland(false)
			setIsActiveEurope(false)
		}
	}

	return (
		<nav className={styles.nav_btns}>
			<button className={!isActiveMain ? styles.btn_no_active : styles.btn_active} onClick={() => handleActive('main')}>
				<NavLink to='/WeatherApp'>
					<p className={styles.into_btn}>Main</p>
				</NavLink>
			</button>
			<button
				className={!isActivePoland ? styles.btn_no_active : styles.btn_active}
				onClick={() => handleActive('poland')}
			>
				<NavLink to='/WeatherApp/Poland'>
					<p className={styles.into_btn}>Poland</p>
				</NavLink>
			</button>
			<button
				className={!isActiveEurope ? styles.btn_no_active : styles.btn_active}
				onClick={() => handleActive('europe')}
			>
				<NavLink to='/WeatherApp/Europe'>
					<p className={styles.into_btn}>Europe</p>
				</NavLink>
			</button>
		</nav>
	)
}

export default NavWorld

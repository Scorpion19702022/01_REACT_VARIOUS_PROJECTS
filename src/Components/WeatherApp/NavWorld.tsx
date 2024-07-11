import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './NavWorld.module.css'

const NavWorld = () => {
	const [isActiveMain, setIsActiveMain] = useState<boolean>(false)
	const [isActivePoland, setIsActivePoland] = useState<boolean>(false)
	const [isActiveEurope, setIsActiveEurope] = useState<boolean>(false)

	useEffect(() => {
		if (isActiveMain) {
			setIsActivePoland(false)
			setIsActiveEurope(false)
		} else if (isActivePoland) {
			setIsActiveMain(false)
			setIsActiveEurope(false)
		} else if (isActiveEurope) {
			setIsActivePoland(false)
			setIsActiveEurope(false)
		} else {
			setIsActiveMain(false)
			setIsActivePoland(false)
			setIsActiveEurope(false)
		}
	}, [isActiveMain, isActivePoland, isActiveEurope])

	const handleActive = (event: string) => {
		setIsActiveMain(!isActiveMain)
		setIsActivePoland(!isActivePoland)
		setIsActiveEurope(!isActiveEurope)
		if (event === 'main' && isActiveMain) {
			setIsActiveMain(true)
			setIsActivePoland(false)
			setIsActiveEurope(false)
		} else if (event === 'poland' && isActivePoland) {
			setIsActiveMain(false)
			setIsActivePoland(true)
			setIsActiveEurope(false)
		} else if (event === 'europe' && isActiveEurope) {
			setIsActiveMain(false)
			setIsActivePoland(false)
			setIsActiveEurope(true)
		}
	}
	console.log(`glowna ${isActiveMain}`)

	return (
		<nav className={styles.nav_btns}>
			<button className={!isActiveMain ? styles.btn_no_active : styles.btn_active} onClick={() => handleActive('main')}>
				<Link to='/WeatherApp'>
					<p className={styles.into_btn}>Main</p>
				</Link>
			</button>
			<button
				className={isActivePoland ? styles.btn_no_active : styles.btn_active}
				onClick={() => handleActive('poland')}
			>
				<Link to='/WeatherApp/Poland'>
					<p className={styles.into_btn}>Poland</p>
				</Link>
			</button>
			<button
				className={isActiveEurope ? styles.btn_no_active : styles.btn_active}
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

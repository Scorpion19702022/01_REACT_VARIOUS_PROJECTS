import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './NavWorld.module.css'

const NavWorld = () => {
	const [isActiveMain, setIsActiveMain] = useState<boolean>(true)
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
			setIsActivePoland(!isActiveEurope)
			setIsActiveEurope(true)
		} else {
			setIsActiveMain(true)
			setIsActivePoland(false)
			setIsActiveEurope(false)
		}
	}

	return (
		<nav className={styles.nav_btns}>
			<Link to='/WeatherApp'>
				<button className={isActiveMain === true ? styles.btn : styles.btn_active} onClick={() => handleActive('main')}>
					Main Page
				</button>
			</Link>
			<Link to='/WeatherApp/Poland'>
				<button
					className={isActivePoland === true ? styles.btn : styles.btn_active}
					onClick={() => handleActive('poland')}
				>
					Polska
				</button>
			</Link>
			<Link to='/WeatherApp/Europe'>
				<button
					className={isActiveEurope === true ? styles.btn : styles.btn_active}
					onClick={() => handleActive('europe')}
				>
					Europa
				</button>
			</Link>
		</nav>
	)
}

export default NavWorld

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './NavWorld.module.css'

const NavWorld = () => {
	const [activeButtonMain, setActiveButtonMain] = useState<string>('main')
	const [activeButtonPoland, setActiveButtonPoland] = useState<string>('')
	const [activeButtonEurope, setActiveButtonEurope] = useState<string>('')

	const handleActive = (button: string) => {
		if (button === 'main') {
			setActiveButtonMain('main')
			setActiveButtonPoland('')
			setActiveButtonEurope('')
		} else if (button === 'poland') {
			setActiveButtonMain('')
			setActiveButtonPoland('poland')
			setActiveButtonEurope('')
		} else if (button === 'europe') {
			setActiveButtonMain('')
			setActiveButtonPoland('')
			setActiveButtonEurope('europe')
		}
	}

	return (
		<nav className={styles.nav_btns}>
			<button
				className={activeButtonMain === 'main' ? styles.btn_active : styles.btn_no_active}
				onClick={() => handleActive('main')}
			>
				<Link to='/WeatherApp'>
					<p className={styles.into_btn}>Main</p>
				</Link>
			</button>
			<button
				className={activeButtonPoland === 'poland' ? styles.btn_active : styles.btn_no_active}
				onClick={() => handleActive('poland')}
			>
				<Link to='/WeatherApp/Poland'>
					<p className={styles.into_btn}>Poland</p>
				</Link>
			</button>
			<button
				className={activeButtonEurope === 'europe' ? styles.btn_active : styles.btn_no_active}
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

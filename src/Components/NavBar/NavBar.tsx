import React, { useState } from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	const [navView, setNavView] = useState(false)

	const handleNavView = () => {
		setNavView(!navView)
	}

	return (
		<nav className={styles.nav}>
			<button className={styles.nav_btn} onClick={handleNavView}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</button>
			<div className={navView ? styles.nav_links_no_view : styles.nav_links_view}>
				<ul className={styles.list_links}>
					<NavLink to='/'>
						<li className={styles.link} onClick={handleNavView}>
							Home
						</li>
					</NavLink>
					<NavLink to='./Task01'>
						<li className={styles.link} onClick={handleNavView}>
							Task 01
						</li>
					</NavLink>
					<NavLink to='./Task02'>
						<li className={styles.link} onClick={handleNavView}>
							Task 02
						</li>
					</NavLink>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar

import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<button className={styles.nav_btn}>
				<div className={styles.linen}></div>
				<div className={styles.linen}></div>
				<div className={styles.linen}></div>
			</button>
			<div className={styles.nav_links}>
				<ul className={styles.list_links}>
					<NavLink to='/'>
						<li className={styles.link}>Home</li>
					</NavLink>
					<NavLink to='./Task01'>
						<li className={styles.link}>Task 01</li>
					</NavLink>
					<NavLink to='./Task02'>
						<li className={styles.link}>Task 02</li>
					</NavLink>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar

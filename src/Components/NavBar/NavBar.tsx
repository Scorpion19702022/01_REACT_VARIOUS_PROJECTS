import React from 'react'
import styles from './NavBar.module.css'

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
					<li className={styles.link}>Home</li>
					<li className={styles.link}>Task 01</li>
					<li className={styles.link}>Task 02</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar

import React from 'react'
import NavWorld from './NavWorld'

import styles from './PolandWeather.module.css'

const PolandWeather = () => {
	return (
		<section className={styles.wrapper}>
			<NavWorld />
			<div className={styles.box_content}></div>
		</section>
	)
}

export default PolandWeather

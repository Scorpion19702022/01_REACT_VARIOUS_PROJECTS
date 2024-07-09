import React, { useContext } from 'react'

import styles from './Home.module.css'
import HomeContext from './Context/HomeContext'

const Home = () => {
	const { isActivePL, isActiveEN, addedText } = useContext(HomeContext)

	console.log(isActivePL)
	console.log(isActiveEN)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_btns}>
				<button className={styles.btn_pl} onClick={addedText}>
					Polski
				</button>
				<button className={styles.btn_en}>English</button>
			</div>
			<div className={styles.box_content}>
				<p className={styles.text}></p>
			</div>
		</section>
	)
}

export default Home

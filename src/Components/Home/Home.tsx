import React, { useContext } from 'react'

import styles from './Home.module.css'
import HomeContext, { HomeProvider } from './Context/HomeContext'

const Home = () => {
	const { isActivePL, isActiveEN, viewText } = useContext(HomeContext)

	console.log(isActivePL)
	console.log(isActiveEN)

	return (
		<HomeProvider>
			<section className={styles.wrapper}>
				<div className={styles.box_btns}>
					<button className={styles.btn_pl} onClick={viewText}>
						Polski
					</button>
					<button className={styles.btn_en} onClick={viewText}>
						English
					</button>
				</div>
				<div className={styles.box_content}>
					<p className={styles.text}></p>
				</div>
			</section>
		</HomeProvider>
	)
}

export default Home

import React, { useContext } from 'react'

import styles from './Home.module.css'
import HomeContext, { HomeProvider } from './Context/HomeContext'

const Home = () => {
	const {} = useContext(HomeContext)

	return (
		<HomeProvider>
			<section className={styles.wrapper}>
				<h1 className={styles.heading}>Home</h1>
			</section>
		</HomeProvider>
	)
}

export default Home

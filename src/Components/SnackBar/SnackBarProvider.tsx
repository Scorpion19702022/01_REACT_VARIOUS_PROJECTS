import React from 'react'

import styles from './Styles/SnackBarProvider.module.css'
import SnackBarPoster from './SnackBarPoster'
import SnackBarProducts from './SnackBarProducts'

const SnackBarProvider = () => {
	return (
		<main className={styles.wrapper}>
			<SnackBarPoster />
			<SnackBarProducts />
		</main>
	)
}

export default SnackBarProvider

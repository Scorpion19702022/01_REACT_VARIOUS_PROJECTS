import React from 'react'

import styles from './Styles/SnackBarProvider.module.css'
import SnackBarPoster from './SnackBarPoster'
import SnackBarProducts from './SnackBarProducts'
import { SnackBarProvider } from './Context/SnackBarCotext'

const SnackBar = () => {
	return (
		<main className={styles.wrapper}>
			<SnackBarPoster />
			<SnackBarProvider>
				<SnackBarProducts />
			</SnackBarProvider>
		</main>
	)
}

export default SnackBar

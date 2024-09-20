import React from 'react'

import styles from './Styles/SnackBarProvider.module.css'
import SnackBarPoster from './SnackBarPoster'

const SnackBarProvider = () => {
	return (
		<main className={styles.wrapper}>
			<SnackBarPoster />
		</main>
	)
}

export default SnackBarProvider

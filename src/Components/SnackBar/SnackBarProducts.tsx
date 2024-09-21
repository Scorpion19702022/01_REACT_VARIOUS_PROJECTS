import React from 'react'
import SnackBarOrder from './SnackBarOrder'

import styles from './Styles/SnackBarProducts.module.css'

const SnackBarProducts = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_products}>
				<h1>Produkty</h1>
			</div>
			<SnackBarOrder />
		</section>
	)
}

export default SnackBarProducts

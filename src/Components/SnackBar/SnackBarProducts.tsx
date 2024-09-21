import React, { useContext } from 'react'
import SnackBarOrder from './SnackBarOrder'

import styles from './Styles/SnackBarProducts.module.css'
import SnackBarContext from './Context/SnackBarContext'

const SnackBarProducts = () => {
	const { products } = useContext(SnackBarContext)

	const productsList = products.map(item => (
		<div className={styles.product} key={item.id}>
			<h2>{item.name}</h2>
			<span>{item.price}</span>
			<img src={item.img} alt='' />
			<button className={styles.btn_order}>zamów</button>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_products}>
				<h1>Produkty</h1>
				<div className={styles.products}>{productsList}</div>
			</div>
			<SnackBarOrder />
		</section>
	)
}

export default SnackBarProducts

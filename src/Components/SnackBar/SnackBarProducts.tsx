import React, { useContext } from 'react'
import SnackBarOrder from './SnackBarOrder'

import styles from './Styles/SnackBarProducts.module.css'
import SnackBarContext from './Context/SnackBarContext'

const SnackBarProducts = () => {
	const { products } = useContext(SnackBarContext)

	const productsList = products.map(item => (
		<div className={styles.product} key={item.id}>
			<h4 className={styles.product_name}>{item.name}</h4>
			<span className={styles.product_price}>{item.price}</span>
			<div className={styles.box_img_product}>
				<img className={styles.img_product} src={item.img} alt='' />
			</div>
			<button className={styles.btn_product_order}>zamów</button>
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

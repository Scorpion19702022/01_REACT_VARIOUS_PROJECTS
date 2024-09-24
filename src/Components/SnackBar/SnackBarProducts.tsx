import React, { useContext } from 'react'
import SnackBarOrder from './SnackBarOrder'
import styles from './Styles/SnackBarProducts.module.css'
import SnackBarContext from './Context/SnackBarContext'

const SnackBarProducts = () => {
	const { products, selectProducts, handleSelectProducts, handleOrderProducts } = useContext(SnackBarContext)

	// const filteredProducts = products.filter(item => {
	// 	if (selectProducts === 'main') return item.category === 'danie główne'
	// 	if (selectProducts === 'desserts') return item.category === 'przekąski'
	// 	if (selectProducts === 'drinks') return item.category === 'napoje'
	// 	return false
	// })

	const filteredProducts = products.filter(item => {
		if (selectProducts === 'main') {
			return item.category === 'danie główne'
		} else if (selectProducts === 'desserts') {
			return item.category === 'przekąski'
		} else if (selectProducts === 'drinks') {
			return item.category === 'napoje'
		} else {
			return false
		}
	})

	const productsList = filteredProducts.map(item => (
		<div className={styles.product} key={item.id}>
			<h4 className={styles.product_name}>{item.name}</h4>
			<span className={styles.product_price}>{item.price} zł</span>
			<div className={styles.box_img_product}>
				<img className={styles.img_product} src={item.img} alt={item.name} />
			</div>
			<button className={styles.btn_product_order} onClick={() => handleOrderProducts(item.id)}>
				zamów
			</button>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_products}>
				<h1 className={styles.products_heading}>Nasze menu:</h1>
				<div className={styles.box_products_btns}>
					<button
						className={selectProducts === 'main' ? styles.products_btn_active : styles.products_btn}
						onClick={() => handleSelectProducts('main')}
					>
						dania głowne
					</button>
					<button
						className={selectProducts === 'desserts' ? styles.products_btn_active : styles.products_btn}
						onClick={() => handleSelectProducts('desserts')}
					>
						przekąski i desery
					</button>
					<button
						className={selectProducts === 'drinks' ? styles.products_btn_active : styles.products_btn}
						onClick={() => handleSelectProducts('drinks')}
					>
						napoje i alkohol
					</button>
				</div>
				<div className={styles.products}>{productsList}</div>
			</div>
			<SnackBarOrder />
		</section>
	)
}

export default SnackBarProducts

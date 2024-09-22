import React, { useContext } from 'react'
import SnackBarOrder from './SnackBarOrder'

import styles from './Styles/SnackBarProducts.module.css'
import SnackBarContext from './Context/SnackBarContext'

const SnackBarProducts = () => {
	const { products, btnIsActiveMain, btnIsActiveDesserts, btnIsActiveDrinks, selectProducts, handleSelectProducts } =
		useContext(SnackBarContext)

	// const productsListMain = products.filter(item => (
	// 	<div className={styles.product} key={item.id}>
	// 		<h4 className={styles.product_name}>{item.name}</h4>
	// 		<span className={styles.product_price}>{item.price} zł</span>
	// 		<div className={styles.box_img_product}>
	// 			<img className={styles.img_product} src={item.img} alt='' />
	// 		</div>
	// 		<button className={styles.btn_product_order}>zamów</button>
	// 	</div>
	// ))

	const productsListMain = products
		.filter(item => item.category === 'danie główne')
		.map(item => (
			<div className={styles.product} key={item.id}>
				<h4 className={styles.product_name}>{item.name}</h4>
				<span className={styles.product_price}>{item.price} zł</span>
				<div className={styles.box_img_product}>
					<img className={styles.img_product} src={item.img} alt='' />
				</div>
				<button className={styles.btn_product_order}>zamów</button>
			</div>
		))

	const productsListDesserts = products
		.filter(item => item.category === 'przekąski')
		.map(item => (
			<div className={styles.product} key={item.id}>
				<h4 className={styles.product_name}>{item.name}</h4>
				<span className={styles.product_price}>{item.price} zł</span>
				<div className={styles.box_img_product}>
					<img className={styles.img_product} src={item.img} alt='' />
				</div>
				<button className={styles.btn_product_order}>zamów</button>
			</div>
		))

	const productsListDrinks = products
		.filter(item => item.category === 'napoje')
		.map(item => (
			<div className={styles.product} key={item.id}>
				<h4 className={styles.product_name}>{item.name}</h4>
				<span className={styles.product_price}>{item.price} zł</span>
				<div className={styles.box_img_product}>
					<img className={styles.img_product} src={item.img} alt='' />
				</div>
				<button className={styles.btn_product_order}>zamów</button>
			</div>
		))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_products}>
				<h1 className={styles.products_heading}>Nasze menu:</h1>
				<div className={styles.box_products_btns}>
					<button
						className={!btnIsActiveMain ? styles.products_btn : styles.products_btn_active}
						onClick={() => handleSelectProducts('main')}
					>
						dania głowne
					</button>
					<button
						className={!btnIsActiveDesserts ? styles.products_btn : styles.products_btn_active}
						onClick={() => handleSelectProducts('desserts')}
					>
						przekąski i desery
					</button>
					<button
						className={!btnIsActiveDrinks ? styles.products_btn : styles.products_btn_active}
						onClick={() => handleSelectProducts('drinks')}
					>
						napoje i alkohol
					</button>
				</div>
				<div className={styles.products}>
					{selectProducts === 'main'
						? productsListMain
						: selectProducts === 'desserts'
						? productsListDesserts
						: selectProducts === 'drinks'
						? productsListDrinks
						: null}
				</div>
			</div>
			<SnackBarOrder />
		</section>
	)
}

export default SnackBarProducts

import React, { useContext } from 'react'

import styles from './Styles/SnackBarOrder.module.css'
import SnackBarContext from './Context/SnackBarContext'

const SnackBarOrder = () => {
	const {
		orderProducts,
		orderCost,
		orderQuantityProducts,
		orderNameProduct,
		servicePopup,
		handleVisiblePopup,
		handleClosePopup,
		handleDeleteAllOrder,
		deleteAllOrderTextInfo,
	} = useContext(SnackBarContext)

	const yourOrderProduct = orderProducts.map(item => (
		<ul className={styles.order_products_list} key={item.id}>
			<li className={styles.order_product}>
				<h4 className={styles.order_name}>{item.name}</h4>
				<span className={styles.order_price}>{item.price} zł</span>
				<button className={styles.order_btn}>usuń</button>
			</li>
		</ul>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_orders}>
				<h1 className={styles.heading_orders}>Twoje zamówieie:</h1>
				<div className={styles.heading_info}>
					<h2 className={styles.info_orders}>
						Ilość zamówienia: <span className={styles.info_span}>{orderProducts.length}</span> {orderQuantityProducts}
					</h2>
					<h2 className={styles.info_orders}>
						Do zapłaty: <span className={styles.info_span}>{orderCost}</span> zł
					</h2>
				</div>
				<div className={styles.heading_info}>
					<h3 className={styles.info_orders}>
						Zamówiłaś/eś: <span className={styles.info_span}>{orderNameProduct}</span>
					</h3>
				</div>
				<button className={styles.btn_clean_orders} onClick={() => handleVisiblePopup('deleteAll')}>
					usuń całe zamówienie
				</button>
			</div>
			<div className={styles.box_order_list}>{yourOrderProduct}</div>
			<div className={styles.box_btns_check_and_send}>
				<button className={styles.btn_check_and_send}>wyślij zamówienie</button>
				<button className={styles.btn_check_and_send}>sprawdź status</button>
			</div>
			<div className={!servicePopup ? styles.no_box_info_popup : styles.box_info_popup}>
				<p className={styles.text_info}>{deleteAllOrderTextInfo}</p>
				<div className={styles.box_btns_popup}>
					<button className={styles.btn_popup} onClick={handleClosePopup}>
						nie
					</button>
					<button className={styles.btn_popup} onClick={handleDeleteAllOrder}>
						tak
					</button>
				</div>
			</div>
		</section>
	)
}

export default SnackBarOrder

import React, { useContext } from 'react'

import styles from './Styles/SnackBarOrder.module.css'
import SnackBarContext from './Context/SnackBarContext'

const SnackBarOrder = () => {
	const { orderNameProduct, servicePopup, handleVisiblePopup, handleClosePopup, handleDeleteAllOrder } =
		useContext(SnackBarContext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_orders}>
				<h1 className={styles.heading_orders}>Twoje zamówieie:</h1>
				<div className={styles.heading_info}>
					<h2 className={styles.info_orders}>
						Ilość zamówienia: <span className={styles.info_span}>0</span> produktów
					</h2>
					<h2 className={styles.info_orders}>
						Suma zamówieia <span className={styles.info_span}>0</span> zł
					</h2>
				</div>
				<div className={styles.heading_info}>
					<h3 className={styles.info_orders}>
						Zamówiłeś: <span className={styles.info_span}>{orderNameProduct}</span>
					</h3>
				</div>
				<button className={styles.btn_clean_orders} onClick={() => handleVisiblePopup('deleteAll')}>
					usuń całe zamówienie
				</button>
			</div>
			<div className={styles.box_order_list}>
				<ul>
					<li>aaaaaa</li>
				</ul>
			</div>
			<div className={styles.box_btns_check_and_send}>
				<button className={styles.btn_check_and_send}>wyślij zamówienie</button>
				<button className={styles.btn_check_and_send}>sprawdź status</button>
			</div>
			<div className={!servicePopup ? styles.no_box_info_popup : styles.box_info_popup}>
				<p className={styles.text_info}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, debitis.</p>
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

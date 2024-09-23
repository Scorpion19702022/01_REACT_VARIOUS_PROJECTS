import React from 'react'

import styles from './Styles/SnackBarOrder.module.css'

const SnackBarOrder = () => {
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
					<h3 className={styles.other_info}>
						Zamówiłeś: <span className={styles.order_product_name}>Kaszankę</span>
					</h3>
				</div>
				<button className={styles.clean_orders}>usuń zamówienie</button>
			</div>
			<div className={styles.box_orders_list}>
				<ul>
					<li>aaaaaa</li>
					<li>aaaaaaaaaa</li>
					<li>aaaaaaaaaaa</li>
					<li>aaaaaaaaaaa</li>
					<li>aaaaaaaaaaa</li>
					<li>aaaaaaa</li>
					<li>aaaaaaaa</li>
					<li>aaaaaaaaa</li>
					<li>aaaaaaaaaa</li>
					<li>aaaaaaaaa</li>
					<li>aaaaaaaaa</li>
					<li>aaaaaaaaaa</li>
					<li>aaaaaaaaaa</li>
					<li>aaaaaaaaaa</li>
					<li>aaaaaaaaaaa</li>
					<li>aaaaaaaaaaaaa</li>
					<li>aaaaaaaaaaa</li>
					<li>aaaaaaaaaa</li>
					<li>aaaaaaaaaa</li>
					<li>aaaaaaaaaa</li>
				</ul>
			</div>
		</section>
	)
}

export default SnackBarOrder

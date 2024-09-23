import React from 'react'

import styles from './Styles/SnackBarOrder.module.css'

const SnackBarOrder = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_orders}>
				<h1 className={styles.heading_orders}>Twoje zamówieie:</h1>
				<div className={styles.box_info}>
					<div className={styles.headig_info}>
						<h2 className={styles.quantity_orders}>
							Ilość zamówienia: <span className={styles.quantity}>0</span> produktów
						</h2>
						<h2 className={styles.sum_price_orders}>
							Suma zamówieia <span className={styles.sum_price}>0</span> zł
						</h2>
					</div>
				</div>
				<div className={styles.other_orders_info}>
					<h3 className={styles.other_info}>
						Zamówiłeś: <span className={styles.order_product_name}>Kaszankę</span>
					</h3>
					<button className={styles.clean_orders}>usuń zamówienie</button>
				</div>
			</div>
		</section>
	)
}

export default SnackBarOrder

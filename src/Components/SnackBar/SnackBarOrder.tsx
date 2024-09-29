import React, { useContext } from 'react'

import styles from './Styles/SnackBarOrder.module.css'
import SnackBarContext from './Context/SnackBarContext'

const SnackBarOrder = () => {
	const {
		orderProducts,
		sendOrder,
		orderCost,
		orderQuantityProducts,
		orderNameProduct,
		servicePopup,
		sureDeleteOrder,
		sureSend,
		statusOrder,
		handleVisiblePopup,
		handleClosePopup,
		handleDeleteAllOrder,
		handleDeleteProductOrder,
		deleteAllOrderTextInfo,
		handleSendOrder,
		handleSureSend,
		handleCheckStatus,
		handleCloseCheckOrderPopup,
	} = useContext(SnackBarContext)

	const yourOrderProduct = orderProducts.map(item => (
		<ul className={styles.order_products_list} key={item.id}>
			<li className={styles.order_product}>
				<h4 className={styles.order_name}>{item.name}</h4>
				<span className={styles.order_price}>{item.price} zł</span>
				<button className={styles.order_btn} onClick={() => handleVisiblePopup('deleteOrder')}>
					usuń
				</button>
			</li>
			<div className={!sureDeleteOrder ? styles.no_box_info_popup : styles.box_info_popup}>
				<p className={styles.text_info}>
					{deleteAllOrderTextInfo} {item.name}
				</p>
				<div className={styles.box_btns_popup}>
					<button className={styles.btn_popup} onClick={handleClosePopup}>
						nie
					</button>
					<button className={styles.btn_popup} onClick={() => handleDeleteProductOrder(item.id, item.name)}>
						tak
					</button>
				</div>
			</div>
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
				<button
					className={styles.btn_clean_orders}
					onClick={() => handleVisiblePopup('deleteAll')}
					disabled={orderProducts.length > 0 ? false : true}
				>
					usuń całe zamówienie
				</button>
			</div>
			<div className={styles.box_order_list}>{yourOrderProduct}</div>
			<div className={styles.box_btns_check_and_send}>
				<button
					className={styles.btn_check_and_send}
					onClick={handleSureSend}
					disabled={orderProducts.length > 0 ? false : true}
				>
					wyślij zamówienie
				</button>
				<button
					className={styles.btn_check_and_send}
					onClick={handleCheckStatus}
					disabled={sendOrder.length > 0 ? false : true}
				>
					sprawdź status
				</button>
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
			<div className={!sureSend ? styles.no_box_info_popup : styles.box_info_popup}>
				<p className={styles.text_info}>{deleteAllOrderTextInfo}</p>
				<div className={styles.box_btns_popup}>
					<button className={styles.btn_popup} onClick={handleClosePopup}>
						nie
					</button>
					<button className={styles.btn_popup} onClick={handleSendOrder}>
						tak
					</button>
				</div>
			</div>
			<div className={!statusOrder ? styles.no_box_info_popup : styles.box_info_popup}>
				<p className={styles.text_info}>{deleteAllOrderTextInfo}</p>
				<div className={styles.box_btns_popup}>
					<button className={styles.btn_popup_close_status} onClick={handleCloseCheckOrderPopup}>
						zamknij
					</button>
				</div>
			</div>
		</section>
	)
}

export default SnackBarOrder

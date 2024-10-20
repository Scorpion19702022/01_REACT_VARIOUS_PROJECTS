import React, { useContext } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { IoColorPalette } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa6'
import { FaPause } from 'react-icons/fa6'
import { FaStop } from 'react-icons/fa6'
import { ImCross } from 'react-icons/im'

import styles from './Styles/StopwatchCountBox.module.css'
import StopwatchCotext from './Context/StopwatchContext'

const StopwatchCoutBox = () => {
	const { modalInfo, handleServiceModalInfo } = useContext(StopwatchCotext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_header}>
				<h4 className={styles.state_info}> STAN</h4>
				<div className={styles.box_icons}>
					<button className={styles.btn_icon} onClick={handleServiceModalInfo}>
						<AiFillInfoCircle className={styles.icon_info} />
					</button>
					<button className={styles.btn_icon}>
						<IoColorPalette className={styles.icon_info} />
					</button>
				</div>
			</div>
			<div className={modalInfo ? styles.box_modal_info : styles.no_box_modal_info}>
				<h3 className={styles.heading_info}>Instrukcja:</h3>
				<div className={styles.box_text_info}>
					<p className={styles.text_info}>
						<FaPlay /> <span className={styles.span_info}> - start</span>
					</p>
					<p className={styles.text_info}>
						<FaPause /> <span className={styles.span_info}> - pauza</span>
					</p>
					<p className={styles.text_info}>
						<FaStop /> <span className={styles.span_info}> - stop</span>
					</p>
					<p className={styles.text_info}>
						<ImCross /> <span className={styles.span_info}> - skasuj wszystko</span>
					</p>
				</div>
				<button className={styles.btn_close_modal_info} onClick={handleServiceModalInfo}>
					zamknij
				</button>
			</div>
			<div className={styles.box_modal_change_color}>
				<button className={styles.btn_change_color}></button>
				<button className={styles.btn_change_color}></button>
				<button className={styles.btn_change_color}></button>
			</div>
			<div className={styles.box_count}>
				<span className={styles.count}>0:00</span>
				{/* <span className={styles.count}>0:00</span> */}
				<div className={styles.box_control}>
					<button className={styles.btn_control}>
						<FaPlay />
					</button>
					<button className={styles.btn_control}>
						<FaPause />
					</button>
					<button className={styles.btn_control}>
						<FaStop />
					</button>
					<button className={styles.btn_control}>
						<ImCross />
					</button>
				</div>
			</div>
			<div className={styles.box_archives}>
				<button className={styles.btn_archives}>archiwum</button>
			</div>
		</section>
	)
}

export default StopwatchCoutBox

import React, { useContext } from 'react'

import styles from './Home.module.css'
import HomeContext from './Context/HomeContext'

const HomeContent = () => {
	const { textPL, textEN, isActivePL, isActiveEN, addedText } = useContext(HomeContext)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_btns}>
				<button className={styles.btn_pl} onClick={() => addedText(textPL)}>
					Polski
				</button>
				<button className={styles.btn_en} onClick={() => addedText(textEN)}>
					English
				</button>
			</div>
			<div className={styles.box_content}>
				<p className={styles.text}>{isActivePL ? textPL : isActiveEN ? textEN : textPL}</p>
			</div>
		</section>
	)
}

export default HomeContent

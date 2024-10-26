import React, { useContext } from 'react'

import styles from './Styles/StopwatchList.module.css'
import StopwatchContext from './Context/StopwatchContext'

const StopwatchList = () => {
	const { gamerListView, viewListGamers } = useContext(StopwatchContext)

	let listGamer

	if (viewListGamers) {
		listGamer = gamerListView.map(item => (
			<li className={styles.gamer} key={item.id}>
				<p className={styles.gamer_time}>
					<span className={styles.name}>{item.name}</span>
					<span className={styles.times}>
						<span className={styles.time}>{item.minutes}</span>
						<span className={styles.time}> :</span>
						<span className={styles.time}> {item.seconds}</span>
						<span className={styles.time}> :</span>
						<span className={styles.time}> {item.milliseconds}</span>
					</span>
				</p>
			</li>
		))
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_info}>
				<span className={styles.info}>Nazwa Gracza</span>
				<span className={styles.info}>Czas</span>
			</div>
			<div className={styles.box_gamers}>
				<ol className={styles.gamers_list}>{listGamer}</ol>
			</div>
		</section>
	)
}

export default StopwatchList

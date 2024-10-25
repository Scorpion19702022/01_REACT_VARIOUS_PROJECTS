import React, { useContext } from 'react'

import styles from './Styles/StopwatchList.module.css'
import StopwatchContext from './Context/StopwatchContext'

const StopwatchList = () => {
	const { gamerListView, viewListGamers } = useContext(StopwatchContext)

	let listGamer

	if (viewListGamers) {
		listGamer = gamerListView.map(item => (
			<li key={item.id}>
				<p>
					{item.name} - {item.minutes}:{item.seconds}:{item.milliseconds}
				</p>
			</li>
		))
	}

	return (
		<section className={styles.wrapper}>
			<ol>{listGamer}</ol>
		</section>
	)
}

export default StopwatchList

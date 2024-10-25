import React, { useContext } from 'react'

import styles from './Styles/StopwatchList.module.css'
import StopwatchContext from './Context/StopwatchContext'

const StopwatchList = () => {
	const { gamersList, viewListGamers } = useContext(StopwatchContext)

	let listGamer

	if (viewListGamers) {
		listGamer = gamersList.map(item => (
			<ol key={item.id}>
				<li>
					{item.name} - {item.minutes}:{item.seconds}:{item.milliseconds}
				</li>
			</ol>
		))
	}

	return <section className={styles.wrapper}>{listGamer}</section>
}

export default StopwatchList

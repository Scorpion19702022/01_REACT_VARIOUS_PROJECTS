import React from 'react'

import styles from './Style/ToDoResults.module.css'
import ToDoTask from './ToDoTask'
import DoneTask from './DoneTask'

const ToDoResults = () => {
	return (
		<section className={styles.wrapper}>
			<ToDoTask />
			<DoneTask />
		</section>
	)
}

export default ToDoResults

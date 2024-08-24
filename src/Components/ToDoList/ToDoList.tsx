import React from 'react'

import styles from './Style/ToDoList.module.css'
import InputsToDoList from './InputsToDoList'

const ToDoList = () => {
	return (
		<main className={styles.wrapper}>
			<InputsToDoList />
		</main>
	)
}

export default ToDoList

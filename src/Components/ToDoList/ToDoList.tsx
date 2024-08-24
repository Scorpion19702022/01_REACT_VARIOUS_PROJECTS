import React from 'react'

import styles from './Style/ToDoList.module.css'
import InputsToDoList from './InputsToDoList'
import { ToDoProvider } from './Context/ToDoContext'

const ToDoList = () => {
	return (
		<main className={styles.wrapper}>
			<ToDoProvider>
				<InputsToDoList />
			</ToDoProvider>
		</main>
	)
}

export default ToDoList

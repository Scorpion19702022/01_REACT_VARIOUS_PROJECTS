import React, { useContext } from 'react'

import styles from './Style/DoneTask.module.css'
import ToDoContext from './Context/ToDoContext'

const DoneTask = () => {
	const { done } = useContext(ToDoContext)

	const doneTask = done.map(item => (
		<div key={item.id}>
			<span>{item.title}</span>
			<button>usuń</button>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_content}>
				<h2 className={styles.heading}>Lista zadań zrobionych</h2>
				<div className={styles.box_info}>
					<span className={styles.info}>Informacja:</span>
				</div>
				<div className={styles.box_done}>{doneTask}</div>
			</div>
			<button className={styles.main_btn}>Usuń wszystko</button>
		</section>
	)
}

export default DoneTask

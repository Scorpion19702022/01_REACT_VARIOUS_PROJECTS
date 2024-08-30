import React, { useContext } from 'react'

import styles from './Style/DoneTask.module.css'
import ToDoContext from './Context/ToDoContext'

const DoneTask = () => {
	const { done } = useContext(ToDoContext)

	const dataDoneHour = new Date().toLocaleTimeString().slice(0, 5)

	const date = new Date()
	const dayName = date.toLocaleDateString('pl-PL', { weekday: 'long' })

	const doneTask = done.map(item => (
		<div key={item.id}>
			<span className={styles.done_title}>{item.title}</span>
			<span className={styles.done_time}>
				{dayName}, {dataDoneHour}
			</span>
			<button className={styles.btn_done}>usuń</button>
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

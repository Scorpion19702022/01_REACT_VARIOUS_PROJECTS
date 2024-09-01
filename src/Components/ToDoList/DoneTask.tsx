import React, { useContext } from 'react'

import styles from './Style/DoneTask.module.css'
import ToDoContext from './Context/ToDoContext'

const DoneTask = () => {
	const { done, handleDeleteTaskDone, handleDeleteAllTaskDone } = useContext(ToDoContext)

	const dataDoneHour = new Date().toLocaleTimeString().slice(0, 5)

	const date = new Date()
	const dayName = date.toLocaleDateString('pl-PL', { weekday: 'long' })

	const doneTask = done.map(item => (
		<div className={styles.done_task} key={item.id}>
			<span className={styles.done_title}>{item.title}</span>
			<span className={styles.done_time}>
				{dayName}, {dataDoneHour}
			</span>
			<button className={styles.btn_done} onClick={() => handleDeleteTaskDone(item.id)}>
				usuń
			</button>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_content}>
				<h2 className={styles.heading}>Lista zadań zrobionych</h2>
				<div className={styles.box_nav}>
					<span className={styles.nav}>ZADANIE</span>
					<span className={styles.nav}>TERMIN</span>
					<span className={styles.nav}>ZADZIAŁAJ</span>
				</div>
				<div className={styles.box_done}>{doneTask}</div>
			</div>
			<button className={styles.main_btn} onClick={handleDeleteAllTaskDone}>
				Usuń wszystko
			</button>
		</section>
	)
}

export default DoneTask

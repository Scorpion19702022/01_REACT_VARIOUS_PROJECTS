import React, { useContext } from 'react'

import styles from './Style/DoneTask.module.css'
import ToDoContext from './Context/ToDoContext'

const DoneTask = () => {
	const {
		done,
		sureDelete,
		sureDeleteAllDone,
		handleDeleteTaskDone,
		handleDeleteAllTaskDone,
		handleSureDelete,
		handleSureDeleteAllDone,
	} = useContext(ToDoContext)

	const doneTask = done.map(item => (
		<div className={styles.done_task} key={item.id}>
			<span className={styles.done_title}>{item.title}</span>
			<span className={styles.done_time}>
				{item.doneHour}, {item.doneDay}
			</span>
			<button className={styles.btn_done} onClick={() => handleSureDelete(item.id)}>
				usuń
			</button>
			<div className={!sureDelete[item.id] ? styles.no_popup : styles.popup}>
				<h4 className={styles.popup_heading}>Jesteś pewna/pewien, że chcesz usunąć zrobione zadanie?</h4>
				<div className={styles.box_btn_popup}>
					<button className={styles.btn_popup} onClick={() => handleDeleteTaskDone(item.id)}>
						Tak
					</button>
					<button className={styles.btn_popup} onClick={() => handleSureDelete(item.id)}>
						Nie
					</button>
				</div>
			</div>
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
			<button className={styles.main_btn} onClick={handleSureDeleteAllDone}>
				Usuń wszystko
			</button>
			<div className={!sureDeleteAllDone ? styles.no_popup : styles.popup}>
				<h4 className={styles.popup_heading}>Jesteś pewna/pewien, że chcesz usuąć wszystkie zrobione zadania?</h4>
				<div className={styles.box_btn_popup}>
					<button className={styles.btn_popup} onClick={handleDeleteAllTaskDone}>
						Tak
					</button>
					<button className={styles.btn_popup} onClick={handleSureDeleteAllDone}>
						Nie
					</button>
				</div>
			</div>
		</section>
	)
}

export default DoneTask

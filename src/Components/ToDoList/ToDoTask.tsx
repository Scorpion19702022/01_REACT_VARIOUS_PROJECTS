import React, { useContext } from 'react'

import styles from './Style/ToDoTask.module.css'
import ToDoContext from './Context/ToDoContext'

const ToDoTask = () => {
	const { toDo, infoToDo, infoMaxToDoList, handleDeleteAllTasks, handleDeleteTask, handleDoneTask } =
		useContext(ToDoContext)

	const taskToDo = toDo.map(item => (
		<div className={styles.box_task} key={item.id}>
			<h5 className={item.important ? styles.title_task_important : styles.title_task_no_important}>{item.title}</h5>
			<span className={item.important ? styles.date_important : styles.date_no_important}>{item.addDate}</span>
			<div className={styles.btns_task}>
				<button className={styles.btn_task} onClick={() => handleDeleteTask(item.id, item.title)}>
					Usuń
				</button>
				<button className={styles.btn_task} onClick={() => handleDoneTask(item.id, item.title)}>
					Zrobione
				</button>
			</div>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_content}>
				<h2 className={styles.heading}>Lista zadań do zrobienia</h2>
				<div className={styles.box_info}>
					<span className={styles.info}>
						Informacja:{' '}
						<span className={toDo.length < 10 ? styles.info_is_well : styles.info_too_many}>
							{toDo.length >= 10 ? infoMaxToDoList : infoToDo}
						</span>
					</span>
				</div>
				<div className={styles.box_select_btns}>
					<button className={styles.select_btn}>wszystkie</button>
					<button className={styles.select_btn}>ważne</button>
					<button className={styles.select_btn}>inne</button>
				</div>
				<div className={styles.box_todo}>{taskToDo}</div>
			</div>
			<button className={styles.main_btn} onClick={handleDeleteAllTasks}>
				Usuń wszystko
			</button>
		</section>
	)
}

export default ToDoTask

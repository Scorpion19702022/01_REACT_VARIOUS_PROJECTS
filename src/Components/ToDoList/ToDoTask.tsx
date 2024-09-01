import React, { useContext } from 'react'

import styles from './Style/ToDoTask.module.css'
import ToDoContext from './Context/ToDoContext'

const ToDoTask = () => {
	const {
		toDo,
		infoToDo,
		infoMaxToDoList,
		sureDelete,
		sureDone,
		sureDeleteAll,
		select,
		selectImportant,
		selectLessImportant,
		selectAll,
		handleSelectTask,
		handleSureDelete,
		handleSureDone,
		handleSureDeleteAll,
		handleDeleteAllTasks,
		handleDeleteTask,
		handleDoneTask,
	} = useContext(ToDoContext)

	const taskToDoAll = toDo.map(item => (
		<div className={styles.box_task} key={item.id}>
			<h5 className={item.important ? styles.title_task_important : styles.title_task_no_important}>{item.title}</h5>
			<span className={item.important ? styles.date_important : styles.date_no_important}>{item.addDate}</span>
			<div className={styles.btns_task}>
				<button className={styles.btn_task} onClick={() => handleSureDelete(item.id)}>
					Usuń
				</button>
				<button className={styles.btn_task} onClick={() => handleSureDone(item.id)}>
					Zrobione
				</button>
			</div>
			<div className={!sureDelete[item.id] ? styles.no_popup : styles.popup}>
				<h4 className={styles.popup_heading}>Jesteś pewna/pewien, że chcesz usunąć zadanie?</h4>
				<div className={styles.box_btn_popup}>
					<button className={styles.btn_popup} onClick={() => handleDeleteTask(item.id, item.title)}>
						Tak
					</button>
					<button className={styles.btn_popup} onClick={() => handleSureDelete(item.id)}>
						Nie
					</button>
				</div>
			</div>
			<div className={!sureDone[item.id] ? styles.no_popup : styles.popup}>
				<h4 className={styles.popup_heading}>Jesteś pewna/pewien, że zadanie zostało wykonane?</h4>
				<div className={styles.box_btn_popup}>
					<button className={styles.btn_popup} onClick={() => handleDoneTask(item.id, item.title)}>
						Tak
					</button>
					<button className={styles.btn_popup} onClick={() => handleSureDone(item.id)}>
						Nie
					</button>
				</div>
			</div>
		</div>
	))

	const taskToDoImportant = toDo
		.filter(item => item.important)
		.map(item => (
			<div className={styles.box_task} key={item.id}>
				<h5 className={item.important ? styles.title_task_important : styles.title_task_no_important}>{item.title}</h5>
				<span className={item.important ? styles.date_important : styles.date_no_important}>{item.addDate}</span>
				<div className={styles.btns_task}>
					<button className={styles.btn_task} onClick={() => handleSureDelete(item.id)}>
						Usuń
					</button>
					<button className={styles.btn_task} onClick={() => handleSureDone(item.id)}>
						Zrobione
					</button>
				</div>
				<div className={!sureDelete[item.id] ? styles.no_popup : styles.popup}>
					<h4 className={styles.popup_heading}>Jesteś pewna/pewien, że chcesz usunąć zadanie?</h4>
					<div className={styles.box_btn_popup}>
						<button className={styles.btn_popup} onClick={() => handleDeleteTask(item.id, item.title)}>
							Tak
						</button>
						<button className={styles.btn_popup} onClick={() => handleSureDelete(item.id)}>
							Nie
						</button>
					</div>
				</div>
				<div className={!sureDone[item.id] ? styles.no_popup : styles.popup}>
					<h4 className={styles.popup_heading}>Jesteś pewna/pewien, że zadanie zostało wykonane?</h4>
					<div className={styles.box_btn_popup}>
						<button className={styles.btn_popup} onClick={() => handleDoneTask(item.id, item.title)}>
							Tak
						</button>
						<button className={styles.btn_popup} onClick={() => handleSureDone(item.id)}>
							Nie
						</button>
					</div>
				</div>
			</div>
		))

	const taskToDoLessImportant = toDo
		.filter(item => !item.important)
		.map(item => (
			<div className={styles.box_task} key={item.id}>
				<h5 className={item.important ? styles.title_task_important : styles.title_task_no_important}>{item.title}</h5>
				<span className={item.important ? styles.date_important : styles.date_no_important}>{item.addDate}</span>
				<div className={styles.btns_task}>
					<button className={styles.btn_task} onClick={() => handleSureDelete(item.id)}>
						Usuń
					</button>
					<button className={styles.btn_task} onClick={() => handleSureDone(item.id)}>
						Zrobione
					</button>
				</div>
				<div className={!sureDelete[item.id] ? styles.no_popup : styles.popup}>
					<h4 className={styles.popup_heading}>Jesteś pewna/pewien, że chcesz usunąć zadanie?</h4>
					<div className={styles.box_btn_popup}>
						<button className={styles.btn_popup} onClick={() => handleDeleteTask(item.id, item.title)}>
							Tak
						</button>
						<button className={styles.btn_popup} onClick={() => handleSureDelete(item.id)}>
							Nie
						</button>
					</div>
				</div>
				<div className={!sureDone[item.id] ? styles.no_popup : styles.popup}>
					<h4 className={styles.popup_heading}>Jesteś pewna/pewien, że zadanie zostało wykonane?</h4>
					<div className={styles.box_btn_popup}>
						<button className={styles.btn_popup} onClick={() => handleDoneTask(item.id, item.title)}>
							Tak
						</button>
						<button className={styles.btn_popup} onClick={() => handleSureDone(item.id)}>
							Nie
						</button>
					</div>
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
					<button
						className={selectAll ? styles.active_select_btn : styles.select_btn}
						onClick={() => handleSelectTask('all')}
					>
						wszystkie
					</button>
					<button
						className={selectImportant ? styles.active_select_btn : styles.select_btn}
						onClick={() => handleSelectTask('important')}
					>
						ważne
					</button>
					<button
						className={selectLessImportant ? styles.active_select_btn : styles.select_btn}
						onClick={() => handleSelectTask('lessImportant')}
					>
						inne
					</button>
				</div>
				<div className={styles.box_nav}>
					<span className={styles.nav}>ZADANIE</span>
					<span className={styles.nav}>TERMIN</span>
					<span className={styles.nav}>ZADZIAŁAJ</span>
				</div>
				<div className={styles.box_todo}>
					{select === 'all'
						? taskToDoAll
						: select === 'important'
						? taskToDoImportant
						: select === 'lessImportant'
						? taskToDoLessImportant
						: null}
				</div>
			</div>
			<button className={styles.main_btn} onClick={handleSureDeleteAll}>
				Usuń wszystko
			</button>
			<div className={!sureDeleteAll ? styles.no_popup : styles.popup}>
				<h4 className={styles.popup_heading}>Jesteś pewna/pewien, że chcesz usuąć wszystkie zadania?</h4>
				<div className={styles.box_btn_popup}>
					<button className={styles.btn_popup} onClick={handleDeleteAllTasks}>
						Tak
					</button>
					<button className={styles.btn_popup} onClick={handleSureDeleteAll}>
						Nie
					</button>
				</div>
			</div>
		</section>
	)
}

export default ToDoTask

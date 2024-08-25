import React from 'react'

import styles from './Style/ToDoTask.module.css'

const ToDoTask = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Lista zadań do zrobienia</h2>
			<div className={styles.box_info}>
				<span className={styles.info}>Informacja</span>
			</div>
			<div className={styles.box_select_btns}>
				<button className={styles.select_btn}>wszystkie</button>
				<button className={styles.select_btn}>ważne</button>
				<button className={styles.select_btn}>inne</button>
			</div>
			<div className={styles.box_todo}>
				<p>pierwszy</p>
				<p>drugi</p>
				<p>trzeci</p>
			</div>
			<div className={styles.box_main_btns}>
				<button className={styles.main_btn}>Usuń wszystko</button>
			</div>
		</section>
	)
}

export default ToDoTask

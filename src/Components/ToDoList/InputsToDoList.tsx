import React from 'react'

import styles from './Style/InputsToDoList.module.css'

const InputsToDoList = () => {
	return (
		<section className={styles.wrapper_inputs}>
			<div className={styles.box_inputs}>
				<div className={styles.input_text}>
					<label className={styles.label}>Wpisz zadanie:</label>
					<input className={styles.input} type='text' />
					<span className={styles.quantity_signs}>Ilość znaków: 0</span>
					<span className={styles.quantity_errors}>error</span>
				</div>
				<div className={styles.input_important}>
					<label className={styles.label}>Ważość:</label>
					<input className={styles.checkbox} type='checkbox' />
				</div>
			</div>
			<div className={styles.box_info}>
				<div className={styles.quantity_toDo}>
					<h4 className={styles.quantity_heading}>Ilość zadań do wykoania:</h4>
					<span className={styles.quantity_result}>0</span>
				</div>
				<div className={styles.quantity_done}>
					<h4 className={styles.quantity_heading}>Ilość zadań wykonanych</h4>
					<span className={styles.quantity_result}>0</span>
				</div>
			</div>
		</section>
	)
}

export default InputsToDoList

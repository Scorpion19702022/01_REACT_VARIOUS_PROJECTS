import React, { useContext } from 'react'

import styles from './Style/InputsToDoList.module.css'

import ToDoImage from './assets/todo_image.png'
import ToDoContext from './Context/ToDoContext'

const InputsToDoList = () => {
	const { taskInput, handleChangeInput } = useContext(ToDoContext)

	return (
		<section className={styles.wrapper}>
			<h1 className={styles.heading}>ToDo List</h1>
			<img className={styles.todo_icon} src={ToDoImage} alt='to do icon' />
			<div className={styles.wrapper_inputs}>
				<div className={styles.box_inputs}>
					<div className={styles.inputs}>
						<label className={styles.label}>Wpisz zadanie:</label>
						<input
							className={styles.input}
							type='text'
							value={taskInput}
							onChange={e => handleChangeInput(e.target.value)}
						/>
						<div className={styles.quantity_inputs}>
							<span className={styles.quantity_signs}>Ilość znaków: 0</span>
							<span className={styles.quantity_errors}>Osiągąłeś maksymalną ilość znaków</span>
						</div>
					</div>
					<div className={styles.input_important}>
						<label className={styles.label}>Ważość:</label>
						<input className={styles.checkbox} type='checkbox' />
					</div>
					<button className={styles.btn_added_task}>Dodaj</button>
				</div>
				<div className={styles.box_info}>
					<h4 className={styles.quantity_heading}>
						Ilość zadań do wykoania: <span className={styles.quantity_result}>0</span>
					</h4>
					<h4 className={styles.quantity_heading}>
						Ilość zadań wykonanych: <span className={styles.quantity_result}>0</span>
					</h4>
				</div>
			</div>
		</section>
	)
}

export default InputsToDoList

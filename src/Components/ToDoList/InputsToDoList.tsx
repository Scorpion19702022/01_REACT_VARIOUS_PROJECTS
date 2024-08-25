import React, { useContext } from 'react'

import styles from './Style/InputsToDoList.module.css'

import ToDoImage from './assets/todo_image.png'
import ToDoContext from './Context/ToDoContext'

const InputsToDoList = () => {
	const { taskInput, quantitySign, priority, date, handleChangeInput, handleChangeCheckpoit, handleChangeDate } =
		useContext(ToDoContext)

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
							<span className={styles.quantity_signs}>Ilość znaków: {quantitySign}</span>
							<span className={styles.quantity_errors}>
								{quantitySign >= 10 ? 'Osiągąłeś maksymalną ilość znaków' : ''}
							</span>
						</div>
					</div>
					<div className={styles.input_important}>
						<label className={styles.label}>Priorytet:</label>
						<input className={styles.checkbox} checked={priority} type='checkbox' onChange={handleChangeCheckpoit} />
					</div>
					<div className={styles.inputs_date}>
						<label className={styles.label}>Data dodania:</label>
						<input className={styles.input_date} type='date' value={date} min={date} onChange={handleChangeDate} />
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

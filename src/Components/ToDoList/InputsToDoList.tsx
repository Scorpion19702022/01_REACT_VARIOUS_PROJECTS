import React, { useContext } from 'react'

import styles from './Style/InputsToDoList.module.css'

import ToDoImage from './assets/todo_image.png'
import ToDoContext from './Context/ToDoContext'

const InputsToDoList = () => {
	const {
		toDo,
		done,
		taskInput,
		quantitySign,
		inputErrors,
		priority,
		date,
		handleChangeInput,
		handleChangeCheckpoit,
		handleChangeDate,
		handleAddTask,
		handleKeyDown,
	} = useContext(ToDoContext)

	return (
		<section className={styles.wrapper} onKeyDown={handleKeyDown}>
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
							<span className={styles.quantity_errors}>{inputErrors}</span>
						</div>
					</div>
					<div className={styles.input_important}>
						<label className={styles.label}>Priorytet:</label>
						<input className={styles.checkbox} checked={priority} type='checkbox' onChange={handleChangeCheckpoit} />
					</div>
					<div className={styles.inputs_date}>
						<label className={styles.label}>Termin realizacji:</label>
						<input className={styles.input_date} type='date' value={date} min={date} onChange={handleChangeDate} />
					</div>
					<div className={styles.box_btn}>
						<button className={styles.btn_added_task} onClick={handleAddTask}>
							Dodaj
						</button>
					</div>
				</div>
				<div className={styles.box_info}>
					<h4 className={styles.quantity_heading}>
						Ilość zadań do wykoania: <span className={styles.quantity_result}>{toDo.length}</span>
					</h4>
					<h4 className={styles.quantity_heading}>
						Ilość zadań wykonanych: <span className={styles.quantity_result}>{done.length}</span>
					</h4>
				</div>
			</div>
		</section>
	)
}

export default InputsToDoList

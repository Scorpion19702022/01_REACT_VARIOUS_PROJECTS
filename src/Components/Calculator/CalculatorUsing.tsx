import React, { useContext } from 'react'
import CalculatorContext from './Context/CalculatorContext'
import styles from './Styles/CalculatorUsing.module.css'

const CalculatorUsing = () => {
	const { state, dispatch } = useContext(CalculatorContext)

	const renderPreviousOperand = () => {
		if (state.previousOperand === null || state.operation === null) return ''
		if (state.currentOperand === null) return `${state.previousOperand} ${state.operation}`
		return `${state.previousOperand} ${state.operation} ${state.currentOperand}`
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.main_box_calculator}>
				<div className={styles.box_calculator}>
					<div className={styles.output}>
						<span className={styles.previous_operand}>{renderPreviousOperand()}</span>
						<span className={styles.current_operand}>
							{state.currentOperand !== null ? state.currentOperand : state.previousOperand}
						</span>
					</div>
					<button className={styles.span_one} onClick={() => dispatch({ type: 'CLEAR' })}>
						AC
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'DELETE_DIGIT' })}>
						DEL
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: '÷' })}>
						÷
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '7' })}>
						7
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '8' })}>
						8
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '9' })}>
						9
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: '×' })}>
						×
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '4' })}>
						4
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '5' })}>
						5
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '6' })}>
						6
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: '+' })}>
						+
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '1' })}>
						1
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '2' })}>
						2
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '3' })}>
						3
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'CHOOSE_OPERATION', payload: '-' })}>
						-
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '.' })}>
						.
					</button>
					<button className={styles.btn} onClick={() => dispatch({ type: 'ADD_DIGIT', payload: '0' })}>
						0
					</button>
					<button className={styles.span_two} onClick={() => dispatch({ type: 'EVALUATE' })}>
						=
					</button>
				</div>
			</div>
		</section>
	)
}

export default CalculatorUsing

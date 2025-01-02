import React, { useContext } from 'react'
import CalculatorContext from './Context/CalculatorContext'
import styles from './Styles/CalculatorUsing.module.css'

const CalculatorUsing = () => {
	const { state, dispatch } = useContext(CalculatorContext)

	const handleDigit = (digit: string) => {
		dispatch({ type: 'ADD_DIGIT', payload: digit })
	}

	const handleOperation = (operation: string) => {
		dispatch({ type: 'CHOOSE_OPERATION', payload: operation })
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_calculator}>
				<div className={styles.output}>
					<span className={styles.previous_operand}>
						{state.previousOperand} {state.operation}
					</span>
					<span className={styles.current_operand}>{state.currentOperand}</span>
				</div>
				<button className={styles.span_one} onClick={() => dispatch({ type: 'CLEAR' })}>
					AC
				</button>
				<button className={styles.btn} onClick={() => dispatch({ type: 'DELETE_DIGIT' })}>
					DEL
				</button>
				<button className={styles.btn} onClick={() => handleOperation('÷')}>
					÷
				</button>
				{['7', '8', '9', '×', '4', '5', '6', '+', '1', '2', '3', '˗', '.', '0'].map(btn => (
					<button
						key={btn}
						className={styles.btn}
						onClick={() => (isNaN(Number(btn)) ? handleOperation(btn) : handleDigit(btn))}
					>
						{btn}
					</button>
				))}
				<button className={styles.span_two} onClick={() => dispatch({ type: 'EVALUATE' })}>
					=
				</button>
			</div>
		</section>
	)
}

export default CalculatorUsing

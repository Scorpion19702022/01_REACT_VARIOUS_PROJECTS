import React from 'react'

import styles from './Styles/CalculatorUsing.module.css'

const CalculatorUsing = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_calculator}>
				<div className={styles.output}>
					<div className={styles.previous_operand}></div>
					<div className={styles.current_operand}></div>
				</div>
				<button className={styles.span_two}>AC</button>
				<button className={styles.span_two}>DEL</button>
				<button className={styles.span_two}>÷</button>
				<button className={styles.span_two}>1</button>
				<button className={styles.span_two}>2</button>
				<button className={styles.span_two}>3</button>
				<button className={styles.span_two}>×</button>
				<button className={styles.span_two}>4</button>
				<button className={styles.span_two}>5</button>
				<button className={styles.span_two}>6</button>
				<button className={styles.span_two}>+</button>
				<button className={styles.span_two}>7</button>
				<button className={styles.span_two}>8</button>
				<button className={styles.span_two}>9</button>
				<button className={styles.span_two}>˗</button>
				<button className={styles.span_two}>.</button>
				<button className={styles.span_two}>0</button>
				<button className={styles.span_two}>=</button>
			</div>
		</section>
	)
}

export default CalculatorUsing

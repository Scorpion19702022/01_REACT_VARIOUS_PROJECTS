import React from 'react'

import styles from './Styles/CalculatorUsing.module.css'

const CalculatorUsing = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_calculator}>
				<div className={styles.output}>
					<span className={styles.previous_operand}>number</span>
					<span className={styles.current_operand}>number</span>
				</div>
				<button className={styles.span_one}>AC</button>
				<button className={styles.btn}>DEL</button>
				<button className={styles.btn}>÷</button>
				<button className={styles.btn}>1</button>
				<button className={styles.btn}>2</button>
				<button className={styles.btn}>3</button>
				<button className={styles.btn}>×</button>
				<button className={styles.btn}>4</button>
				<button className={styles.btn}>5</button>
				<button className={styles.btn}>6</button>
				<button className={styles.btn}>+</button>
				<button className={styles.btn}>7</button>
				<button className={styles.btn}>8</button>
				<button className={styles.btn}>9</button>
				<button className={styles.btn}>˗</button>
				<button className={styles.btn}>.</button>
				<button className={styles.btn}>0</button>
				<button className={styles.span_two}>=</button>
			</div>
		</section>
	)
}

export default CalculatorUsing

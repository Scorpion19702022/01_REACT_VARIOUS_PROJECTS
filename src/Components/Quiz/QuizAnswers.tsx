import React, { useState } from 'react'

import styles from './Styles/QuizAnswers.module.css'

const QuizAnswers = () => {
	const [pro, setPro] = useState(20)

	const handleProgress = () => {
		setPro(pro + 10)
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_progress}>
				<progress className={styles.progress} max='100' value={pro}></progress>
			</div>
			<button onClick={handleProgress}>PROGRESS</button>
		</section>
	)
}

export default QuizAnswers

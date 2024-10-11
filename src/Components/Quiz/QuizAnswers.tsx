import React, { useState } from 'react'

import styles from './Styles/QuizAnswers.module.css'

const QuizAnswers = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_progress}>
				<progress className={styles.progress} max='100' value={10}></progress>
			</div>
		</section>
	)
}

export default QuizAnswers

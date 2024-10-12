import React, { useContext } from 'react'

import styles from './Styles/QuizAnswers.module.css'
import QuizContext from './Context/QuizContext'

const QuizAnswers = () => {
	const { quizList, changeID, handleChangeQuiz } = useContext(QuizContext)

	const answer = quizList[changeID]

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_progress}>
				<progress className={styles.progress} max='100' value={10}></progress>
			</div>
			<div>
				<h1>{answer.question}</h1>
			</div>
			<button onClick={handleChangeQuiz}>zmień</button>
		</section>
	)
}

export default QuizAnswers

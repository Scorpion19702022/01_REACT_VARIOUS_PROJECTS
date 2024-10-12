import React, { useContext } from 'react'

import styles from './Styles/QuizAnswers.module.css'
import QuizContext from './Context/QuizContext'

const QuizAnswers = () => {
	const { progress, quizList, changeID, handleChangeQuiz } = useContext(QuizContext)

	const answer = quizList[changeID]

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_progress}>
				<progress className={styles.progress} max='100' value={progress}></progress>
			</div>
			<div>
				<h1>{answer.question}</h1>
				<button onClick={handleChangeQuiz}>{answer.answers[0]}</button>
				<button onClick={handleChangeQuiz}>{answer.answers[1]}</button>
				<button onClick={handleChangeQuiz}>{answer.answers[2]}</button>
				<button onClick={handleChangeQuiz}>{answer.answers[3]}</button>
			</div>
		</section>
	)
}

export default QuizAnswers

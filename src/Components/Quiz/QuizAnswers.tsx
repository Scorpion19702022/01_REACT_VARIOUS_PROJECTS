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
			<div className={styles.box_quiz}>
				<div className={styles.box_question}>
					<h1 className={styles.heading_question}>{answer.question}</h1>
					<div className={styles.box_question_img}>
						<img className={styles.question_img} src={answer.img} alt='city_pictures' />
					</div>
				</div>
				<div className={styles.box_answers}>
					<ul className={styles.answers_list}>
						<li className={styles.answer}>
							<button className={styles.btn_answer} onClick={handleChangeQuiz}>
								{answer.answers[0]}
							</button>
						</li>
						<li className={styles.answer}>
							<button className={styles.btn_answer} onClick={handleChangeQuiz}>
								{answer.answers[1]}
							</button>
						</li>
						<li className={styles.answer}>
							<button className={styles.btn_answer} onClick={handleChangeQuiz}>
								{answer.answers[2]}
							</button>
						</li>
						<li className={styles.answer}>
							<button className={styles.btn_answer} onClick={handleChangeQuiz}>
								{answer.answers[3]}
							</button>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default QuizAnswers

import React, { useContext } from 'react'

import styles from './Styles/QuizAnswers.module.css'
import QuizContext from './Context/QuizContext'

const QuizAnswers = () => {
	const { progressHeading, progress, quizList, changeID, answerInfo, popupAnswerVisible, handleChangeQuiz } =
		useContext(QuizContext)

	const answer = quizList[changeID]

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_progress}>
				<h2 className={styles.progress_heading}>Pytanie {progressHeading}/10</h2>
				<progress className={styles.progress} max='100' value={progress}></progress>
			</div>
			<div className={styles.box_quiz}>
				<div className={popupAnswerVisible ? styles.box_popup : styles.no_box_popup}>
					<h2 className={styles.popup_info}>{answerInfo}</h2>
				</div>
				<div className={styles.box_question}>
					<div className={styles.box_heading_question}>
						<h1 className={styles.heading_question}>{answer.question}</h1>
					</div>
					<div className={styles.box_question_img}>
						<img className={styles.question_img} src={answer.img} alt='city_pictures' />
					</div>
				</div>
				<div className={styles.box_answers}>
					<ul className={styles.answers_list}>
						<li className={styles.answer}>
							<button className={styles.btn_answer} onClick={() => handleChangeQuiz(answer.answers[0])}>
								{answer.answers[0]}
							</button>
						</li>
						<li className={styles.answer}>
							<button className={styles.btn_answer} onClick={() => handleChangeQuiz(answer.answers[1])}>
								{answer.answers[1]}
							</button>
						</li>
						<li className={styles.answer}>
							<button className={styles.btn_answer} onClick={() => handleChangeQuiz(answer.answers[2])}>
								{answer.answers[2]}
							</button>
						</li>
						<li className={styles.answer}>
							<button className={styles.btn_answer} onClick={() => handleChangeQuiz(answer.answers[3])}>
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

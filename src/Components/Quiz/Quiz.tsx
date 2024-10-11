import React from 'react'

import styles from './Styles/Quiz.module.css'
import QuizHeader from './QuizHeader'
import QuizAnswers from './QuizAnswers'

const Quiz = () => {
	return (
		<main className={styles.wrapper}>
			<QuizHeader />
			<QuizAnswers />
		</main>
	)
}

export default Quiz

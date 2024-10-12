import React from 'react'

import styles from './Styles/Quiz.module.css'
import QuizHeader from './QuizHeader'
import QuizAnswers from './QuizAnswers'
import { QuizProvider } from './Context/QuizContext'

const Quiz = () => {
	return (
		<main className={styles.wrapper}>
			<QuizHeader />
			<QuizProvider>
				<QuizAnswers />
			</QuizProvider>
		</main>
	)
}

export default Quiz

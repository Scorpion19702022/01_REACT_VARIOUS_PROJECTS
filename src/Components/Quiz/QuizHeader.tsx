import React from 'react'

import styles from './Styles/QuizHeader.module.css'

import QuizLogo from './assets/quiz-logo.png'

const QuizHeader = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header_img}>
				<img className={styles.img} src={QuizLogo} alt='' />
			</div>
			<div className={styles.back}></div>
			<div className={styles.header_text}>
				<h1 className={styles.header}>Quiz</h1>
				<span className={styles.text}>znasz europejskie stolice?</span>
			</div>
		</section>
	)
}

export default QuizHeader

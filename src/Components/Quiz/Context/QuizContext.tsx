import React, { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import useQuiz from '../Hook/useQuiz'

type Question = {
	id: number
	question: string
	img: string
	answers: string[]
	goodAnswer: string
}

type InitialStateType = {
	progressHeading: number
	progress: number
	quizList: Question[]
	answerIsWell: string[]
	changeID: number
	handleChangeQuiz: (selectedAnswer: string) => void
}

type QuizTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	progressHeading: 1,
	progress: 10,
	quizList: [],
	answerIsWell: [],
	changeID: 0,
	handleChangeQuiz: (selectedAnswer: string) => {},
}

const QuizContext = createContext(InitialState)

export const QuizProvider = ({ children }: QuizTypeProvider) => {
	const { QuizListData } = useQuiz()

	const [progressHeading, setProgressHeadig] = useState<number>(1)
	const [progress, setProgress] = useState<number>(10)
	const [quizList, setQuizList] = useState<Question[]>(QuizListData)
	const [answerIsWell, setAnswerIsWell] = useState<string[]>([])
	const [changeID, setChangeID] = useState<number>(0)

	const handleChangeQuiz = (selectedAnswer: string) => {
		const goodAnswer = quizList[changeID].goodAnswer
		if (selectedAnswer === goodAnswer && changeID - 1) {
			setAnswerIsWell([...answerIsWell, selectedAnswer])
		} else {
		}

		if (changeID === quizList.length - 1) {
		}

		if (changeID < quizList.length - 1) {
			setChangeID(changeID + 1)
		}

		if (progress <= 100) {
			setProgress(progress + 10)
		}

		if (progressHeading < quizList.length) {
			setProgressHeadig(progressHeading + 1)
		}
	}
	console.log(answerIsWell)

	return (
		<QuizContext.Provider value={{ progressHeading, progress, quizList, answerIsWell, changeID, handleChangeQuiz }}>
			{children}
			<Analytics />
		</QuizContext.Provider>
	)
}

export default QuizContext

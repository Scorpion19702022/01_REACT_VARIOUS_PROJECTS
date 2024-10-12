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
	progress: number
	quizList: Question[]
	answerIsWell: string[]
	changeID: number
	handleChangeQuiz: () => void
}

type QuizTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	progress: 10,
	quizList: [],
	answerIsWell: [],
	changeID: 0,
	handleChangeQuiz: () => {},
}

const QuizContext = createContext(InitialState)

export const QuizProvider = ({ children }: QuizTypeProvider) => {
	const { QuizListData } = useQuiz()

	const [progress, setProgress] = useState<number>(0)
	const [quizList, setQuizList] = useState<Question[]>(QuizListData)
	const [answerIsWell, setAnswerIsWell] = useState<string[]>([])
	const [changeID, setChangeID] = useState<number>(0)

	const handleChangeQuiz = () => {
		if (changeID < 9) {
			setChangeID(changeID + 1)
		}

		if (progress <= 100) {
			setProgress(progress + 10)
		}
	}

	return (
		<QuizContext.Provider value={{ progress, quizList, answerIsWell, changeID, handleChangeQuiz }}>
			{children}
			<Analytics />
		</QuizContext.Provider>
	)
}

export default QuizContext

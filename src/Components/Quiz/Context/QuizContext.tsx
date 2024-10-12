import React, { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import useQuiz from '../Hook/useQuiz'

type Question = {
	id: number
	question: string
	img: string
	answers: { answerText: string; isCorrect: boolean }[]
}

type InitialStateType = {
	quizList: Question[]
}

type QuizTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	quizList: [],
}

const QuizContext = createContext(InitialState)

export const QuizProvider = ({ children }: QuizTypeProvider) => {
	const { QuizListData } = useQuiz()
	const [quizList, setQuizList] = useState<Question[]>(QuizListData)

	console.log(quizList)

	return (
		<QuizContext.Provider value={{ quizList }}>
			{children}
			<Analytics />
		</QuizContext.Provider>
	)
}

export default QuizProvider

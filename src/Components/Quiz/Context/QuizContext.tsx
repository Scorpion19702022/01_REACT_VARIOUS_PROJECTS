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
	quizList: Question[]
	changeID: number
	handleChangeQuiz: () => void
}

type QuizTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	quizList: [],
	changeID: 0,
	handleChangeQuiz: () => {},
}

const QuizContext = createContext(InitialState)

export const QuizProvider = ({ children }: QuizTypeProvider) => {
	const { QuizListData } = useQuiz()
	const [quizList, setQuizList] = useState<Question[]>(QuizListData)
	const [changeID, setChangeID] = useState<number>(0)

	const handleChangeQuiz = () => {
		if (changeID < 9) {
			setChangeID(changeID + 1)
		}
	}

	return (
		<QuizContext.Provider value={{ quizList, changeID, handleChangeQuiz }}>
			{children}
			<Analytics />
		</QuizContext.Provider>
	)
}

export default QuizContext

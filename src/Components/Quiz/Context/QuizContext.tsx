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
	answerInfo: string
	popupAnswerVisible: boolean
	quizFinished: boolean
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
	answerInfo: '',
	popupAnswerVisible: false,
	quizFinished: false,
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
	const [answerInfo, setAnswerInfo] = useState<string>('')
	const [popupAnswerVisible, setPopupAnswerVisible] = useState<boolean>(false)
	const [quizFinished, setQuizFinished] = useState<boolean>(false)

	const handleChangeQuiz = (selectedAnswer: string) => {
		if (quizFinished) return

		const goodAnswer = quizList[changeID].goodAnswer

		if (changeID < quizList.length - 1) {
			if (selectedAnswer === goodAnswer) {
				setAnswerIsWell([...answerIsWell, selectedAnswer])
				setAnswerInfo('Dobrze!!!')
			} else {
				setAnswerInfo('Źle!!!')
			}

			setPopupAnswerVisible(true)

			setTimeout(() => {
				setPopupAnswerVisible(false)
				setAnswerInfo('')
				setChangeID(prevID => prevID + 1)
				setProgress(prevProgress => prevProgress + 10)
				setProgressHeadig(prevHeading => prevHeading + 1)
			}, 1000)
		} else if (changeID === quizList.length - 1) {
			if (selectedAnswer === goodAnswer) {
				setAnswerIsWell([...answerIsWell, selectedAnswer])
				setAnswerInfo('Dobrze!!!')
			} else {
				setAnswerInfo('Źle!!!')
			}

			setPopupAnswerVisible(true)

			setTimeout(() => {
				setPopupAnswerVisible(false)
				setAnswerInfo('')
				setQuizFinished(true)
				setProgress(100)
			}, 1000)
		}
	}

	console.log(quizList.length)
	console.log(answerIsWell)

	return (
		<QuizContext.Provider
			value={{
				progressHeading,
				progress,
				quizList,
				answerIsWell,
				changeID,
				answerInfo,
				popupAnswerVisible,
				quizFinished,
				handleChangeQuiz,
			}}
		>
			{children}
			<Analytics />
		</QuizContext.Provider>
	)
}

export default QuizContext

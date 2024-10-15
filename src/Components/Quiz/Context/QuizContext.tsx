import React, { createContext, useEffect, useState } from 'react'
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
	resultsInfo: string
	handleChangeQuiz: (selectedAnswer: string) => void
	handleRestartQuiz: () => void
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
	resultsInfo: '',
	handleChangeQuiz: (selectedAnswer: string) => {},
	handleRestartQuiz: () => {},
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
	const [resultsInfo, setResultsInfo] = useState<string>('')

	useEffect(() => {
		if (answerIsWell.length === 10) {
			setResultsInfo('ZNAKOMICIE!!! Chyba często odwiedzasz stolice europejskie')
		} else if (answerIsWell.length < 10 && answerIsWell.length >= 9) {
			setResultsInfo('Trochę zabrakło, ale to świetny wynik')
		} else if (answerIsWell.length <= 8 && answerIsWell.length > 7) {
			setResultsInfo('Prawie podium, dobra robota')
		} else if (answerIsWell.length <= 7 && answerIsWell.length >= 5) {
			setResultsInfo('Oj. Może trzeba się wybrać na wycieczkę po Europie?')
		} else if (answerIsWell.length < 5 && answerIsWell.length > 2) {
			setResultsInfo('Kiepsko. Te pytania były przecież łatwe')
		} else if (answerIsWell.length <= 2) {
			setResultsInfo('FATALNIE!!! Spróbuj jeszcze raz bo to niemożliwe')
		}
	}, [answerIsWell.length])

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

	const handleRestartQuiz = () => {
		setProgressHeadig(1)
		setProgress(10)
		setAnswerIsWell([])
		setChangeID(0)
		setQuizFinished(false)
		setResultsInfo('')
	}

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
				resultsInfo,
				handleChangeQuiz,
				handleRestartQuiz,
			}}
		>
			{children}
			<Analytics />
		</QuizContext.Provider>
	)
}

export default QuizContext

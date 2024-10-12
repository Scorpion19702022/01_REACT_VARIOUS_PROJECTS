import React, { createContext } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {}

type QuizTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const QuizContext = createContext(InitialState)

export const QuizProvider = ({ children }: QuizTypeProvider) => {
	return (
		<QuizContext.Provider value={{}}>
			{children}
			<Analytics />
		</QuizContext.Provider>
	)
}

export default QuizProvider

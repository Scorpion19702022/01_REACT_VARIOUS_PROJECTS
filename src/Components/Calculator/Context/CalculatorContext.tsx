import { createContext, useReducer, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Action, CalculatorState } from '../Types/TypeForCalculator'
import { reducer } from '../Reducer'

type InitialStateType = {
	content: string
}

const InitialState: InitialStateType = {
	content: '',
}

type CalculatorProviderType = {
	children: React.ReactNode
}

type CalculatorContextType = {
	content: string
	dispatch: React.Dispatch<Action>
}

const initialCalculatorState: CalculatorState = {
	currentOperand: null,
	previousOperand: null,
	operation: null,
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined)

export const CalculatorProvider = ({ children }: CalculatorProviderType) => {
	const [state, dispatch] = useReducer(reducer, initialCalculatorState)
	const [content, setContent] = useState<string>('')

	return (
		<CalculatorContext.Provider value={{ content, dispatch }}>
			{children} <Analytics />
		</CalculatorContext.Provider>
	)
}

export default CalculatorContext

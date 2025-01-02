import { createContext, useReducer } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Action, CalculatorState } from '../Types/TypeForCalculator'

type CalculatorProviderType = {
	children: React.ReactNode
}

type InitialTypeState = {
	content: number
	currentOperand: null
	previousOperand: null
	operation: null
}

const InitialState: InitialTypeState = {
	content: 0,
	currentOperand: null,
	previousOperand: null,
	operation: null,
}

const CalculatorContext = createContext<{
	state: InitialTypeState
	dispatch: React.Dispatch<Action>
}>({
	state: InitialState,
	dispatch: () => {},
})

export const reducer = (state: CalculatorState, action: Action): CalculatorState => {
	switch (action.type) {
		case 'ADD_DIGIT':
			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${action.payload}`,
			}
		case 'CHOOSE_OPERATION':
			return {
				...state,
				previousOperand: state.currentOperand,
				operation: action.payload,
				currentOperand: null,
			}
		case 'CLEAR':
			return {
				content: 0,
				currentOperand: null,
				previousOperand: null,
				operation: null,
			}
		case 'DELETE_DIGIT':
			return {
				...state,
				currentOperand: state.currentOperand?.slice(0, -1) || null,
			}
		case 'EVALUATE':
			return {
				...state,
				currentOperand: 'Result',
				previousOperand: null,
				operation: null,
			}
		default:
			return state
	}
}

export const CalculatorProvider = ({ children }: CalculatorProviderType) => {
	const [state, dispatch] = useReducer(reducer, InitialState)

	return (
		<CalculatorContext.Provider value={{ state, dispatch }}>
			{children} <Analytics />
		</CalculatorContext.Provider>
	)
}

export default CalculatorContext

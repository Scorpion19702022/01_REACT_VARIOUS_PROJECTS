import { createContext, useReducer } from 'react'
import { Action, CalculatorState } from '../Types/TypeForCalculator'

type CalculatorProviderType = {
	children: React.ReactNode
}

const InitialState: CalculatorState = {
	content: 0,
	currentOperand: null,
	previousOperand: null,
	operation: null,
}

const CalculatorContext = createContext<{
	state: CalculatorState
	dispatch: React.Dispatch<Action>
}>({
	state: InitialState,
	dispatch: () => {},
})

const evaluate = (state: CalculatorState): string => {
	const prev = parseFloat(state.previousOperand || '0')
	const current = parseFloat(state.currentOperand || '0')

	if (isNaN(prev) || isNaN(current)) return ''

	switch (state.operation) {
		case '+':
			return (prev + current).toString()
		case '˗':
			return (prev - current).toString()
		case '×':
			return (prev * current).toString()
		case '÷':
			return current !== 0 ? (prev / current).toFixed(10).replace(/\.?0+$/, '') : 'Error'
		default:
			return ''
	}
}

export const reducer = (state: CalculatorState, action: Action): CalculatorState => {
	switch (action.type) {
		case 'ADD_DIGIT':
			if (action.payload === '.' && state.currentOperand?.includes('.')) return state

			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${action.payload}`,
			}
		case 'CHOOSE_OPERATION':
			if (state.currentOperand == null) return state
			if (state.previousOperand == null) {
				return {
					...state,
					operation: action.payload,
					previousOperand: state.currentOperand,
					currentOperand: null,
				}
			}

			return {
				...state,
				operation: action.payload,
				previousOperand: evaluate(state),
				currentOperand: null,
			}
		case 'CLEAR':
			return InitialState
		case 'DELETE_DIGIT':
			if (!state.currentOperand) return state
			return {
				...state,
				currentOperand: state.currentOperand.length > 1 ? state.currentOperand.slice(0, -1) : null,
			}
		case 'EVALUATE':
			if (state.operation == null || state.currentOperand == null || state.previousOperand == null) {
				return state
			}
			return {
				...state,
				currentOperand: evaluate(state),
				previousOperand: null,
				operation: null,
			}
		default:
			return state
	}
}

export const CalculatorProvider = ({ children }: CalculatorProviderType) => {
	const [state, dispatch] = useReducer(reducer, InitialState)

	return <CalculatorContext.Provider value={{ state, dispatch }}>{children}</CalculatorContext.Provider>
}

export default CalculatorContext

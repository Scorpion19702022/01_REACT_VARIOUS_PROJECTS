import { CalculatorState, Action } from './Types/TypeForCalculator'

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
				currentOperand: 'Result', // Tu możesz dodać logikę wyliczania wyniku.
				previousOperand: null,
				operation: null,
			}
		default:
			return state
	}
}

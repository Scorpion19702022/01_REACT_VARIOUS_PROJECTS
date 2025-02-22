export type CalculatorState = {
	content: number
	currentOperand: string | null
	previousOperand: string | null
	operation: string | null
}

export type Action =
	| { type: 'ADD_DIGIT'; payload: string }
	| { type: 'CHOOSE_OPERATION'; payload: string }
	| { type: 'CLEAR' }
	| { type: 'DELETE_DIGIT' }
	| { type: 'EVALUATE' }

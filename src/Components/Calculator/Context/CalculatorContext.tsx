import { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { TypeCalculatorFunction, TypeConcatenateFunction } from '../Types/TypesForCalculator'

type InitialStateType = {
	content: string
	isEquail?: boolean
	isLighter?: boolean
	isMemory?: boolean
	handleClick: TypeCalculatorFunction | TypeConcatenateFunction
}

const InitialState: InitialStateType = {
	content: '',
	isEquail: true,
	isLighter: true,
	isMemory: true,
	handleClick: 
}

type CalculatorProviderType = {
	children: React.ReactNode
}

const CalculatorContext = createContext(InitialState)

export const CalculatorProvider = ({ children }: CalculatorProviderType) => {
	const [content, setContent] = useState<string>('')
	const [isEquail, setIsEquail] = useState<boolean>(true)
	const [isLighter, setIsLighter] = useState<boolean>(true)
	const [isMemory, setIsMemory] = useState<boolean>(true)

	const handleClick = () => {}

	return (
		<CalculatorContext.Provider value={{ content, isEquail, isLighter, isMemory, handleClick }}>
			{children} <Analytics />
		</CalculatorContext.Provider>
	)
}

export default CalculatorContext

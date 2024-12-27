import { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	content: string
	isEquail?: boolean
}

const InitialState: InitialStateType = {
	content: '',
	isEquail: true,
}

type CalculatorProviderType = {
	children: React.ReactNode
}

const CalculatorContext = createContext(InitialState)

export const CalculatorProvider = ({ children }: CalculatorProviderType) => {
	const [content, setContent] = useState<string>('')
	const [isEquail, setIsEquail] = useState<boolean>(true)

	return (
		<CalculatorContext.Provider value={{ content, isEquail }}>
			{children} <Analytics />
		</CalculatorContext.Provider>
	)
}

export default CalculatorContext

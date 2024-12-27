import { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	content: string
}

const InitialState: InitialStateType = {
	content: '',
}

type CalculatorProviderType = {
	children: React.ReactNode
}

const CalculatorContext = createContext(InitialState)

export const CalculatorProvider = ({ children }: CalculatorProviderType) => {
	const [content, setContent] = useState<string>('')

	return (
		<CalculatorContext.Provider value={{ content }}>
			{children} <Analytics />
		</CalculatorContext.Provider>
	)
}

export default CalculatorContext

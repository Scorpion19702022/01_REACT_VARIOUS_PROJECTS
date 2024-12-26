import { createContext, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	test: string
}

const InitialState: InitialStateType = {
	test: '',
}

type CalculatorProviderType = {
	children: React.ReactNode
}

const CalculatorContext = createContext(InitialState)

export const CalculatorProvider = ({ children }: CalculatorProviderType) => {
	const [test, setTest] = useState<string>('')

	console.log(test)

	return (
		<CalculatorContext.Provider value={{ test }}>
			{children} <Analytics />
		</CalculatorContext.Provider>
	)
}

export default CalculatorContext

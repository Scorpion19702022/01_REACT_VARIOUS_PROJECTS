import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	invest: string
}

type InvestmentProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	invest: '',
}

const InvestmentContext = createContext(InitialState)

export const InvestmentProvider = ({ children }: InvestmentProviderType) => {
	const [invest, setInvest] = useState<string>('test')

	return (
		<InvestmentContext.Provider value={{ invest }}>
			{children}
			<Analytics />
		</InvestmentContext.Provider>
	)
}

export default InvestmentContext

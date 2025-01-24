import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	inputInvest: string | number | null
}

type InvestmentProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	inputInvest: null,
}

const InvestmentContext = createContext(InitialState)

export const InvestmentProvider = ({ children }: InvestmentProviderType) => {
	const [inputInvest, setInputInvest] = useState<string | number | null>(null)

	return (
		<InvestmentContext.Provider value={{ inputInvest }}>
			{children}
			<Analytics />
		</InvestmentContext.Provider>
	)
}

export default InvestmentContext

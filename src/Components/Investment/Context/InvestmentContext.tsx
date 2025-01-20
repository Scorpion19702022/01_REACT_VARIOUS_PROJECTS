import React, { createContext } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {}

type InvestmentProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const InvestmentContext = createContext(InitialState)

export const InvestmentProvider = ({ children }: InvestmentProviderType) => {
	return (
		<InvestmentContext.Provider value={{}}>
			{children}
			<Analytics />
		</InvestmentContext.Provider>
	)
}

export default InvestmentProvider

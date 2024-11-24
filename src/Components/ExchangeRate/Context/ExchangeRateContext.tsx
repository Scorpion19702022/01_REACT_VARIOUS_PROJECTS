import React, { createContext } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {}

type ExchangeRateTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const ExchangeRateContext = createContext(InitialState)

export const ExchangeRateProvider = ({ children }: ExchangeRateTypeProvider) => {
	return (
		<ExchangeRateContext.Provider value={{}}>
			<Analytics />
			{children}
		</ExchangeRateContext.Provider>
	)
}

export default ExchangeRateContext

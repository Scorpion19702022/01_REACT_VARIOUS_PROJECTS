import React, { createContext } from 'react'

import { Analytics } from '@vercel/analytics/react'
import useExchangeRate from '../Hook/useExchangeRate'

type InitialStateType = {}

type ExchangeRateTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const ExchangeRateContext = createContext(InitialState)

export const ExchangeRateProvider = ({ children }: ExchangeRateTypeProvider) => {
	const { todayRates } = useExchangeRate()

	console.log(todayRates)

	return (
		<ExchangeRateContext.Provider value={{}}>
			<Analytics />
			{children}
		</ExchangeRateContext.Provider>
	)
}

export default ExchangeRateContext

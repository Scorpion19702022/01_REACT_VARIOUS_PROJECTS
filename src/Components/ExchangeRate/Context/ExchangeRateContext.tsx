import React, { createContext, useEffect, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
import useExchangeRate from '../Hook/useExchangeRate'
import { ExchangeRate } from '../Types/Types'
import useHistoryExchageRate from '../Hook/useHistoryExchangeRate'

type InitialStateType = {
	todayRatesData: ExchangeRate[]
	loading: boolean
	error: string | null
	historyDate: number | string
	handleRefresh: (e: any) => void
}

type ExchangeRateTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	todayRatesData: [],
	loading: true,
	error: null,
	historyDate: '',
	handleRefresh: (e: any) => {},
}

const ExchangeRateContext = createContext(InitialState)

export const ExchangeRateProvider = ({ children }: ExchangeRateTypeProvider) => {
	const { todayRates, loading, error } = useExchangeRate()
	const { historyDate } = useHistoryExchageRate()

	const [todayRatesData, setTodayRatesData] = useState<ExchangeRate[]>([])

	useEffect(() => {
		if (!loading && !error) {
			setTodayRatesData(todayRates)
		}
	}, [loading, error, todayRates])

	const handleRefresh = (e: any) => {
		e.preventDefault()
		window.location.reload()
	}

	return (
		<ExchangeRateContext.Provider value={{ todayRatesData, loading, error, historyDate, handleRefresh }}>
			<Analytics />
			{children}
		</ExchangeRateContext.Provider>
	)
}

export default ExchangeRateContext

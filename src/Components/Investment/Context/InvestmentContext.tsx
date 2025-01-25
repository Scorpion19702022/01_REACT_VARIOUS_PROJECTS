import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	inputInvest: string | number | null
	inputYearInvest: string | number | null
	inputTime: string | number | null
	handleChangeInvest: (e: number) => void
	handleChangeYearInvest: (e: number) => void
	handleChangeTime: (e: number) => void
}

type InvestmentProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	inputInvest: '',
	inputYearInvest: '',
	inputTime: '',
	handleChangeInvest: (e: number) => {},
	handleChangeYearInvest: (e: number) => {},
	handleChangeTime: (e: number) => {},
}

const InvestmentContext = createContext(InitialState)

export const InvestmentProvider = ({ children }: InvestmentProviderType) => {
	const [inputInvest, setInputInvest] = useState<string | number | null>('')
	const [inputYearInvest, setInputYearInvest] = useState<string | number | null>('')
	const [inputTime, setInputTime] = useState<string | number | null>('')

	const handleChangeInvest = (e: number) => {
		setInputInvest(e)
	}

	const handleChangeYearInvest = (e: number) => {
		setInputYearInvest(e)
	}

	const handleChangeTime = (e: number) => {
		setInputTime(e)
	}

	return (
		<InvestmentContext.Provider
			value={{ inputInvest, inputYearInvest, inputTime, handleChangeInvest, handleChangeYearInvest, handleChangeTime }}
		>
			{children}
			<Analytics />
		</InvestmentContext.Provider>
	)
}

export default InvestmentContext

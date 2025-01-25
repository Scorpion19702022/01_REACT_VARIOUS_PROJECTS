import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	inputInvest: string | null
	inputYearInvest: string | null
	inputTime: string | null
	allInvest: number
	handleChangeInvest: (e: string) => void
	handleChangeYearInvest: (e: string) => void
	handleChangeTime: (e: string) => void
}

type InvestmentProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	inputInvest: '',
	inputYearInvest: '',
	inputTime: '',
	allInvest: 0,
	handleChangeInvest: (e: string) => {},
	handleChangeYearInvest: (e: string) => {},
	handleChangeTime: (e: string) => {},
}

const InvestmentContext = createContext(InitialState)

export const InvestmentProvider = ({ children }: InvestmentProviderType) => {
	const [inputInvest, setInputInvest] = useState<string | null>('')
	const [inputYearInvest, setInputYearInvest] = useState<string | null>('')
	const [inputTime, setInputTime] = useState<string | null>('')

	const [allInvest, setAllInvest] = useState<number>(0)

	const handleChangeInvest = (e: string) => {
		setInputInvest(e)
	}

	const handleChangeYearInvest = (e: string) => {
		setInputYearInvest(e)
	}

	const handleChangeTime = (e: string) => {
		setInputTime(e)
	}

	return (
		<InvestmentContext.Provider
			value={{
				inputInvest,
				inputYearInvest,
				inputTime,
				allInvest,
				handleChangeInvest,
				handleChangeYearInvest,
				handleChangeTime,
			}}
		>
			{children}
			<Analytics />
		</InvestmentContext.Provider>
	)
}

export default InvestmentContext

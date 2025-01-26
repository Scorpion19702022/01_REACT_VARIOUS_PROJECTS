import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	inputInvest: string | number | null
	inputYearInvest: string | number | null
	inputTime: string | number | null
	allInvest: string | number
	handleChangeInvest: (e: string) => void
	handleChangeYearInvest: (e: string) => void
	handleChangeTime: (e: string) => void
	handleAddInvest: () => void
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
	handleAddInvest: () => {},
}

const InvestmentContext = createContext(InitialState)

export const InvestmentProvider = ({ children }: InvestmentProviderType) => {
	const [inputInvest, setInputInvest] = useState<string | number | null>('')
	const [inputYearInvest, setInputYearInvest] = useState<string | number | null>('')
	const [inputTime, setInputTime] = useState<string | number | null>('')

	const [allInvest, setAllInvest] = useState<string | number>(`0 zł`)

	const handleChangeInvest = (e: string | number | null) => {
		setInputInvest(e)
	}

	const handleChangeYearInvest = (e: string | number | null) => {
		setInputYearInvest(e)
	}

	const handleChangeTime = (e: string | number | null) => {
		setInputTime(e)
	}

	const handleAddInvest = () => {
		if (inputInvest !== '' && inputYearInvest !== '' && inputTime !== '') {
			setAllInvest(Number(inputInvest) + Number(inputYearInvest) * Number(inputTime) + ' zł')
		} else if (inputInvest === '' || inputYearInvest === '' || inputTime === '') {
			setAllInvest('wypełnij wszystkie pola')
		}
	}

	console.log(allInvest)

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
				handleAddInvest,
			}}
		>
			{children}
			<Analytics />
		</InvestmentContext.Provider>
	)
}

export default InvestmentContext

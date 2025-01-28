import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStateType = {
	inputInvest: string | number | null
	inputYearInvest: string | number | null
	inputTime: string | number | null
	allInvest: string | number
	periodInvest: string | number
	handleChangeInvest: (e: string) => void
	handleChangeYearInvest: (e: string) => void
	handleChangeTime: (e: string) => void
	handleAddInvest: () => void
	handleCleanAllInvest: () => void
}

type InvestmentProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	inputInvest: '',
	inputYearInvest: '',
	inputTime: '',
	allInvest: 0,
	periodInvest: 0,
	handleChangeInvest: (e: string) => {},
	handleChangeYearInvest: (e: string) => {},
	handleChangeTime: (e: string) => {},
	handleAddInvest: () => {},
	handleCleanAllInvest: () => {},
}

const InvestmentContext = createContext(InitialState)

export const InvestmentProvider = ({ children }: InvestmentProviderType) => {
	const [inputInvest, setInputInvest] = useState<string | number | null>('')
	const [inputYearInvest, setInputYearInvest] = useState<string | number | null>('')
	const [inputTime, setInputTime] = useState<string | number | null>('')

	const [allInvest, setAllInvest] = useState<string | number>(`0 zł`)
	const [periodInvest, setPeriodInvest] = useState<string | number>('0 lat')

	const handleChangeInvest = (e: string | number | null) => {
		if (Number(e) >= 0) {
			setInputInvest(e)
		}
	}

	const handleChangeYearInvest = (e: string | number | null) => {
		if (Number(e) >= 0) {
			setInputYearInvest(e)
		}
	}

	const handleChangeTime = (e: string | number | null) => {
		if (Number(e) <= 10 && Number(e) >= 1 && e !== '') {
			setInputTime(e)
		}
	}

	const handleAddInvest = () => {
		if (inputInvest !== '' && inputYearInvest !== '' && inputTime !== '' && Number(inputTime) > 0) {
			setAllInvest((Number(inputInvest) + Number(inputYearInvest) * Number(inputTime)).toLocaleString(`pl-PL`) + ' zł')
		} else if (inputInvest === '' || inputYearInvest === '' || inputTime === '' || Number(inputTime) <= 0) {
			setAllInvest('wypełnij wszystkie pola')
			setPeriodInvest('0 lat')
		}

		if (Number(inputTime) === 1) {
			setPeriodInvest(`${inputTime} rok`)
		} else if (Number(inputTime) > 1 && Number(inputTime) <= 3) {
			setPeriodInvest(`${inputTime} lata`)
		} else if (Number(inputTime) > 2) {
			setPeriodInvest(`${inputTime} lat`)
		} else if (String(inputTime) === '' || Number(inputTime) === 0) {
			setPeriodInvest(`musisz podać okres`)
		}
	}

	const handleCleanAllInvest = () => {
		setInputInvest('')
		setInputYearInvest('')
		setInputTime('')
		setAllInvest('0 zł')
		setPeriodInvest('0 lat')
	}

	return (
		<InvestmentContext.Provider
			value={{
				inputInvest,
				inputYearInvest,
				inputTime,
				allInvest,
				periodInvest,
				handleChangeInvest,
				handleChangeYearInvest,
				handleChangeTime,
				handleAddInvest,
				handleCleanAllInvest,
			}}
		>
			{children}
			<Analytics />
		</InvestmentContext.Provider>
	)
}

export default InvestmentContext

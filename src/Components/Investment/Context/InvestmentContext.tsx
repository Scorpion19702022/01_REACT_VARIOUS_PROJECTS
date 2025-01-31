import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { TypeForInvestment } from '../Types/TypeForInvestment'

type InitialStateType = {
	inputInvest: string | number | null
	inputYearInvest: string | number | null
	inputTime: string | number | null
	allInvest: string | number
	periodInvest: string | number
	yourInvest: TypeForInvestment[]
	// resultInvest: any[]
	chartInfo: string
	chartAvailable: boolean
	handleChangeInvest: (e: string) => void
	handleChangeYearInvest: (e: string) => void
	handleChangeTime: (e: string) => void
	handleAddInvest: () => void
	handleCleanAllInvest: () => void
	handleUseEnter: (e: any) => void
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
	yourInvest: [],
	// resultInvest: [],
	chartInfo: '',
	chartAvailable: false,
	handleChangeInvest: (e: string) => {},
	handleChangeYearInvest: (e: string) => {},
	handleChangeTime: (e: string) => {},
	handleAddInvest: () => {},
	handleCleanAllInvest: () => {},
	handleUseEnter: (e: any) => {},
}

const InvestmentContext = createContext(InitialState)

export const InvestmentProvider = ({ children }: InvestmentProviderType) => {
	const [inputInvest, setInputInvest] = useState<string | number | null>('')
	const [inputYearInvest, setInputYearInvest] = useState<string | number | null>('')
	const [inputTime, setInputTime] = useState<string | number | null>('')

	const [allInvest, setAllInvest] = useState<string | number>(`0 zł`)
	const [periodInvest, setPeriodInvest] = useState<string | number>('0 lat')
	const [chartInfo, setChartInfo] = useState<string>('wykres niedostępny')

	const [chartAvailable, setChartAvailable] = useState<boolean>(false)

	const [yourInvest, setYourInvest] = useState<TypeForInvestment[]>([])
	// const [resultInvest, setResultInvest] = useState<any[]>([])

	let percentPkoBp = 2.5
	let percentPkoSa = 3.25
	let percentSantarder = 2
	let percentMbank = 4.5

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
		if ((inputInvest !== '' && inputYearInvest !== '' && inputTime !== '') || Number(inputTime) > 0) {
			setAllInvest((Number(inputInvest) + Number(inputYearInvest) * Number(inputTime)).toLocaleString(`pl-PL`) + ' zł')

			let currentInvestment = Number(inputInvest)

			for (let i = 0; i < Number(inputTime); i++) {
				currentInvestment += Number(inputYearInvest)
				const pkoBp = (currentInvestment * percentPkoBp) / 100
				const pkoSa = (currentInvestment * percentPkoSa) / 100
				const santander = (currentInvestment * percentSantarder) / 100
				const mBank = (currentInvestment * percentMbank) / 100
			}
		} else if (inputInvest === '' || inputYearInvest === '' || inputTime === '' || Number(inputTime) <= 0) {
			setAllInvest('musisz podać okres')
			setPeriodInvest('0 lat')
		}

		if (Number(inputTime) === 1) {
			setPeriodInvest(`${inputTime} rok`)
		} else if (Number(inputTime) > 1 && Number(inputTime) <= 4) {
			setPeriodInvest(`${inputTime} lata`)
		} else if (Number(inputTime) > 2) {
			setPeriodInvest(`${inputTime} lat`)
		} else if (String(inputTime) === '' || Number(inputTime) === 0) {
			setPeriodInvest(`musisz podać okres`)
		}

		if (Number(inputInvest) === 0 && Number(inputYearInvest) === 0 && Number(inputTime) === 0) {
			setChartAvailable(false)
			setChartInfo('wykres będzie dostępny gdy podasz wszędzie wartości większe od 0')
		} else if (Number(inputInvest) > 0 && Number(inputYearInvest) > 0 && Number(inputTime) > 0) {
			setChartAvailable(true)
			setChartInfo('wykres dostępny')
		}
	}

	const handleCleanAllInvest = () => {
		setInputInvest('')
		setInputYearInvest('')
		setInputTime('')
		setAllInvest('0 zł')
		setPeriodInvest('0 lat')
		setChartInfo('wykres niedostępny')
		setChartAvailable(false)
	}

	const handleUseEnter = (e: any) => {
		if (e.key === 'Enter') {
			handleAddInvest()
			e.preventDefault()
		}
	}

	return (
		<InvestmentContext.Provider
			value={{
				inputInvest,
				inputYearInvest,
				inputTime,
				allInvest,
				periodInvest,
				yourInvest,
				// resultInvest,
				chartInfo,
				chartAvailable,
				handleChangeInvest,
				handleChangeYearInvest,
				handleChangeTime,
				handleAddInvest,
				handleCleanAllInvest,
				handleUseEnter,
			}}
		>
			{children}
			<Analytics />
		</InvestmentContext.Provider>
	)
}

export default InvestmentContext

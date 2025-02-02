import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { TypeForInvestment } from '../Types/TypeForInvestment'

import { v4 as uuidv4 } from 'uuid'

type InitialStateType = {
	inputInvest: string | number | null
	inputYearInvest: string | number | null
	inputTime: string | number | null
	allInvest: number
	periodInvest: string | number
	yourInvest: TypeForInvestment[]
	chartInfo: string
	chartButtonAvailable: boolean
	chartView: boolean
	handleChangeInvest: (e: string) => void
	handleChangeYearInvest: (e: string) => void
	handleChangeTime: (e: string) => void
	handleAddInvest: () => void
	handleCleanAllInvest: () => void
	handleUseEnter: (e: any) => void
	handleViewChart: () => void
	handleCloseChart: () => void
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
	chartInfo: '',
	chartButtonAvailable: false,
	chartView: false,
	handleChangeInvest: (e: string) => {},
	handleChangeYearInvest: (e: string) => {},
	handleChangeTime: (e: string) => {},
	handleAddInvest: () => {},
	handleCleanAllInvest: () => {},
	handleUseEnter: (e: any) => {},
	handleViewChart: () => {},
	handleCloseChart: () => {},
}

const InvestmentContext = createContext(InitialState)

export const InvestmentProvider = ({ children }: InvestmentProviderType) => {
	const [inputInvest, setInputInvest] = useState<string | number | null>('')
	const [inputYearInvest, setInputYearInvest] = useState<string | number | null>('')
	const [inputTime, setInputTime] = useState<string | number | null>('')

	const [allInvest, setAllInvest] = useState<number>(0)
	const [periodInvest, setPeriodInvest] = useState<string | number>('0 lat')
	const [chartInfo, setChartInfo] = useState<string>('wykres niedostępny')

	const [chartButtonAvailable, setChartButtonAvailable] = useState<boolean>(false)
	const [chartView, setChartView] = useState<boolean>(false)

	const [yourInvest, setYourInvest] = useState<TypeForInvestment[]>([])

	let percentPkoBp = 2.5
	let percentPkoSa = 3.25
	let percentSantarder = 2
	let percentMbank = 4.5

	const handleChangeInvest = (e: string | number | null) => {
		if (Number(e) >= 0 && Number(e) <= 10000000) {
			setInputInvest(e)
		}
	}

	const handleChangeYearInvest = (e: string | number | null) => {
		if (Number(e) >= 0 && Number(e) <= 10000000) {
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
			setAllInvest(Number(inputInvest) + Number(inputYearInvest) * Number(inputTime))

			let currentInvestmentPkoBp = (Number(inputInvest) * percentPkoBp) / 100
			let currentInvestmentPkoSa = (Number(inputInvest) * percentPkoSa) / 100
			let currentInvestmentSantander = (Number(inputInvest) * percentSantarder) / 100
			let currentInvestmentMbank = (Number(inputInvest) * percentMbank) / 100
			let newYourInvest = []

			for (let i = 1; i < Number(inputTime); i++) {
				currentInvestmentPkoBp += Number(inputYearInvest)
				currentInvestmentPkoSa += Number(inputYearInvest)
				currentInvestmentSantander += Number(inputYearInvest)
				currentInvestmentMbank += Number(inputYearInvest)
				const pkoBp = (currentInvestmentPkoBp * percentPkoBp * (i + 1)) / 100
				const pkoSa = (currentInvestmentPkoSa * percentPkoSa * (i + 1)) / 100
				const santander = (currentInvestmentSantander * percentSantarder * (i + 1)) / 100
				const mBank = (currentInvestmentMbank * percentMbank * (i + 1)) / 100

				newYourInvest.push({
					id: uuidv4(),
					year: i + 1,
					investPkoBp: currentInvestmentPkoBp + pkoBp,
					investPkoSa: currentInvestmentPkoSa + pkoSa,
					investSantander: currentInvestmentSantander + santander,
					investMbank: currentInvestmentMbank + mBank,
				})

				setYourInvest(newYourInvest)
			}
		} else if (inputInvest === '' || inputYearInvest === '' || inputTime === '' || Number(inputTime) <= 0) {
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
			setChartButtonAvailable(false)
			setChartInfo('wykres będzie dostępny gdy podasz wszędzie wartości większe od 0')
		} else if (Number(inputInvest) > 0 && Number(inputYearInvest) > 0 && Number(inputTime) > 0) {
			setChartButtonAvailable(true)
			setChartInfo('wykres dostępny')
		}
	}

	const handleCleanAllInvest = () => {
		setInputInvest('')
		setInputYearInvest('')
		setInputTime('')
		setAllInvest(0)
		setPeriodInvest('0 lat')
		setChartInfo('wykres niedostępny')
		setChartButtonAvailable(false)
		setYourInvest([])
	}

	const handleUseEnter = (e: any) => {
		if (e.key === 'Enter') {
			handleAddInvest()
			e.preventDefault()
		}
	}

	const handleViewChart = () => {
		setChartView(true)
	}

	const handleCloseChart = () => {
		setChartView(false)
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
				chartInfo,
				chartButtonAvailable,
				chartView,
				handleChangeInvest,
				handleChangeYearInvest,
				handleChangeTime,
				handleAddInvest,
				handleCleanAllInvest,
				handleUseEnter,
				handleViewChart,
				handleCloseChart,
			}}
		>
			{children}
			<Analytics />
		</InvestmentContext.Provider>
	)
}

export default InvestmentContext

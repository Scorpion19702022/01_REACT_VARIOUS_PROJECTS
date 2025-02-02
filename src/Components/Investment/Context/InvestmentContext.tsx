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
	startInvestPkoBp: number
	startInvestPkoSa: number
	startInvestPkoSantander: number
	startInvestMbank: number
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
	startInvestPkoBp: 0,
	startInvestPkoSa: 0,
	startInvestPkoSantander: 0,
	startInvestMbank: 0,
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

	const [startInvestPkoBp, setStartInvestPkoBp] = useState<number>(0)
	const [startInvestPkoSa, setStartInvestPkoSa] = useState<number>(0)
	const [startInvestPkoSantander, setStartInvestPkoSantander] = useState<number>(0)
	const [startInvestMbank, setStartInvestMbank] = useState<number>(0)

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

			// let test = Number(inputInvest) * (percentPkoBp / 100) + Number(inputInvest)
			// console.log(test)

			let currentInvestment = Number(inputInvest)
			let newYourInvest = []

			for (let i = 1; i < Number(inputTime); i++) {
				currentInvestment += Number(inputYearInvest)
				const pkoBp = (currentInvestment * percentPkoBp * (i + 1)) / 100
				const pkoSa = (currentInvestment * percentPkoSa * (i + 1)) / 100
				const santander = (currentInvestment * percentSantarder * (i + 1)) / 100
				const mBank = (currentInvestment * percentMbank * (i + 1)) / 100

				newYourInvest.push({
					id: uuidv4(),
					year: i + 1,
					investPkoBp: currentInvestment + pkoBp,
					investPkoSa: currentInvestment + pkoSa,
					investSantander: currentInvestment + santander,
					investMbank: currentInvestment + mBank,
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
				startInvestPkoBp,
				startInvestPkoSa,
				startInvestPkoSantander,
				startInvestMbank,
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

import React, { createContext, useEffect, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { TypeForInvestment } from '../Types/TypeForInvestment'

import { v4 as uuidv4 } from 'uuid'

type InitialStateType = {
	inputInvest: string | number | null
	inputYearInvest: string | number | null
	inputTime: string | number | null
	allInvest: number
	periodInvest: string | number
	startInvestPkoBp: string | number
	startInvestPkoSa: string | number
	startInvestSantander: string | number
	startInvestMbank: string | number
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
	startInvestSantander: 0,
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

	const [startInvestPkoBp, setStartInvestPkoBp] = useState<string | number>(0)
	const [startInvestPkoSa, setStartInvestPkoSa] = useState<string | number>(0)
	const [startInvestSantander, setStartInvestSantander] = useState<string | number>(0)
	const [startInvestMbank, setStartInvestMbank] = useState<string | number>(0)

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

	useEffect(() => {
		if (Number(inputInvest) > 0) {
			setStartInvestPkoBp(Number(inputInvest) * (percentPkoBp / 100) + Number(inputInvest))
			setStartInvestPkoSa(Number(inputInvest) * (percentPkoSa / 100) + Number(inputInvest))
			setStartInvestSantander(Number(inputInvest) * (percentSantarder / 100) + Number(inputInvest))
			setStartInvestMbank(Number(inputInvest) * (percentMbank / 100) + Number(inputInvest))
		}
	}, [inputInvest])

	useEffect(() => {
		if (yourInvest.length === 1) {
			setChartButtonAvailable(false)
			setChartInfo('wykres będzie dostępny gdy okres inwestycji będzie większy niż jeden rok')
		} else if (yourInvest.length > 1) {
			setChartButtonAvailable(true)
			setChartInfo('wykres dostępny')
		}
	}, [yourInvest.length])

	const handleAddInvest = () => {
		setAllInvest(Number(inputInvest) + Number(inputYearInvest) * Number(inputTime))
		if (inputInvest !== '' && inputTime !== '' && Number(inputTime) > 0) {
			let currentInvestmentPkoBp = Number(startInvestPkoBp)
			let currentInvestmentPkoSa = Number(startInvestPkoSa)
			let currentInvestmentSantander = Number(startInvestSantander)
			let currentInvestmentMbank = Number(startInvestMbank)
			let newYourInvest = [
				{
					id: uuidv4(),
					year: 1,
					investPkoBp: currentInvestmentPkoBp,
					investPkoSa: currentInvestmentPkoSa,
					investSantander: currentInvestmentSantander,
					investMbank: currentInvestmentMbank,
				},
			]

			for (let i = 1; i < Number(inputTime); i++) {
				currentInvestmentPkoBp += Number(inputYearInvest)
				currentInvestmentPkoSa += Number(inputYearInvest)
				currentInvestmentSantander += Number(inputYearInvest)
				currentInvestmentMbank += Number(inputYearInvest)
				const pkoBp = (currentInvestmentPkoBp * percentPkoBp * i) / 100
				const pkoSa = (currentInvestmentPkoSa * percentPkoSa * i) / 100
				const santander = (currentInvestmentSantander * percentSantarder * (i + 1)) / 100
				const mBank = (currentInvestmentMbank * percentMbank * i) / 100

				newYourInvest.push({
					id: uuidv4(),
					year: i + 1,
					investPkoBp: currentInvestmentPkoBp + pkoBp,
					investPkoSa: currentInvestmentPkoSa + pkoSa,
					investSantander: currentInvestmentSantander + santander,
					investMbank: currentInvestmentMbank + mBank,
				})
			}
			setYourInvest(newYourInvest)
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

		// if (yourInvest.length === 0) {
		// 	setChartButtonAvailable(false)
		// 	setChartInfo('wykres będzie dostępny gdy podasz okres w latach')
		// } else if (yourInvest.length > 0) {
		// 	setChartButtonAvailable(true)
		// 	setChartInfo('wykres dostępny')
		// }
	}
	console.log(yourInvest)

	const handleCleanAllInvest = () => {
		setInputInvest('')
		setInputYearInvest('')
		setInputTime('')
		setAllInvest(0)
		setStartInvestPkoBp(0)
		setStartInvestPkoSa(0)
		setStartInvestSantander(0)
		setStartInvestMbank(0)
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
				startInvestSantander,
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

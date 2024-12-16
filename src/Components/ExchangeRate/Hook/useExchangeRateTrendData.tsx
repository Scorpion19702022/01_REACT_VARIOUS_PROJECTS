import { useEffect, useState } from 'react'
import { FilteredTrendData, TrendData } from '../Types/Types'

const useExchangeRateTrendData = () => {
	const [endDate, setEndDate] = useState<string>('')
	const [startDate, setStartDate] = useState<string>('')

	let quantityDays = 14

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	const [trendData, setTrendData] = useState<TrendData[]>([])
	const [filteredTrendData, setFilteredTrendData] = useState<FilteredTrendData>({
		USD: [],
		EUR: [],
		CHF: [],
		GBP: [],
	})

	let currentDateForHistory = new Date()

	currentDateForHistory.setDate(currentDateForHistory.getDate() - 75)

	let previousDate = currentDateForHistory.toISOString().split('T')[0]

	const [chooseStartDate, setChooseStartDate] = useState<string>(previousDate)

	const [checkStartDate, setCheckStartkDate] = useState<string>('')

	const handleChangeDate = (e: string) => {
		setCheckStartkDate(e)
	}

	console.log(checkStartDate)

	useEffect(() => {
		const currentDate = new Date()
		const startDate = new Date()
		startDate.setDate(currentDate.getDate() - quantityDays)

		const endDateTrend = currentDate.toISOString().split('T')[0]
		const startDateTrend = startDate.toISOString().split('T')[0]

		setEndDate(endDateTrend)
		setStartDate(startDateTrend)
	}, [])

	useEffect(() => {
		if (!startDate || !endDate) return

		const fetchTrendData = async () => {
			const trendDataURL = `https://api.nbp.pl/api/exchangerates/tables/A/${startDate}/${endDate}/?format=json`

			try {
				const response = await fetch(trendDataURL)
				if (!response.ok) throw new Error('Błąd pobierania danych')
				const data: TrendData[] = await response.json()
				setTrendData(data)

				const currencies = ['USD', 'EUR', 'CHF', 'GBP']
				const preparedData = currencies.reduce((acc, code) => {
					acc[code] = data.flatMap(entry => {
						const rate = entry.rates.find(r => r.code === code)
						return rate ? [{ date: entry.effectiveDate, value: rate.mid }] : []
					})
					return acc
				}, {} as FilteredTrendData)

				setFilteredTrendData(preparedData)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}

		fetchTrendData()
	}, [startDate, endDate])

	return {
		startDate,
		endDate,
		quantityDays,
		loading,
		error,
		trendData,
		filteredTrendData,
		chooseStartDate,
		checkStartDate,
		handleChangeDate,
	}
}

export default useExchangeRateTrendData

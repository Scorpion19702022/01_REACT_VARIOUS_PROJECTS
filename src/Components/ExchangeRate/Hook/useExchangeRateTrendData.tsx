import { useEffect, useState } from 'react'
import { FilteredTrendData, TrendData } from '../Types/Types'

const useExchangeRateTrendData = () => {
	const [quantityDays, setQuantityDays] = useState<number>(14)

	let currentDateForHistory = new Date()

	currentDateForHistory.setDate(currentDateForHistory.getDate() - 90)

	let previousDate = currentDateForHistory.toISOString().split('T')[0]

	const currentDate = new Date()
	const startNewDate = new Date()
	startNewDate.setDate(currentDate.getDate() - quantityDays)

	const endDateTrend = currentDate.toISOString().split('T')[0]
	const startDateTrend = startNewDate.toISOString().split('T')[0]

	const [endDate, setEndDate] = useState<string>(endDateTrend)
	const [startDate, setStartDate] = useState<string>(startDateTrend)

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	const [trendData, setTrendData] = useState<TrendData[]>([])
	const [filteredTrendData, setFilteredTrendData] = useState<FilteredTrendData>({
		USD: [],
		EUR: [],
		CHF: [],
		GBP: [],
	})

	const [chooseStartDate, setChooseStartDate] = useState<string>(previousDate)

	const [checkStartDate, setCheckStartkDate] = useState<string>(startDateTrend)

	const handleChangeDate = (e: string) => {
		setCheckStartkDate(e)
	}

	const handleChooseTrendDate = () => {
		if (!checkStartDate || !startDate) return

		const selectedDate = new Date(checkStartDate)
		const currentStartDate = new Date(startDate)

		const diffTime = Math.abs(currentStartDate.getTime() - selectedDate.getTime())
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

		console.log('Nowa ilość dni:', diffDays)
		setQuantityDays(diffDays)

		// Opcjonalnie przelicz startDate w tej samej funkcji
		const newStartDate = new Date()
		newStartDate.setDate(currentDate.getDate() - diffDays)
		setStartDate(newStartDate.toISOString().split('T')[0])
	}

	useEffect(() => {
		const newStartDate = new Date()
		newStartDate.setDate(currentDate.getDate() - quantityDays)
		setStartDate(newStartDate.toISOString().split('T')[0])
	}, [quantityDays])

	useEffect(() => {
		if (!startDate || !endDate) return

		const trendDataURL = `https://api.nbp.pl/api/exchangerates/tables/A/${startDate}/${endDate}/?format=json`

		const fetchTrendData = async () => {
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
		startNewDate,
		endDateTrend,
		loading,
		error,
		trendData,
		filteredTrendData,
		chooseStartDate,
		checkStartDate,
		handleChangeDate,
		handleChooseTrendDate,
	}
}

export default useExchangeRateTrendData

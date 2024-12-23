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
	const [updateTrendData, setUpdateTredData] = useState<boolean>(true)

	useEffect(() => {
		if (!updateTrendData) {
			const start = new Date(startDate)
			const end = new Date(endDate)
			const diffTime = Math.abs(end.getTime() - start.getTime())
			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
			setQuantityDays(diffDays)
			const startNewDate = new Date()
			startNewDate.setDate(currentDate.getDate() - quantityDays)
			setStartDate(startNewDate.toISOString().split('T')[0])
			setEndDate(currentDate.toISOString().split('T')[0])
		}
	}, [updateTrendData])

	const handleChangeDate = (e: string) => {
		setStartDate(e)
	}

	const handleChooseTrendDate = () => {
		setUpdateTredData(false)
		// if (!updateTrendData) {
		// 	const startNewDate = new Date()
		// 	startNewDate.setDate(currentDate.getDate() - quantityDays)
		// 	setStartDate(startNewDate.toISOString().split('T')[0])
		// 	setEndDate(currentDate.toISOString().split('T')[0])
		// }
	}

	const handleCleanChooseTrendDate = () => {
		setUpdateTredData(true)
		setQuantityDays(14)
		if (updateTrendData) {
			setStartDate(startDateTrend)
		}
	}

	useEffect(() => {
		const fetchTrendData = async () => {
			if (!startDate || !endDate) return

			const trendDataURL = `https://api.nbp.pl/api/exchangerates/tables/A/${startDate}/${endDate}/?format=json`

			try {
				setLoading(true)
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

				console.log('Dane przygotowane do ustawienia stanu:', preparedData)

				setFilteredTrendData(preparedData)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}

		if (updateTrendData) {
			fetchTrendData()
		} else if (!updateTrendData) {
			fetchTrendData()
		}
	}, [updateTrendData])

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
		handleChangeDate,
		handleChooseTrendDate,
		handleCleanChooseTrendDate,
		updateTrendData,
	}
}

export default useExchangeRateTrendData

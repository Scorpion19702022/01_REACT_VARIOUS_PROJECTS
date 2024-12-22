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

	const [checkStartDate, setCheckStartkDate] = useState<string>(startDate)

	const [updateTrendData, setUpdateTredData] = useState<boolean>(true)

	const handleChangeDate = (e: string) => {
		setCheckStartkDate(e)
	}

	useEffect(() => {
		if (!updateTrendData) {
			setCheckStartkDate(prev => {
				const updatedDate = prev
				return updatedDate
			})
			setFilteredTrendData(prev => {
				const updatedDate = prev
				return updatedDate
			})
		}
	}, [updateTrendData])

	const handleChooseTrendDate = () => {
		setUpdateTredData(false)
	}

	const handleCleanChooseTrendDate = () => {
		setUpdateTredData(true)
	}

	console.log('hook', filteredTrendData)
	console.log('hook', checkStartDate)

	useEffect(() => {
		const fetchTrendData = async () => {
			if (!checkStartDate || !endDate) return

			const trendDataURL = `https://api.nbp.pl/api/exchangerates/tables/A/${checkStartDate}/${endDate}/?format=json`

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
	}, [checkStartDate, endDate])

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
		handleCleanChooseTrendDate,
		updateTrendData,
	}
}

export default useExchangeRateTrendData

import { useEffect, useState } from 'react'
import { TrendData } from '../Types/Types'

const useExchangeRateTrendData = () => {
	const [endDate, setEndDate] = useState<string>('')
	const [startDate, setStartDate] = useState<string>('')

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	const [trendData, setTrendData] = useState<TrendData[]>([])
	const [filteredTrendData, setFilteredTrendData] = useState<Record<string, number[]>>({
		USD: [],
		EUR: [],
		CHF: [],
		GBP: [],
	})

	useEffect(() => {
		const currentDate = new Date()
		const startDate = new Date()
		startDate.setDate(currentDate.getDate() - 7)

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
					acc[code] = data
						.map(entry => {
							const rate = entry.rates.find(r => r.code === code)
							return rate ? rate.mid : null
						})
						.filter((rate): rate is number => rate !== null)
					return acc
				}, {} as Record<string, number[]>)

				setFilteredTrendData(preparedData)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}

		fetchTrendData()
	}, [startDate, endDate])

	console.log(filteredTrendData)

	return { startDate, endDate, loading, error, trendData, filteredTrendData }
}

export default useExchangeRateTrendData

import { useEffect, useState } from 'react'
import { TrendDate } from '../Types/Types'

const useExchangeRateTrendData = () => {
	const [endDate, setEndDate] = useState<string>('')
	const [startDate, setStartDate] = useState<string>('')

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	const [trendDate, setTrendDate] = useState<TrendDate[]>([])
	const [filteredTrendDate, setFilteredTrendDate] = useState<Record<string, number[]>>({
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

		const fetchTrendDate = async () => {
			const trendDateURL = `https://api.nbp.pl/api/exchangerates/tables/A/${startDate}/${endDate}/`

			try {
				const response = await fetch(trendDateURL)
				if (!response.ok) throw new Error('błąd pbierania danych')
				const data = await response.json()
				console.log(data)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}

		fetchTrendDate()
	}, [endDate, startDate])

	return { startDate, endDate, loading, error, trendDate, filteredTrendDate }
}

export default useExchangeRateTrendData

import { useEffect, useState } from 'react'

const useExchangeRateTrendData = () => {
	const [useEndDate, setUseEndDate] = useState<string>('')
	const [useStartDate, setUseStartDate] = useState<string>('')

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const currentDate = new Date()
		const startDate = new Date()
		startDate.setDate(currentDate.getDate() - 14)

		const endDateTrend = currentDate.toISOString().split('T')[0]
		const startDateTrend = startDate.toISOString().split('T')[0]

		setUseEndDate(endDateTrend)
		setUseStartDate(startDateTrend)
	}, [])

	useEffect(() => {
		const fetchTrendDate = async () => {
			const trendDateURL = `https://api.nbp.pl/api/exchangerates/tables/A/${useStartDate}/${useEndDate}/`

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
	}, [])

	return { useEndDate, useStartDate, loading, error }
}

export default useExchangeRateTrendData

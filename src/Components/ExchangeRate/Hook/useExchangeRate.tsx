import { useState, useEffect } from 'react'

interface ExchangeRate {
	currency: string
	code: string
	mid: number
}

interface UseExchangeRateReturn {
	todayRates: ExchangeRate[]
	loading: boolean
	error: string | null
}

const currentURL = 'https://api.nbp.pl/api/exchangerates/tables/A/'

const useExchangeRate = (): UseExchangeRateReturn => {
	const [todayRates, setTodayRates] = useState<ExchangeRate[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchRates = async () => {
			setLoading(true)
			try {
				const response = await fetch(currentURL)
				if (!response.ok) throw new Error('Błąd pobierania danych')
				const data = await response.json()
				setTodayRates(data[0].rates)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}

		fetchRates()
	}, [])

	return { todayRates, loading, error }
}

export default useExchangeRate

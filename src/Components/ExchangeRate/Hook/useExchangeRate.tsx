import { useState, useEffect } from 'react'
import { ExchangeRate, UseExchangeRateReturn } from '../Types/Types'

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

				// console.log(data)

				const filteredRates = data[0].rates.filter(
					(rate: ExchangeRate) =>
						rate.code === 'USD' ||
						rate.code === 'EUR' ||
						rate.code === 'CHF' ||
						rate.code === 'GBP' ||
						rate.code === 'UAH' ||
						rate.code === 'CZK'
				)

				setTodayRates(filteredRates)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}

		fetchRates()

		const interval = setInterval(fetchRates, 3600000)
		return () => clearInterval(interval)
	}, [])

	return { todayRates, loading, error }
}

export default useExchangeRate

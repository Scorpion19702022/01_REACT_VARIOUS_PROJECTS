import { useEffect, useState } from 'react'
import { ExchangeRate } from '../Types/Types'

const useHistoryExchageRate = () => {
	let currentDate = new Date()

	let dayOfWeek = currentDate.getDay()
	let hour = currentDate.getHours()

	if (hour <= 12) {
		currentDate.setDate(currentDate.getDate() - 1)
	} else if (dayOfWeek === 5) {
		currentDate.setDate(currentDate.getDate() - 1)
	} else if (dayOfWeek === 6) {
		currentDate.setDate(currentDate.getDate() - 2)
	} else if (dayOfWeek === 0) {
		currentDate.setDate(currentDate.getDate() - 3)
	} else if (dayOfWeek === 1 && hour <= 12) {
		currentDate.setDate(currentDate.getDate() - 4)
	} else {
		currentDate.setDate(currentDate.getDate() - 1)
	}

	let previousDate = currentDate.toISOString().split('T')[0]

	const [historyDate, setHistoryDate] = useState<string>(previousDate)

	const [checkDate, setCheckDate] = useState<string>(historyDate)

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	const [historyRate, setHistoryRate] = useState<ExchangeRate[]>([])

	useEffect(() => {
		const fetchHistoryRates = async (date: string) => {
			const historyDataURL = `https://api.nbp.pl/api/exchangerates/tables/A/${date}/`

			try {
				const response = await fetch(historyDataURL)
				if (!response.ok) {
					if (response.status === 404) {
						const newDate = new Date(date)
						newDate.setDate(newDate.getDate() - 1)
						const fallbackDate = newDate.toISOString().split('T')[0]
						setCheckDate(fallbackDate)
						fetchHistoryRates(fallbackDate)
						return
					}
					throw new Error('Błąd pobrania danych')
				}
				const data = await response.json()

				const filteredHistoryRates = data[0].rates.filter(
					(rate: ExchangeRate) =>
						rate.code === 'USD' || rate.code === 'EUR' || rate.code === 'CHF' || rate.code === 'GBP'
				)

				setHistoryRate(filteredHistoryRates)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}

		fetchHistoryRates(checkDate)
	}, [checkDate])

	const handleChangeDate = (e: string) => {
		setCheckDate(e)
		setError(null)
	}

	const handleResetDate = () => {
		setCheckDate(historyDate)
		setError(null)
	}

	return { historyDate, checkDate, handleChangeDate, handleResetDate, loading, error, historyRate }
}

export default useHistoryExchageRate

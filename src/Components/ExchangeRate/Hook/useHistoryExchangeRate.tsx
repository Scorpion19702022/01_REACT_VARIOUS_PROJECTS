import { useEffect, useState } from 'react'
import { ExchangeRate } from '../Types/Types'

const useHistoryExchageRate = () => {
	let currentDate = new Date()

	let dayOfWeek = currentDate.getDay()
	let hour = currentDate.getHours()

	// if (hour <= 12) {
	// 	currentDate.setDate(currentDate.getDate() - 1)
	// } else {
	// 	currentDate.setDate(currentDate.getDate() - 1)
	// }

	if (hour <= 12) {
		currentDate.setDate(currentDate.getDate() - 1)
	} else if (dayOfWeek === 5) {
		currentDate.setDate(currentDate.getDate() - 1)
	} else if (dayOfWeek === 6) {
		currentDate.setDate(currentDate.getDate() - 2)
	} else if (dayOfWeek === 0 && hour > 12) {
		currentDate.setDate(currentDate.getDate() - 2)
	} else if (dayOfWeek === 0 && hour <= 12) {
		currentDate.setDate(currentDate.getDate() - 3)
	} else {
		currentDate.setDate(currentDate.getDate() - 1)
	}

	let previousDate = currentDate.toISOString().split('T')[0]

	const [historyDate, setHistoryDate] = useState<string>(previousDate)

	const [checkDate, setCheckDate] = useState<string>(historyDate)

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [noDataMessage, setNoDataMessage] = useState<string | null>(null)

	const [historyRate, setHistoryRate] = useState<ExchangeRate[]>([])

	useEffect(() => {
		const historyDataURL = `https://api.nbp.pl/api/exchangerates/tables/A/${checkDate}
		`

		const fetchHistoryRates = async () => {
			try {
				const response = await fetch(historyDataURL)
				if (!response.ok) {
					if (response.status === 404) {
						setNoDataMessage(`${checkDate} był dniem światecznym. Kurs z dnia ostatniej publikacji`)
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

		fetchHistoryRates()
	}, [checkDate])

	const handleChangeDate = (e: string) => {
		setCheckDate(e)
		setNoDataMessage(null)
		setError(null)
	}

	const handleResetDate = () => {
		setCheckDate(historyDate)
		setNoDataMessage(null)
		setError(null)
	}

	return { historyDate, checkDate, handleChangeDate, handleResetDate, loading, error, noDataMessage, historyRate }
}

export default useHistoryExchageRate

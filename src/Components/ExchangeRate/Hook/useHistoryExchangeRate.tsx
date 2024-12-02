import { useEffect, useState } from 'react'

const useHistoryExchageRate = () => {
	let currentDate = new Date()

	currentDate.setDate(currentDate.getDate() - 1)

	let dayOfWeek = currentDate.getDay()
	let hour = currentDate.getHours()

	console.log(dayOfWeek)

	if (dayOfWeek === 5) {
		currentDate.setDate(currentDate.getDate() - 1)
	} else if (dayOfWeek === 6) {
		currentDate.setDate(currentDate.getDate() - 2)
	} else if (dayOfWeek === 0 && hour > 12) {
		currentDate.setDate(currentDate.getDate() - 2)
	} else if (dayOfWeek === 0 && hour <= 12) {
		currentDate.setDate(currentDate.getDate() - 3)
	}

	let previousDate = currentDate.toISOString().split('T')[0]

	const [historyDate, setHistoryDate] = useState<string>(previousDate)

	const [checkDate, setCheckDate] = useState<string>(historyDate)

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [noDataMessage, setNoDataMessage] = useState<string | null>(null)

	const handleChangeDate = (e: string) => {
		setCheckDate(e)
	}

	const handleResetDate = () => {
		setCheckDate(historyDate)
	}

	useEffect(() => {
		const historyDataURL = `https://api.nbp.pl/api/exchangerates/tables/A/${checkDate}`

		const fetchHistoryRates = async () => {
			try {
				const response = await fetch(historyDataURL)
				if (!response.ok) {
					if (response.status === 404) {
						setNoDataMessage(`Brak danych dla wybranej daty: ${checkDate}`)
						return
					}
					throw new Error('Błąd pobrania danych')
				}
				const data = await response.json()

				console.log(data)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}

		fetchHistoryRates()
	}, [checkDate])

	console.log(noDataMessage)

	return { historyDate, checkDate, handleChangeDate, handleResetDate, loading, error, noDataMessage }
}

export default useHistoryExchageRate

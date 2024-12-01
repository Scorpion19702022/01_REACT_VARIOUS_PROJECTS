import { useEffect, useState } from 'react'

const useHistoryExchageRate = () => {
	let currentDate = new Date()

	currentDate.setDate(currentDate.getDate() - 1)

	let dayOfWeek = currentDate.getDay()

	console.log(dayOfWeek)

	if (dayOfWeek === 5) {
		currentDate.setDate(currentDate.getDate() - 1)
	} else if (dayOfWeek === 6) {
		currentDate.setDate(currentDate.getDate() - 2)
	}

	let previousDate = currentDate.toISOString().split('T')[0]

	const [historyDate, setHistoryDate] = useState<string>(previousDate)

	const [checkDate, setCheckDate] = useState<string>(historyDate)

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	// console.log(historyDate)

	console.log(checkDate)

	const handleChangeDate = (e: string) => {
		setCheckDate(e)
	}

	const handleResetDate = () => {
		setCheckDate(historyDate)
	}

	// useEffect(() => {

	// 	return () => {

	// 	};
	// }, []);

	// const historyDataURL = `https://api.nbp.pl/api/exchangerates/tables/A/${checkDate}`

	useEffect(() => {
		const historyDataURL = `https://api.nbp.pl/api/exchangerates/tables/A/${checkDate}`

		const fetchHistoryRates = async () => {
			try {
				const response = await fetch(historyDataURL)
				if (!response.ok) throw new Error('Błąd pobrania danych')
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

	return { historyDate, checkDate, handleChangeDate, handleResetDate, loading, error }
}

export default useHistoryExchageRate

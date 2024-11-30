import { useState } from 'react'

const useHistoryExchageRate = () => {
	let currentDate = new Date()

	currentDate.setDate(currentDate.getDate() - 1)

	let dayOfWeek = currentDate.getDay()

	if (dayOfWeek === 6) {
		currentDate.setDate(currentDate.getDate() - 2)
	} else if (dayOfWeek === 0) {
		currentDate.setDate(currentDate.getDate() - 3)
	}

	let previousDate = currentDate.toISOString().split('T')[0]

	const [historyDate, setHistoryDate] = useState<number | string>(previousDate)

	// const historyDataURL = 'https://api.nbp.pl/api/exchangerates/tables/A/2023-11-01/2023-11-22/'
	return { historyDate }
}

export default useHistoryExchageRate

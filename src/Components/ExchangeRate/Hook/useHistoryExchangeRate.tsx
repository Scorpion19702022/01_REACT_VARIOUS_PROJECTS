import { useState } from 'react'

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

	const [historyDate, setHistoryDate] = useState<number | string>(previousDate)

	// console.log(historyDate)

	// const historyDataURL = 'https://api.nbp.pl/api/exchangerates/tables/A/2023-11-01/2023-11-22/'

	const handleChangeDate = (e: string) => {
		setHistoryDate(e)
	}
	return { historyDate, handleChangeDate }
}

export default useHistoryExchageRate

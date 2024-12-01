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

	const [historyDate, setHistoryDate] = useState<string>(previousDate)

	const [checkDate, setCheckDate] = useState<string>(historyDate)

	// console.log(historyDate)

	// const historyDataURL = 'https://api.nbp.pl/api/exchangerates/tables/A/2023-11-01/2023-11-22/'

	const handleChangeDate = (e: string) => {
		setCheckDate(e)
	}

	const handleResetDate = () => {
		setCheckDate(historyDate)
	}
	return { historyDate, checkDate, handleChangeDate, handleResetDate }
}

export default useHistoryExchageRate

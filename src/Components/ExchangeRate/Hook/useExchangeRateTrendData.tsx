import { useState } from 'react'

const useExchangeRateTrendData = () => {
	const currentDate = new Date()

	let endDateTrend = currentDate.toISOString().split('T')[0]
	let startDate = currentDate.setDate(currentDate.getDate() - 14)

	console.log(startDate)

	const [useEndDate, setUseEndDate] = useState<string>(endDateTrend)

	return { useEndDate }
}

export default useExchangeRateTrendData

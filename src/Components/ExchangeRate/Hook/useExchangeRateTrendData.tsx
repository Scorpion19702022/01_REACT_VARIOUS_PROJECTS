import { useEffect, useState } from 'react'

const useExchangeRateTrendData = () => {
	const currentDate = new Date()

	let startDate = new Date()

	let endDateTrend = currentDate.toISOString().split('T')[0]
	let startDateTrend = startDate.toISOString().split('T')[0]

	const [useEndDate, setUseEndDate] = useState<string>(endDateTrend)
	const [useStartDate, setUseStartDate] = useState<string>('')

	if (startDateTrend === endDateTrend) {
		startDate.setDate(startDate.getDate() - 12)
		setUseStartDate(startDateTrend)
	}

	console.log(useStartDate)

	return { useEndDate }
}

export default useExchangeRateTrendData

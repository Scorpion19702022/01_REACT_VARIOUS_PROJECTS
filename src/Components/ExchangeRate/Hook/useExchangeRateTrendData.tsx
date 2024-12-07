import { useState } from 'react'

const useExchangeRateTrendData = () => {
	const endDate = new Date()
	const startDate = new Date()

	startDate.setDate(endDate.getDate() - 14)

	let endDateTrend = endDate.toISOString().split('T')[0]

	const [useEndDate, setUseEndDate] = useState<string>(endDateTrend)

	return { useEndDate }
}

export default useExchangeRateTrendData

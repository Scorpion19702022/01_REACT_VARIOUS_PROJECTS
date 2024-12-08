import { useEffect, useState } from 'react'

const useExchangeRateTrendData = () => {
	const [useEndDate, setUseEndDate] = useState<string>('')
	const [useStartDate, setUseStartDate] = useState<string>('')

	useEffect(() => {
		const currentDate = new Date()
		const startDate = new Date()
		startDate.setDate(currentDate.getDate() - 14)

		const endDateTrend = currentDate.toISOString().split('T')[0]
		const startDateTrend = startDate.toISOString().split('T')[0]

		setUseEndDate(endDateTrend)
		setUseStartDate(startDateTrend)
	}, [])

	return { useEndDate, useStartDate }
}

export default useExchangeRateTrendData

export interface ExchangeRate {
	currency: string
	code: string
	mid: number
}

export interface UseExchangeRateReturn {
	todayRates: ExchangeRate[]
	loading: boolean
	error: string | null
}

export interface TrendData {
	effectiveData: string
	rates: ExchangeRate[]
}

export type FilteredTrendData = Record<string, { date: string; value: number }[]>

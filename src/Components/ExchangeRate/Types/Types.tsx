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

export type TrendData = {
	table: string
	no: string
	effectiveDate: string
	rates: {
		currency: string
		code: string
		mid: number
	}[]
}

export type FilteredTrendData = Record<string, { date: string; value: number }[]>

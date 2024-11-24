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

import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect } from 'react'

type InitialStateType = {}

type SnackBarProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const SnackBarContext = createContext(InitialState)

export const SnackBarProvider = ({ children }: SnackBarProviderType) => {
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/db/snackBarProducts.json')
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				const data = await response.json()
				console.log(data)
			} catch (error) {
				console.error('Error fetching products', error)
			}
		}

		fetchProducts()
	}, [])

	return (
		<SnackBarContext.Provider value={{}}>
			{children}
			<Analytics />
		</SnackBarContext.Provider>
	)
}

export default SnackBarContext

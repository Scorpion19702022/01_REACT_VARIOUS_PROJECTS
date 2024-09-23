import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect, useState } from 'react'
import { TypeForSnackBar } from '../Types/TypeForSnackBar'

type InitialStateType = {
	products: TypeForSnackBar[]
	selectProducts: string
	handleSelectProducts: (isSelect: string) => void
}

type SnackBarProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	products: [],
	selectProducts: 'main',
	handleSelectProducts: (isSelect: string) => {},
}

const SnackBarContext = createContext(InitialState)

export const SnackBarProvider = ({ children }: SnackBarProviderType) => {
	const [products, setProducts] = useState<TypeForSnackBar[]>([])
	const [selectProducts, setSelectProducts] = useState<string>('main')

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/db/snackBarProducts.json')
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				const data = await response.json()
				setProducts(data.products)
			} catch (error) {
				console.error('Error fetching products', error)
			}
		}

		fetchProducts()
	}, [])

	const handleSelectProducts = (isSelect: string) => {
		setSelectProducts(isSelect)
	}

	return (
		<SnackBarContext.Provider
			value={{
				products,
				selectProducts,
				handleSelectProducts,
			}}
		>
			{children}
			<Analytics />
		</SnackBarContext.Provider>
	)
}

export default SnackBarContext

import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect, useState } from 'react'
import { TypeForSnackBar } from '../Types/TypeForSnackBar'

type InitialStateType = {
	products: TypeForSnackBar[]
	orderProducts: TypeForSnackBar[]
	orderCost: TypeForSnackBar[]
	selectProducts: string
	handleSelectProducts: (isSelect: string) => void
	handleOrderProducts: (id: number) => void
}

type SnackBarProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	products: [],
	orderProducts: [],
	orderCost: [],
	selectProducts: 'main',
	handleSelectProducts: (isSelect: string) => {},
	handleOrderProducts: (id: number) => {},
}

const SnackBarContext = createContext(InitialState)

export const SnackBarProvider = ({ children }: SnackBarProviderType) => {
	const [products, setProducts] = useState<TypeForSnackBar[]>([])
	const [orderProducts, setOrderProducts] = useState<TypeForSnackBar[]>([])
	const [orderCost, setOrderCost] = useState<TypeForSnackBar[]>([])
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

	const handleOrderProducts = (id: number) => {
		const order = products.find(item => item.id === id)
		console.log(order)
	}

	return (
		<SnackBarContext.Provider
			value={{
				products,
				orderProducts,
				orderCost,
				selectProducts,
				handleSelectProducts,
				handleOrderProducts,
			}}
		>
			{children}
			<Analytics />
		</SnackBarContext.Provider>
	)
}

export default SnackBarContext

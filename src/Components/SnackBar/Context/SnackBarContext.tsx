import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect, useState } from 'react'
import { TypeForSnackBar } from '../Types/TypeForSnackBar'

type InitialStateType = {
	products: TypeForSnackBar[]
	btnIsActiveMain: boolean
	btnIsActiveDesserts: boolean
	btnIsActiveDrinks: boolean
	handleSelectProducts: (isSelect: string) => void
}

type SnackBarProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	products: [],
	btnIsActiveMain: false,
	btnIsActiveDesserts: false,
	btnIsActiveDrinks: false,
	handleSelectProducts: (isSelect: string) => {},
}

const SnackBarContext = createContext(InitialState)

export const SnackBarProvider = ({ children }: SnackBarProviderType) => {
	const [products, setProducts] = useState<TypeForSnackBar[]>([])
	const [btnIsActiveMain, setBtnIsActiveMain] = useState<boolean>(true)
	const [btnIsActiveDesserts, setBtnIsActiveDesserts] = useState<boolean>(false)
	const [btnIsActiveDrinks, setBtnIsActiveDrinks] = useState<boolean>(false)

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
		if (isSelect === 'main') {
			setBtnIsActiveMain(true)
			setBtnIsActiveDesserts(false)
			setBtnIsActiveDrinks(false)
		} else if (isSelect === 'desserts') {
			setBtnIsActiveMain(false)
			setBtnIsActiveDesserts(true)
			setBtnIsActiveDrinks(false)
		} else if (isSelect === 'drinks') {
			setBtnIsActiveMain(false)
			setBtnIsActiveDesserts(false)
			setBtnIsActiveDrinks(true)
		}
	}

	return (
		<SnackBarContext.Provider
			value={{ products, btnIsActiveMain, btnIsActiveDesserts, btnIsActiveDrinks, handleSelectProducts }}
		>
			{children}
			<Analytics />
		</SnackBarContext.Provider>
	)
}

export default SnackBarContext

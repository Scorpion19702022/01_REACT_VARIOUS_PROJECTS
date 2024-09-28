import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect, useState } from 'react'
import { TypeForSnackBar } from '../Types/TypeForSnackBar'

type InitialStateType = {
	products: TypeForSnackBar[]
	orderProducts: TypeForSnackBar[]
	orderCost: TypeForSnackBar[]
	selectProducts: string
	orderQuantityProducts: string
	orderNameProduct: string
	servicePopup: boolean
	deleteAllOrderTextInfo: string
	handleSelectProducts: (isSelect: string) => void
	handleOrderProducts: (id: number, product: string, price: number) => void
	handleVisiblePopup: (popup: string) => void
	handleDeleteAllOrder: () => void
	handleClosePopup: () => void
}

type SnackBarProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	products: [],
	orderProducts: [],
	orderCost: [],
	selectProducts: 'main',
	orderQuantityProducts: '',
	orderNameProduct: '',
	servicePopup: false,
	deleteAllOrderTextInfo: '',
	handleSelectProducts: (isSelect: string) => {},
	handleOrderProducts: (id: number, product: string, price: number) => {},
	handleVisiblePopup: (popup: string) => {},
	handleDeleteAllOrder: () => {},
	handleClosePopup: () => {},
}

const SnackBarContext = createContext(InitialState)

export const SnackBarProvider = ({ children }: SnackBarProviderType) => {
	const [products, setProducts] = useState<TypeForSnackBar[]>([])
	const [orderProducts, setOrderProducts] = useState<TypeForSnackBar[]>([])
	const [orderCost, setOrderCost] = useState<TypeForSnackBar[]>([])
	const [selectProducts, setSelectProducts] = useState<string>('main')
	const [orderQuantityProducts, setOrderQuantityProducts] = useState<string>('produktów')
	const [orderNameProduct, setOrderNameProduct] = useState<string>('brak zamówiemia')
	const [servicePopup, setServicePopup] = useState<boolean>(false)
	const [deleteAllOrderTextInfo, setDeleteAllOrderTextInfo] = useState<string>('')

	useEffect(() => {
		if (orderProducts.length === 1) {
			return setOrderQuantityProducts('produkt')
		} else if (orderProducts.length > 1 && orderProducts.length < 5) {
			return setOrderQuantityProducts('produkty')
		} else {
			return setOrderQuantityProducts('produktów')
		}
	}, [orderProducts.length])

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

	useEffect(() => {
		if (orderProducts.length > 0) {
			setTimeout(() => {
				setOrderNameProduct('złóż kolejne zamówienie')
			}, 2500)
		}
	}, [orderProducts.length])

	const handleOrderProducts = (id: number, product: string, price: number) => {
		const order = products.find(item => item.id === id)
		if (order) {
			setOrderProducts([...orderProducts, order])
			setOrderNameProduct(`zamówiłaś/eś ${product}`)
		}
	}

	const handleVisiblePopup = (popup: string) => {
		if (popup === 'deleteAll' && orderProducts.length > 0) {
			setServicePopup(true)
			setOrderNameProduct('stan anulowania zamówienia')
			setDeleteAllOrderTextInfo('Czy jesteś pewna/pewien, że chcesz zrezygnować z całego zamówienia?')
		} else if (popup === 'deleteAll' && orderProducts.length === 0) {
			setServicePopup(false)
			setOrderNameProduct('niczego jeszcze nie zamówiłeś')
			setTimeout(() => {
				setOrderNameProduct('brak zamówieia')
			}, 2500)
		}
	}

	const handleClosePopup = () => {
		setServicePopup(false)
	}

	const handleDeleteAllOrder = () => {
		setOrderProducts([])
		setServicePopup(false)
		setOrderNameProduct('zrezygnowałaś z zamówienia')
		setTimeout(() => {
			setOrderNameProduct('brak zamówienia')
		}, 2500)
	}

	return (
		<SnackBarContext.Provider
			value={{
				products,
				orderProducts,
				orderCost,
				selectProducts,
				orderQuantityProducts,
				orderNameProduct,
				servicePopup,
				deleteAllOrderTextInfo,
				handleSelectProducts,
				handleOrderProducts,
				handleVisiblePopup,
				handleDeleteAllOrder,
				handleClosePopup,
			}}
		>
			{children}
			<Analytics />
		</SnackBarContext.Provider>
	)
}

export default SnackBarContext

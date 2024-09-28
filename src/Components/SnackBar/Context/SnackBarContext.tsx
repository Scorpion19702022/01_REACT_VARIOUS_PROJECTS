import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect, useState } from 'react'
import { TypeForSnackBar } from '../Types/TypeForSnackBar'

type InitialStateType = {
	products: TypeForSnackBar[]
	orderProducts: TypeForSnackBar[]
	selectProducts: string
	orderCost: number
	orderQuantityProducts: string
	orderNameProduct: string
	servicePopup: boolean
	sureDeleteOrder: boolean
	deleteAllOrderTextInfo: string
	handleSelectProducts: (isSelect: string) => void
	handleOrderProducts: (id: number, product: string) => void
	handleVisiblePopup: (popup: string) => void
	handleDeleteAllOrder: () => void
	handleDeleteProductOrder: (id: number, product: string) => void
	handleClosePopup: () => void
}

type SnackBarProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	products: [],
	orderProducts: [],
	selectProducts: 'main',
	orderCost: 0,
	orderQuantityProducts: '',
	orderNameProduct: '',
	servicePopup: false,
	sureDeleteOrder: false,
	deleteAllOrderTextInfo: '',
	handleSelectProducts: (isSelect: string) => {},
	handleOrderProducts: (id: number, product: string) => {},
	handleVisiblePopup: (popup: string) => {},
	handleDeleteAllOrder: () => {},
	handleDeleteProductOrder: (id: number, product: string) => {},
	handleClosePopup: () => {},
}

const SnackBarContext = createContext(InitialState)

export const SnackBarProvider = ({ children }: SnackBarProviderType) => {
	const [products, setProducts] = useState<TypeForSnackBar[]>([])
	const [orderProducts, setOrderProducts] = useState<TypeForSnackBar[]>([])
	const [selectProducts, setSelectProducts] = useState<string>('main')
	const [orderCost, setOrderCost] = useState<number>(0)
	const [orderQuantityProducts, setOrderQuantityProducts] = useState<string>('produktów')
	const [orderNameProduct, setOrderNameProduct] = useState<string>('brak zamówiemia')
	const [servicePopup, setServicePopup] = useState<boolean>(false)
	const [sureDeleteOrder, setSureDeleteOrder] = useState<boolean>(false)
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

	useEffect(() => {
		const yourCost = orderProducts.map(item => item.price)
		setOrderCost(yourCost.reduce((accumulate: any, current: any) => accumulate + current, 0))
	}, [orderProducts])

	const handleOrderProducts = (id: number, product: string) => {
		const order = products.find(item => item.id === id)
		if (order) {
			setOrderProducts([...orderProducts, order])
			setOrderNameProduct(`${product}`)
		}
	}

	const handleVisiblePopup = (popup: string) => {
		if (popup === 'deleteAll' && orderProducts.length > 0) {
			setServicePopup(true)
			setSureDeleteOrder(false)
			setOrderNameProduct('stan anulowania całego zamówienia')
			setDeleteAllOrderTextInfo('Czy jesteś pewna/pewien, że chcesz zrezygnować z całego zamówienia?')
		} else if (popup === 'deleteAll' && orderProducts.length === 0) {
			setServicePopup(false)
			setSureDeleteOrder(false)
			setOrderNameProduct('niczego jeszcze nie zamówiłaś/eś')
			setTimeout(() => {
				setOrderNameProduct('brak zamówieia')
			}, 2500)
		} else if (popup === 'deleteOrder') {
			setSureDeleteOrder(true)
			setOrderNameProduct('stan anulowania zamówieia')
			setDeleteAllOrderTextInfo('Czy jesteś pewna/pewien, że chcesz zrezygnować z zamówienia:')
		} else if (popup !== 'deleteOrder') {
			setSureDeleteOrder(false)
		}
	}

	const handleClosePopup = () => {
		setServicePopup(false)
		setSureDeleteOrder(false)
		setOrderNameProduct('złóż kolejne zamówienie')
	}

	const handleDeleteAllOrder = () => {
		setOrderProducts([])
		setServicePopup(false)
		setOrderNameProduct('zrezygnowałaś z zamówienia')
		setTimeout(() => {
			setOrderNameProduct('brak zamówienia')
		}, 2500)
	}

	useEffect(() => {
		if (orderProducts.length === 0) {
			setTimeout(() => {
				setOrderNameProduct('brak zamówienia')
			}, 2500)
		}
	}, [orderProducts.length])

	const handleDeleteProductOrder = (id: number, product: string) => {
		const deleteOrderProduct = orderProducts.filter(item => item.id !== id)
		setOrderProducts(deleteOrderProduct)
		setSureDeleteOrder(false)
		setOrderNameProduct(`zrezygnowałaś/eś z: ${product}`)
		setTimeout(() => {
			if (orderProducts.length > 0) {
				setOrderNameProduct('złóż kolejne zamówienie')
			} else if (orderProducts.length === 0) {
				setOrderNameProduct('brak zamówienia')
			}
		}, 2500)
	}

	return (
		<SnackBarContext.Provider
			value={{
				products,
				orderProducts,
				selectProducts,
				orderCost,
				orderQuantityProducts,
				orderNameProduct,
				servicePopup,
				sureDeleteOrder,
				deleteAllOrderTextInfo,
				handleSelectProducts,
				handleOrderProducts,
				handleVisiblePopup,
				handleDeleteAllOrder,
				handleDeleteProductOrder,
				handleClosePopup,
			}}
		>
			{children}
			<Analytics />
		</SnackBarContext.Provider>
	)
}

export default SnackBarContext

import { Analytics } from '@vercel/analytics/react'
import React, { createContext, useEffect, useState } from 'react'
import { TypeForSnackBar } from '../Types/TypeForSnackBar'

type InitialStateType = {
	products: TypeForSnackBar[]
	orderProducts: TypeForSnackBar[]
	sendOrder: TypeForSnackBar[]
	selectProducts: string
	orderCost: number
	orderQuantityProducts: string
	orderNameProduct: string
	servicePopup: boolean
	sureDeleteOrder: boolean
	sureSend: boolean
	statusOrder: boolean
	deleteAllOrderTextInfo: string
	smallOrder: number
	middleOrder: number
	bigOrder: number
	handleSelectProducts: (isSelect: string) => void
	handleOrderProducts: (id: number, product: string) => void
	handleVisiblePopup: (popup: string) => void
	handleDeleteAllOrder: () => void
	handleDeleteProductOrder: (id: number, product: string) => void
	handleClosePopup: () => void
	handleSendOrder: () => void
	handleSureSend: () => void
	handleCheckStatus: () => void
}

type SnackBarProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	products: [],
	orderProducts: [],
	sendOrder: [],
	selectProducts: 'main',
	orderCost: 0,
	orderQuantityProducts: '',
	orderNameProduct: '',
	servicePopup: false,
	sureDeleteOrder: false,
	sureSend: false,
	statusOrder: false,
	deleteAllOrderTextInfo: '',
	smallOrder: 2,
	middleOrder: 4,
	bigOrder: 7,
	handleSelectProducts: (isSelect: string) => {},
	handleOrderProducts: (id: number, product: string) => {},
	handleVisiblePopup: (popup: string) => {},
	handleDeleteAllOrder: () => {},
	handleDeleteProductOrder: (id: number, product: string) => {},
	handleClosePopup: () => {},
	handleSendOrder: () => {},
	handleSureSend: () => {},
	handleCheckStatus: () => {},
}

const SnackBarContext = createContext(InitialState)

export const SnackBarProvider = ({ children }: SnackBarProviderType) => {
	const [products, setProducts] = useState<TypeForSnackBar[]>([])
	const [orderProducts, setOrderProducts] = useState<TypeForSnackBar[]>([])
	const [sendOrder, setSendOrder] = useState<TypeForSnackBar[]>([])
	const [selectProducts, setSelectProducts] = useState<string>('main')
	const [orderCost, setOrderCost] = useState<number>(0)
	const [orderQuantityProducts, setOrderQuantityProducts] = useState<string>('produktów')
	const [orderNameProduct, setOrderNameProduct] = useState<string>('brak zamówiemia')
	const [servicePopup, setServicePopup] = useState<boolean>(false)
	const [sureDeleteOrder, setSureDeleteOrder] = useState<boolean>(false)
	const [sureSend, setSureSend] = useState<boolean>(false)
	const [statusOrder, setStatusOrder] = useState<boolean>(false)
	const [deleteAllOrderTextInfo, setDeleteAllOrderTextInfo] = useState<string>('')

	const [smallOrder, setSmallOrder] = useState<number>(2)
	const [middleOrder, setMiddleOrder] = useState<number>(4)
	const [bigOrder, setBigOrder] = useState<number>(7)

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
		setSureSend(false)
		setStatusOrder(false)
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
		if (orderProducts.length === 0 && sendOrder.length === 0) {
			setTimeout(() => {
				setOrderNameProduct('brak zamówienia')
			}, 2500)
		}
	}, [orderProducts.length, sendOrder.length])

	const handleDeleteProductOrder = (id: number, product: string) => {
		const deleteOrderProduct = orderProducts.filter(item => item.id !== id)
		setOrderProducts(deleteOrderProduct)
		setSureDeleteOrder(false)
		setOrderNameProduct(`zrezygnowałaś/eś z: ${product}`)
		setTimeout(() => {
			if (orderProducts.length > 0 && sendOrder.length === 0) {
				setOrderNameProduct('złóż kolejne zamówienie')
			} else if (orderProducts.length === 0 && sendOrder.length === 0) {
				setOrderNameProduct('brak zamówienia')
			}
		}, 2500)
	}

	// useEffect(() => {
	// 	if (sendOrder.length > 0 && sendOrder.length <= 5) {
	// 		const interval = setInterval(() => {
	// 			setSmallOrder(smallOrder - 1)
	// 			setOrderNameProduct(`zamówienie za ${smallOrder} min.`)
	// 		}, 100)
	// 		if (smallOrder === 0) {
	// 			clearInterval(interval)
	// 		}
	// 	} else if (sendOrder.length > 5 && sendOrder.length <= 10) {
	// 		const interval = setInterval(() => {
	// 			setMiddleOrder(middleOrder - 1)
	// 			setOrderNameProduct(`zamówienie za ${middleOrder} min.`)
	// 		}, 100)
	// 		if (middleOrder === 0) {
	// 			clearInterval(interval)
	// 		}
	// 	} else if (sendOrder.length > 10) {
	// 		const interval = setInterval(() => {
	// 			setBigOrder(bigOrder - 1)
	// 			setOrderNameProduct(`zamówienie za ${bigOrder} min.`)
	// 		}, 100)
	// 		if (bigOrder === 0) {
	// 			clearInterval(interval)
	// 		}
	// 	}
	// }, [sendOrder.length, smallOrder, middleOrder, bigOrder])

	const handleSendOrder = () => {
		setSendOrder(orderProducts)
		setOrderProducts([])
		setSureSend(false)
	}

	const handleSureSend = () => {
		if (orderProducts.length > 0) {
			setSureSend(true)
			setDeleteAllOrderTextInfo('Czy jesteś pewna/pewien, że chcesz wysłać zamówienie?')
		}
	}

	useEffect(() => {
		if (sendOrder.length > 0 && sendOrder.length < 5) {
			setDeleteAllOrderTextInfo('Czas realizacji')
		}
	}, [])

	const handleCheckStatus = () => {
		if (sendOrder.length > 0) {
			setStatusOrder(true)
			setDeleteAllOrderTextInfo('Twoje zamówieie jest w toku')
		} else if (sendOrder.length === 0) {
			setStatusOrder(false)
			setDeleteAllOrderTextInfo('Twoje zamówieie zostało zrealizowane')
		}
	}

	return (
		<SnackBarContext.Provider
			value={{
				products,
				orderProducts,
				sendOrder,
				selectProducts,
				orderCost,
				orderQuantityProducts,
				orderNameProduct,
				servicePopup,
				sureDeleteOrder,
				sureSend,
				statusOrder,
				deleteAllOrderTextInfo,
				smallOrder,
				middleOrder,
				bigOrder,
				handleSelectProducts,
				handleOrderProducts,
				handleVisiblePopup,
				handleDeleteAllOrder,
				handleDeleteProductOrder,
				handleClosePopup,
				handleSendOrder,
				handleSureSend,
				handleCheckStatus,
			}}
		>
			{children}
			<Analytics />
		</SnackBarContext.Provider>
	)
}

export default SnackBarContext

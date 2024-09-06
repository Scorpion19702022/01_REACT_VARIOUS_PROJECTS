import React, { createContext, useState } from 'react'

type initiallStateType = {
	tall: number | null
	weight: number | null
}

type BmiTypeProvider = {
	children: React.ReactNode
}

const initialState: initiallStateType = {
	tall: null,
	weight: null,
}

const BmiContext = createContext(initialState)

export const BmiProvider = ({ children }: BmiTypeProvider) => {
	const [tall, setTall] = useState<number | null>(null)
	const [weight, setWeight] = useState<number | null>(null)

	return <BmiContext.Provider value={{ tall, weight }}>{children}</BmiContext.Provider>
}

export default BmiContext

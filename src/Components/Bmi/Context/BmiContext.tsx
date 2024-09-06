import React, { createContext, useState } from 'react'

type initiallStateType = {
	tall: string | null
	weight: string | null
	handleChangeTall: (e: string) => void
	handleChangeWeight: (e: string) => void
}

type BmiTypeProvider = {
	children: React.ReactNode
}

const initialState: initiallStateType = {
	tall: '',
	weight: '',
	handleChangeTall: (e: string) => {},
	handleChangeWeight: (e: string) => {},
}

const BmiContext = createContext(initialState)

export const BmiProvider = ({ children }: BmiTypeProvider) => {
	const [tall, setTall] = useState<string | null>(null)
	const [weight, setWeight] = useState<string | null>(null)

	const handleChangeTall = (e: string) => {
		setTall(e)
	}

	const handleChangeWeight = (e: string) => {
		setWeight(e)
	}

	return (
		<BmiContext.Provider value={{ tall, weight, handleChangeTall, handleChangeWeight }}>{children}</BmiContext.Provider>
	)
}

export default BmiContext

import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStageType = {
	selectCity: string
	handleChangeCity: (e: string) => void
}

type DemographyTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStageType = {
	selectCity: '',
	handleChangeCity: (e: string) => {},
}

const DemographyContext = createContext(InitialState)

export const DemographyProvider = ({ children }: DemographyTypeProvider) => {
	const [selectCity, setSelectCity] = useState('Warszawa')

	const handleChangeCity = (e: string) => {
		setSelectCity(e)
	}

	console.log(selectCity)

	return (
		<DemographyContext.Provider value={{ selectCity, handleChangeCity }}>
			{children}
			<Analytics />
		</DemographyContext.Provider>
	)
}

export default DemographyContext

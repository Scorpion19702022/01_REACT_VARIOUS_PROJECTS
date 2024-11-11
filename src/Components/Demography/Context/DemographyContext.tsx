import React, { createContext, useEffect, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { CitiesDemography, CityDemography } from '../Types/TypeForCitiesData'
import useCitiesDemography from '../Hook/useCitiesDemography'

type InitialStageType = {
	selectCity: string
	handleChangeCity: (e: string) => void
	ListCitiesDemography: CitiesDemography
	cityDemography: CityDemography[]
}

type DemographyTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStageType = {
	selectCity: '',
	handleChangeCity: (e: string) => {},
	ListCitiesDemography: [],
	cityDemography: [],
}

const DemographyContext = createContext(InitialState)

export const DemographyProvider = ({ children }: DemographyTypeProvider) => {
	const { ListCitiesDemography } = useCitiesDemography()

	const [selectCity, setSelectCity] = useState('Warszawa')
	const [cityDemography, setCityDemography] = useState<CityDemography[]>([])

	const handleChangeCity = (e: string) => {
		setSelectCity(e)
		const changeCity = ListCitiesDemography.find(item => item.city === e)
		if (changeCity?.city === e) {
			setCityDemography([changeCity])
		}
	}

	useEffect(() => {
		const changeCity = ListCitiesDemography.find(item => item.city === 'Warszawa')
		if (changeCity?.city === 'Warszawa') {
			setCityDemography([changeCity])
		}
	}, [])

	return (
		<DemographyContext.Provider value={{ selectCity, handleChangeCity, ListCitiesDemography, cityDemography }}>
			{children}
			<Analytics />
		</DemographyContext.Provider>
	)
}

export default DemographyContext

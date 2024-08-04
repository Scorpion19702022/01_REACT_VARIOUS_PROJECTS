import React, { createContext, useState } from 'react'

import Un from '../assets/unknown.png'
import Sun from '../assets/sun.png'
import FewClouds from '../assets/few_clouds.png'
import Cloud from '../assets/cloud.png'
import Rain from '../assets/rain.png'
import Thunder from '../assets/thunderstorm.png'
import Drizzle from '../assets/drizzle.png'
import Fog from '../assets/fog.png'
import Snow from '../assets/snow.png'
import { WeatherCityType } from '../Types/TypeForWeather'

type InitialStateType = {
	refresh: number
	citiesEurope: WeatherCityType[]
}

type EuropeProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,
	citiesEurope: [{ city: 'Reykjavík', img: Un, idWeather: 0, temp: 0, wind: 0 }],
}

const EuropeContext = createContext(InitialState)

export const EuropeProvider = ({ children }: EuropeProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)
	const [citiesEurope, setCitiesEurope] = useState([])

	return <EuropeContext.Provider value={{ refresh, citiesEurope }}>{children}</EuropeContext.Provider>
}

export default EuropeContext

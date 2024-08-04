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
	getWeatherImage: (idWeather: number) => void
}

type EuropeProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,
	citiesEurope: [{ city: 'Reykjavík', img: Un, idWeather: 0, temp: 0, wind: 0 }],
	getWeatherImage: (idWeather: number) => {},
}

const EuropeContext = createContext(InitialState)

export const EuropeProvider = ({ children }: EuropeProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)
	const [citiesEurope, setCitiesEurope] = useState<WeatherCityType[]>(InitialState.citiesEurope)

	const getWeatherImage = (idWeather: number) => {
		if (idWeather >= 200 && idWeather <= 232) {
			return Thunder
		} else if (idWeather >= 300 && idWeather <= 321) {
			return Drizzle
		} else if (idWeather >= 500 && idWeather <= 531) {
			return Rain
		} else if (idWeather >= 600 && idWeather <= 622) {
			return Snow
		} else if (idWeather >= 701 && idWeather <= 781) {
			return Fog
		} else if (idWeather === 800) {
			return Sun
		} else if (idWeather === 801) {
			return FewClouds
		} else if (idWeather > 801 && idWeather <= 804) {
			return Cloud
		} else {
			return Un
		}
	}

	const time = window.setTimeout(() => {
		setRefresh(refresh - 1)
	}, 60000)

	if (refresh === 0) {
		clearTimeout(time)
		setRefresh(10)
	}

	return <EuropeContext.Provider value={{ refresh, citiesEurope, getWeatherImage }}>{children}</EuropeContext.Provider>
}

export default EuropeContext

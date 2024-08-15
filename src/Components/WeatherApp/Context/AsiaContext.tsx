import React, { useEffect, createContext, useState } from 'react'

import Un from '../assets/unknown.png'
import Sun from '../assets/sun.png'
import FewClouds from '../assets/few_clouds.png'
import Cloud from '../assets/cloud.png'
import Rain from '../assets/rain.png'
import Thunder from '../assets/thunderstorm.png'
import Fog from '../assets/fog.png'
import Snow from '../assets/snow.png'
import { WeatherCityType } from '../Types/TypeForWeather'

type InitialStateType = {
	refresh: number
	// citiesPoland: WeatherCityType[]
	// getWeatherImage: (idWeather: number) => void
}

type AsiaProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,
	// citiesAsia: [
	// 	{ city: 'Szczecin', img: Un, idWeather: 0, temp: 0 },
	// ],
	// getWeatherImage: (idWeather: number) => {},
}

const AsiaContext = createContext(InitialState)

export const AsiaProvider = ({ children }: AsiaProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)

	const time = window.setTimeout(() => {
		setRefresh(refresh - 1)
	}, 60000)

	if (refresh === 0) {
		clearTimeout(time)
		setRefresh(10)
	}

	return (
		<AsiaContext.Provider
			value={{
				refresh,
			}}
		>
			{children}
		</AsiaContext.Provider>
	)
}

export default AsiaContext

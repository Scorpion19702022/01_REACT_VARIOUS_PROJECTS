import React, { createContext, useEffect, useState } from 'react'

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
	citiesEurope: [
		{ city: 'Reykjavík', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Oslo', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Kopenhaga', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Sztokholm', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Helsinki', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Dublin', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Glasgow', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Londyn', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Bruksela', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Amsterdam', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Berlin', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Lizbona', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Madryt', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Barcelona', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Paryż', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Rzym', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Ateny', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Wiedeń', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Ryga', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Moskwa', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Mińsk', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Warszawa', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Kijów', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Praga', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Bukareszt', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Ankara', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Zagrzeb', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Istanbul', img: Un, idWeather: 0, temp: 0 },
	],
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
			return Rain
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

	const API_LINK_EUROPE = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_EUROPE = `&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY_EUROPE}`

	const API_UNITS_EUROPE = '&units=metric'

	useEffect(() => {
		const cityWeatherEuropeApi = async (city: string, index: number) => {
			const URL = `${API_LINK_EUROPE}${city}${API_KEY_EUROPE}${API_UNITS_EUROPE}`
			try {
				const response = await fetch(URL)
				if (!response.ok) {
					throw new Error('error')
				}
				const data = await response.json()
				const codId = Object.assign({}, ...data.weather)
				const temp = data.main.temp.toFixed(1)
				// const wind = data.wind.speed.toFixed(0)

				setCitiesEurope(prevCities => {
					const updatedCities = [...prevCities]
					updatedCities[index] = {
						...updatedCities[index],
						idWeather: codId.id,
						temp: temp,
						img: getWeatherImage(codId.id),
					}
					return updatedCities
				})
			} catch (error) {
				console.log('error')
				setCitiesEurope(prevCities => {
					const updatedCities = [...prevCities]
					updatedCities[index] = {
						...updatedCities[index],
						city: 'ERROR',
						img: Un,
						temp: 'ERROR',
					}
					return updatedCities
				})
			}
		}
		citiesEurope.forEach((city, index) => {
			cityWeatherEuropeApi(city.city, index)
		})

		const interval = setInterval(() => {
			citiesEurope.forEach((city, index) => {
				cityWeatherEuropeApi(city.city, index)
			})
		}, 600000)

		return () => clearInterval(interval)
	}, [])

	return <EuropeContext.Provider value={{ refresh, citiesEurope, getWeatherImage }}>{children}</EuropeContext.Provider>
}

export default EuropeContext

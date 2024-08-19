import React, { createContext, useEffect, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'

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
	citiesOceania: WeatherCityType[]
	getWeatherImage: (idWeather: number) => void
}

type AfricaProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,
	citiesOceania: [
		{ city: 'Darwin', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Alice Springs', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Port Moresby', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Cairns', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Port Hedland', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Exmouth', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Perth', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Adelaide', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Werribee', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Sydney', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Canberra', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Hobart', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Brisbane', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Numea', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Wellington', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Auckland', img: Un, idWeather: 0, temp: 0 },
	],
	getWeatherImage: (idWeather: number) => {},
}

const OceaniaContext = createContext(InitialState)

export const OceaniaProvider = ({ children }: AfricaProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)
	const [citiesOceania, setCitiesOceania] = useState<WeatherCityType[]>(InitialState.citiesOceania)

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

	const API_LINK_OCEANIA = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_OCEANIA = `&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY_OCEANIA}`

	const API_UNITS_OCEANIA = '&units=metric'

	useEffect(() => {
		const cityWeatherOceaniaApi = async (city: string, index: number) => {
			const URL = `${API_LINK_OCEANIA}${city}${API_KEY_OCEANIA}${API_UNITS_OCEANIA}`
			try {
				const response = await fetch(URL)
				if (!response.ok) {
					throw new Error('error')
				}
				const data = await response.json()
				const codId = Object.assign({}, ...data.weather)
				const temp = data.main.temp.toFixed(1)
				// const wind = data.wind.speed.toFixed(0)

				console.log(data)

				setCitiesOceania(prevCities => {
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
				setCitiesOceania(prevCities => {
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
		citiesOceania.forEach((city, index) => {
			cityWeatherOceaniaApi(city.city, index)
		})

		const interval = setInterval(() => {
			citiesOceania.forEach((city, index) => {
				cityWeatherOceaniaApi(city.city, index)
			})
		}, 600000)

		return () => clearInterval(interval)
	}, [])

	return (
		<OceaniaContext.Provider value={{ refresh, citiesOceania, getWeatherImage }}>
			{children}
			<Analytics />
		</OceaniaContext.Provider>
	)
}

export default OceaniaContext

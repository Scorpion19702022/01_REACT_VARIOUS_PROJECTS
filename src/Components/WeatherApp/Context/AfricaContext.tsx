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
	citiesAfrica: WeatherCityType[]
	getWeatherImage: (idWeather: number) => void
}

type AfricaProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,
	citiesAfrica: [
		{ city: 'Nawakszut', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Rabat', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Algier', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Tunis', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Kair', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Dakar', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Bamako', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Abudża', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Monrovia', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Jaunde', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Kinszasa', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Luanda', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Luanda', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Kapsztad', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Pretoria', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Chartum', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Addis Abeba', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Mogadiszu', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Lusaka', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Antananarywa', img: Un, idWeather: 0, temp: 0 },
	],
	getWeatherImage: (idWeather: number) => {},
}

const AfricaContext = createContext(InitialState)

export const AfricaProvider = ({ children }: AfricaProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)
	const [citiesAfrica, setCitiesAfrica] = useState<WeatherCityType[]>(InitialState.citiesAfrica)

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

	const API_LINK_AFRICA = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_AFRICA = `&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY_AFRICA}`

	const API_UNITS_AFRICA = '&units=metric'

	useEffect(() => {
		const cityWeatherEuropeApi = async (city: string, index: number) => {
			const URL = `${API_LINK_AFRICA}${city}${API_KEY_AFRICA}${API_UNITS_AFRICA}`
			try {
				const response = await fetch(URL)
				if (!response.ok) {
					throw new Error('error')
				}
				const data = await response.json()
				const codId = Object.assign({}, ...data.weather)
				const temp = data.main.temp.toFixed(1)
				// const wind = data.wind.speed.toFixed(0)

				setCitiesAfrica(prevCities => {
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
				setCitiesAfrica(prevCities => {
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
		citiesAfrica.forEach((city, index) => {
			cityWeatherEuropeApi(city.city, index)
		})

		const interval = setInterval(() => {
			citiesAfrica.forEach((city, index) => {
				cityWeatherEuropeApi(city.city, index)
			})
		}, 600000)

		return () => clearInterval(interval)
	}, [])

	return (
		<AfricaContext.Provider value={{ refresh, citiesAfrica, getWeatherImage }}>
			{children}
			<Analytics />
		</AfricaContext.Provider>
	)
}

export default AfricaContext

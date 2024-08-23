import React, { useEffect, createContext, useState } from 'react'

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
	citiesPoland: WeatherCityType[]
	getWeatherImage: (idWeather: number) => void
}

type PolandProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,
	citiesPoland: [
		{ city: 'Szczecin', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Gdańsk', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Olsztyn', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Białystok', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Bydgoszcz', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Zielona Góra', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Poznań', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Wrocław', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Opole', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Katowice', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Kraków', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Rzeszów', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Warszawa', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Łódź', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Lublin', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Kielce', img: Un, idWeather: 0, temp: 0 },
	],
	getWeatherImage: (idWeather: number) => {},
}

const PolandContext = createContext(InitialState)

export const PolandProvider = ({ children }: PolandProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)
	const [citiesPoland, setCitiesPoland] = useState<WeatherCityType[]>(InitialState.citiesPoland)

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

	const API_LINK_POLAND = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_POLAND = `&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY_POLAND}`

	const API_UNITS_POLAND = '&units=metric'

	useEffect(() => {
		const cityWeatherPolandApi = async (city: string, index: number) => {
			const URL = `${API_LINK_POLAND}${city}${API_KEY_POLAND}${API_UNITS_POLAND}`
			try {
				const response = await fetch(URL)
				if (!response.ok) {
					throw new Error('error')
				}
				const data = await response.json()
				const codId = Object.assign({}, ...data.weather)
				const temp = data.main.temp.toFixed(1)
				// const wind = data.wind.speed.toFixed(1)

				setCitiesPoland(prevCities => {
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
				setCitiesPoland(prevCities => {
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
		citiesPoland.forEach((city, index) => {
			cityWeatherPolandApi(city.city, index)
		})

		const interval = setInterval(() => {
			citiesPoland.forEach((city, index) => {
				cityWeatherPolandApi(city.city, index)
			})
		}, 600000)

		return () => clearInterval(interval)
	}, [])

	return (
		<PolandContext.Provider
			value={{
				getWeatherImage,
				refresh,
				citiesPoland,
			}}
		>
			{children}
			<Analytics />
		</PolandContext.Provider>
	)
}

export default PolandContext

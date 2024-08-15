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
	citiesAsia: WeatherCityType[]
	getWeatherImage: (idWeather: number) => void
}

type AsiaProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,
	citiesAsia: [
		{ city: 'Tbilisi', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Astana', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Nowosybirsk', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Krasnojarsk', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Jakutsk', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Ułan Bator', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Władywostok', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Bejrut', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Jerozolima', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Bagdad', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Rijad', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Teheran', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Islamabad', img: Un, idWeather: 0, temp: 0 },
		{ city: 'New Delhi', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Bangkok', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Singapur', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Dżakarta', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Tokyo', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Seul', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Tajpej', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Pekin', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Manila', img: Un, idWeather: 0, temp: 0 },
	],
	getWeatherImage: (idWeather: number) => {},
}

const AsiaContext = createContext(InitialState)

export const AsiaProvider = ({ children }: AsiaProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)
	const [citiesAsia, setCitiesAsia] = useState<WeatherCityType[]>(InitialState.citiesAsia)

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

	const API_LINK_ASIA = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_ASIA = `&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY_ASIA}`

	const API_UNITS_ASIA = '&units=metric'

	useEffect(() => {
		const cityWeatherEuropeApi = async (city: string, index: number) => {
			const URL = `${API_LINK_ASIA}${city}${API_KEY_ASIA}${API_UNITS_ASIA}`
			try {
				const response = await fetch(URL)
				if (!response.ok) {
					throw new Error('error')
				}
				const data = await response.json()
				const codId = Object.assign({}, ...data.weather)
				const temp = data.main.temp.toFixed(1)

				setCitiesAsia(prevCities => {
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
				setCitiesAsia(prevCities => {
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
		citiesAsia.forEach((city, index) => {
			cityWeatherEuropeApi(city.city, index)
		})

		const interval = setInterval(() => {
			citiesAsia.forEach((city, index) => {
				cityWeatherEuropeApi(city.city, index)
			})
		}, 600000)

		return () => clearInterval(interval)
	}, [])

	return (
		<AsiaContext.Provider
			value={{
				refresh,
				citiesAsia,
				getWeatherImage,
			}}
		>
			{children}
		</AsiaContext.Provider>
	)
}

export default AsiaContext

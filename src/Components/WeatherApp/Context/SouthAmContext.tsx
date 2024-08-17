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
	citiesSouthAm: WeatherCityType[]
	getWeatherImage: (idWeather: number) => void
}

type SouthAmProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,
	citiesSouthAm: [
		{ city: 'Fairbanks', img: Un, idWeather: 0, temp: 0 },
		{ city: 'Vancouver', img: Un, idWeather: 0, temp: 0 },
	],
	getWeatherImage: (idWeather: number) => {},
}

const SouthAmContext = createContext(InitialState)

export const SouthAmProvider = ({ children }: SouthAmProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)
	const [citiesSouthAm, setCitiesSouthAm] = useState<WeatherCityType[]>(InitialState.citiesSouthAm)

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

	const API_LINK_SOUTHAM = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_SOUTHAM = `&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY_SOUTHAM}`

	const API_UNITS_SOUTHAM = '&units=metric'

	useEffect(() => {
		const cityWeatherEuropeApi = async (city: string, index: number) => {
			const URL = `${API_LINK_SOUTHAM}${city}${API_KEY_SOUTHAM}${API_UNITS_SOUTHAM}`
			try {
				const response = await fetch(URL)
				if (!response.ok) {
					throw new Error('error')
				}
				const data = await response.json()
				const codId = Object.assign({}, ...data.weather)
				const temp = data.main.temp.toFixed(1)
				// const wind = data.wind.speed.toFixed(0)

				setCitiesSouthAm(prevCities => {
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
				setCitiesSouthAm(prevCities => {
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
		citiesSouthAm.forEach((city, index) => {
			cityWeatherEuropeApi(city.city, index)
		})

		const interval = setInterval(() => {
			citiesSouthAm.forEach((city, index) => {
				cityWeatherEuropeApi(city.city, index)
			})
		}, 600000)

		return () => clearInterval(interval)
	}, [])

	return (
		<SouthAmContext.Provider value={{ refresh, citiesSouthAm, getWeatherImage }}>
			{children}
			<Analytics />
		</SouthAmContext.Provider>
	)
}

export default SouthAmContext

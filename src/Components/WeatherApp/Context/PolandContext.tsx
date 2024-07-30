import React, { useEffect, createContext, useState } from 'react'

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
	citiesPoland: WeatherCityType[]
	getWeatherImage: (idWeather: number) => void
}

type PolandProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,
	citiesPoland: [
		{ city: 'Szczecin', img: Un, idWeather: 0, temp: 0, wind: 0 },
		{ city: 'Gdańsk', img: Un, idWeather: 0, temp: 0, wind: 0 },
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

	const API_LINK_POLAND = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_POLAND = '&appid=24582e46fb113d7a512e20a446965d23'

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
				const temp = data.main.temp
				const wind = data.wind.speed.toFixed(1)

				setCitiesPoland(prevCities => {
					const updatedCities = [...prevCities]
					updatedCities[index] = {
						...updatedCities[index],
						idWeather: codId.id,
						temp: `${temp}℃`,
						wind: `${wind} km/h`,
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
						wind: 'ERROR',
					}
					return updatedCities
				})
			}
		}

		// Ustawienie interwału na 10 minut
		setInterval(() => {
			citiesPoland.forEach((city, index) => {
				cityWeatherPolandApi(city.city, index)
			})
		}, 600000)
	}, [])

	console.log(citiesPoland)

	// const [cityPol01, setCityPol01] = useState<string>('Szczecin')
	// const [imgPol01, setImgPol01] = useState<any>(Un)
	// const [idWeatherPol01, setIdWeatherPol01] = useState<number>(0)
	// const [tempPol01, setTempPol01] = useState<number | string>(0)
	// const [windPol01, setWindPol01] = useState<number | string>(0)

	// const URL_POLAND_01 = API_LINK_POLAND + cityPol01 + API_KEY_POLAND + API_UNITS_POLAND

	// useEffect(() => {
	// 	const cityPol01 = async () => {
	// 		try {
	// 			const response = await fetch(URL_POLAND_01)
	// 			if (!response.ok) {
	// 				throw new Error('error')
	// 			}
	// 			const data = await response.json()
	// 			console.log(data)
	// 			const codID = Object.assign({}, ...data.weather)
	// 			setIdWeatherPol01(codID.id)
	// 			const temp = data.main.temp
	// 			setTempPol01(`${temp.toFixed(1)}℃`)
	// 			const wind = data.wind.speed.toFixed(1)
	// 			setWindPol01(`${wind} km/h`)
	// 		} catch (error) {
	// 			console.log(error)
	// 			setCityPol01('ERROR')
	// 			setImgPol01(Un)
	// 			setTempPol01('ERROR')
	// 		}
	// 	}

	// 	cityPol01()

	// 	window.setInterval(() => {
	// 		cityPol01()
	// 	}, 600000)
	// }, [])

	// useEffect(() => {
	// 	if (idWeatherPol01 >= 200 && idWeatherPol01 <= 232) {
	// 		setImgPol01(Thunder)
	// 	} else if (idWeatherPol01 >= 300 && idWeatherPol01 <= 321) {
	// 		setImgPol01(Drizzle)
	// 	} else if (idWeatherPol01 >= 500 && idWeatherPol01 <= 531) {
	// 		setImgPol01(Rain)
	// 	} else if (idWeatherPol01 >= 600 && idWeatherPol01 <= 622) {
	// 		setImgPol01(Snow)
	// 	} else if (idWeatherPol01 >= 701 && idWeatherPol01 <= 781) {
	// 		setImgPol01(Fog)
	// 	} else if (idWeatherPol01 === 800) {
	// 		setImgPol01(Sun)
	// 	} else if (idWeatherPol01 === 801) {
	// 		setImgPol01(FewClouds)
	// 	} else if (idWeatherPol01 > 801 && idWeatherPol01 <= 804) {
	// 		setImgPol01(Cloud)
	// 	} else {
	// 		setImgPol01(Un)
	// 	}
	// }, [idWeatherPol01])

	return (
		<PolandContext.Provider
			value={{
				getWeatherImage,
				refresh,
				citiesPoland,
			}}
		>
			{children}
		</PolandContext.Provider>
	)
}

export default PolandContext

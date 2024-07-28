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

type InitialStateType = {
	refresh: number

	cityPol01: string
	imgPol01: any
	idWeatherPol01: number
	tempPol01: number | string
	windPol01: number | string

	cityPol02: string
	imgPol02: any
	idWeatherPol02: number
	tempPol02: number | string
	windPol02: number | string
}

type PolandProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,

	cityPol01: '',
	imgPol01: Un,
	idWeatherPol01: 0,
	tempPol01: 0,
	windPol01: 0,

	cityPol02: '',
	imgPol02: Un,
	idWeatherPol02: 0,
	tempPol02: 0,
	windPol02: 0,
}

const PolandContext = createContext(InitialState)

export const PolandProvider = ({ children }: PolandProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)

	const API_LINK_POLAND = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_POLAND = '&appid=24582e46fb113d7a512e20a446965d23'

	const API_UNITS_POLAND = '&units=metric'

	const time = window.setTimeout(() => {
		setRefresh(refresh - 1)
	}, 60000)

	if (refresh === 0) {
		clearTimeout(time)
		setRefresh(10)
	}

	const [cityPol01, setCityPol01] = useState<string>('Szczecin')
	const [imgPol01, setImgPol01] = useState<any>(Un)
	const [idWeatherPol01, setIdWeatherPol01] = useState<number>(0)
	const [tempPol01, setTempPol01] = useState<number | string>(0)
	const [windPol01, setWindPol01] = useState<number | string>(0)

	const URL_POLAND_01 = API_LINK_POLAND + cityPol01 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol01 = async () => {
			try {
				const response = await fetch(URL_POLAND_01)
				if (!response.ok) {
					throw new Error('error')
				}
				const data = await response.json()
				console.log(data)
				const codID = Object.assign({}, ...data.weather)
				setIdWeatherPol01(codID.id)
				const temp = data.main.temp
				setTempPol01(`${temp.toFixed(1)}℃`)
				const wind = data.wind.speed.toFixed(1)
				setWindPol01(`${wind} km/h`)
			} catch (error) {
				console.log(error)
				setCityPol01('ERROR')
				setImgPol01(Un)
				setTempPol01('ERROR')
			}
		}

		cityPol01()

		window.setInterval(() => {
			cityPol01()
		}, 600000)
	}, [])

	useEffect(() => {
		if (idWeatherPol01 >= 200 && idWeatherPol01 <= 232) {
			setImgPol01(Thunder)
		} else if (idWeatherPol01 >= 300 && idWeatherPol01 <= 321) {
			setImgPol01(Drizzle)
		} else if (idWeatherPol01 >= 500 && idWeatherPol01 <= 531) {
			setImgPol01(Rain)
		} else if (idWeatherPol01 >= 600 && idWeatherPol01 <= 622) {
			setImgPol01(Snow)
		} else if (idWeatherPol01 >= 701 && idWeatherPol01 <= 781) {
			setImgPol01(Fog)
		} else if (idWeatherPol01 === 800) {
			setImgPol01(Sun)
		} else if (idWeatherPol01 === 801) {
			setImgPol01(FewClouds)
		} else if (idWeatherPol01 > 801 && idWeatherPol01 <= 804) {
			setImgPol01(Cloud)
		} else {
			setImgPol01(Un)
		}
	}, [idWeatherPol01])

	const [cityPol02, setCityPol02] = useState<string>('Gdańsk')
	const [imgPol02, setImgPol02] = useState<any>(Un)
	const [idWeatherPol02, setIdWeatherPol02] = useState<number>(0)
	const [tempPol02, setTempPol02] = useState<number | string>(0)
	const [windPol02, setWindPol02] = useState<number | string>(0)

	const URL_POLAND_02 = API_LINK_POLAND + cityPol02 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol02 = async () => {
			try {
				const response = await fetch(URL_POLAND_02)
				if (!response.ok) {
					throw new Error('error')
				}
				const data = await response.json()
				console.log(data)
				const codID = Object.assign({}, ...data.weather)
				setIdWeatherPol02(codID.id)
				const temp = data.main.temp
				setTempPol02(`${temp.toFixed(1)}℃`)
				const wind = data.wind.speed.toFixed(1)
				setWindPol02(`${wind} km/h`)
			} catch (error) {
				console.log(error)
				setCityPol02('ERROR')
				setImgPol02(Un)
				setTempPol02('ERROR')
			}
		}

		cityPol02()

		window.setInterval(() => {
			cityPol02()
		}, 600000)
	}, [])

	useEffect(() => {
		if (idWeatherPol02 >= 200 && idWeatherPol02 <= 232) {
			setImgPol02(Thunder)
		} else if (idWeatherPol02 >= 300 && idWeatherPol02 <= 321) {
			setImgPol02(Drizzle)
		} else if (idWeatherPol02 >= 500 && idWeatherPol02 <= 531) {
			setImgPol02(Rain)
		} else if (idWeatherPol02 >= 600 && idWeatherPol02 <= 622) {
			setImgPol02(Snow)
		} else if (idWeatherPol02 >= 701 && idWeatherPol02 <= 781) {
			setImgPol02(Fog)
		} else if (idWeatherPol02 === 800) {
			setImgPol02(Sun)
		} else if (idWeatherPol02 === 801) {
			setImgPol02(FewClouds)
		} else if (idWeatherPol02 > 801 && idWeatherPol02 <= 804) {
			setImgPol02(Cloud)
		} else {
			setImgPol02(Un)
		}
	}, [idWeatherPol02])

	return (
		<PolandContext.Provider
			value={{
				refresh,

				cityPol01,
				imgPol01,
				idWeatherPol01,
				tempPol01,
				windPol01,

				cityPol02,
				imgPol02,
				idWeatherPol02,
				tempPol02,
				windPol02,
			}}
		>
			{children}
		</PolandContext.Provider>
	)
}

export default PolandContext

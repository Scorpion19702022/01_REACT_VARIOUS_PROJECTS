import React, { useEffect, createContext, useState } from 'react'

import Un from '../assets/unknown.png'
import Sun from '../assets/sun.png'
import Cloud from '../assets/cloud.png'
import Rain from '../assets/rain.png'
import Thunder from '../assets/thunderstorm.png'
import Drizzle from '../assets/drizzle.png'
import Fog from '../assets/fog.png'
import Snow from '../assets/snow.png'

type InitialStateType = {
	refresh: number

	// ==== SZCZECIN ====

	cityPol01: string
	imgPol01: any
	idWeatherPol01: number
	tempPol01: number | string
	windPol01: number | string

	// ========
}

type PolandProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	refresh: 0,

	// ==== SZCZECIN ====

	cityPol01: '',
	imgPol01: Un,
	idWeatherPol01: 0,
	tempPol01: 0,
	windPol01: 0,

	// ========
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

	// === SZCZECIN ===

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
		} else if (idWeatherPol01 >= 801 && idWeatherPol01 <= 804) {
			setImgPol01(Cloud)
		} else {
			setImgPol01(Un)
		}
	}, [idWeatherPol01])

	// console.log(tempPol01)
	// ======

	return (
		<PolandContext.Provider value={{ refresh, cityPol01, imgPol01, idWeatherPol01, tempPol01, windPol01 }}>
			{children}
		</PolandContext.Provider>
	)
}

export default PolandContext

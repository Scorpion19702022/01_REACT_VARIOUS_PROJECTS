import React, { useEffect, createContext, useState } from 'react'

import Un from '../assets/unknown.png'
// import Sun from '../assets/sun.png'
// import Cloud from '../assets/cloud.png'
// import Rain from '../assets/rain.png'
// import Thunder from '../assets/thunderstorm.png'
// import Drizzle from '../assets/drizzle.png'
// import Fog from '../assets/fog.png'
// import Ice from '../assets/ice.png'
// import Snow from '../assets/snow.png'

type InitialStateType = {
	refresh: number

	// ==== SZCZECIN ====

	cityPol01: string
	imgPol01: any
	idWeather: number
	tempPol01: number | string

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
	idWeather: 0,
	tempPol01: 0,

	// ========
}

const PolandContext = createContext(InitialState)

export const PolandProvider = ({ children }: PolandProviderType) => {
	const [refresh, setRefresh] = useState<number>(10)

	const API_LINK_POLAND = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_POLAND = '&appid=24582e46fb113d7a512e20a446965d23'

	const API_UNITS_POLAND = '&units=metric'

	const time = setTimeout(() => {
		setRefresh(refresh - 1)
	}, 100000)

	if (refresh === 0) {
		clearTimeout(time)
		setRefresh(10)
	}

	// === SZCZECIN ===

	const [cityPol01, setCityPol01] = useState<string>('Szczecin')
	const [imgPol01, setImgPol01] = useState<any>(Un)
	const [idWeather, setIdWeather] = useState<number>(0)
	const [tempPol01, setTempPol01] = useState<number | string>(0)

	const URL_POLAND_01 = API_LINK_POLAND + cityPol01 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol01 = async () => {
			try {
				const response = await fetch(URL_POLAND_01)
				const data = await response.json()
				const codID = data.cod
				console.log(data)
				setIdWeather(codID)
				const temp = data.main.temp
				setTempPol01(`${temp.toFixed(1)}℃`)
			} catch (error) {
				console.log(error)
				setCityPol01('ERROR')
				setImgPol01(Un)
				setTempPol01('ERROR')
				setTempPol01('ERROR')
			}
		}

		cityPol01()

		setInterval(() => {
			cityPol01()
		}, 100000)
	}, [])

	console.log(tempPol01)
	// ======

	return (
		<PolandContext.Provider value={{ refresh, cityPol01, imgPol01, idWeather, tempPol01 }}>
			{children}
		</PolandContext.Provider>
	)
}

export default PolandContext

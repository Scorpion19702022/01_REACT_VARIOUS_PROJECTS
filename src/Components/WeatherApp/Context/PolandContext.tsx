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

	// ==== KOSZALIN ====

	cityPol02: string
	imgPol02: any
	idWeatherPol02: number
	tempPol02: number | string
	windPol02: number | string

	// ========

	// ==== GDANSK ====

	cityPol03: string
	imgPol03: any
	idWeatherPol03: number
	tempPol03: number | string
	windPol03: number | string

	// ========

	// ==== OlSZTYN ====

	cityPol04: string
	imgPol04: any
	idWeatherPol04: number
	tempPol04: number | string
	windPol04: number | string

	// ========

	// ==== BIALYSTOK ====

	cityPol05: string
	imgPol05: any
	idWeatherPol05: number
	tempPol05: number | string
	windPol05: number | string

	// ========

	// ==== ZIELONA GORA ====

	cityPol06: string
	imgPol06: any
	idWeatherPol06: number
	tempPol06: number | string
	windPol06: number | string

	// ========

	// ==== POZNAN ====

	cityPol07: string
	imgPol07: any
	idWeatherPol07: number
	tempPol07: number | string
	windPol07: number | string

	// ========

	// ==== BYDGOSZCZ ====

	cityPol08: string
	imgPol08: any
	idWeatherPol08: number
	tempPol08: number | string
	windPol08: number | string

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

	// ==== KOSZALIN ====

	cityPol02: '',
	imgPol02: Un,
	idWeatherPol02: 0,
	tempPol02: 0,
	windPol02: 0,

	// ========

	// ==== GDANSK ====

	cityPol03: '',
	imgPol03: Un,
	idWeatherPol03: 0,
	tempPol03: 0,
	windPol03: 0,

	// ========

	// ==== OLSZTYN ====

	cityPol04: '',
	imgPol04: Un,
	idWeatherPol04: 0,
	tempPol04: 0,
	windPol04: 0,

	// ========

	// ==== BIALYSTOK ====

	cityPol05: '',
	imgPol05: Un,
	idWeatherPol05: 0,
	tempPol05: 0,
	windPol05: 0,

	// ========

	// ==== ZIELONA GORA ====

	cityPol06: '',
	imgPol06: Un,
	idWeatherPol06: 0,
	tempPol06: 0,
	windPol06: 0,

	// ========

	// ==== POZNAN ====

	cityPol07: '',
	imgPol07: Un,
	idWeatherPol07: 0,
	tempPol07: 0,
	windPol07: 0,

	// ========

	// ==== BYDGOSZCZ ====

	cityPol08: '',
	imgPol08: Un,
	idWeatherPol08: 0,
	tempPol08: 0,
	windPol08: 0,

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

	// ======

	// === KOSZALIN ===

	const [cityPol02, setCityPol02] = useState<string>('Koszalin')
	const [imgPol02, setImgPol02] = useState<any>(Un)
	const [idWeatherPol02, setIdWeatherPol02] = useState<number>(0)
	const [tempPol02, setTempPol02] = useState<number | string>(0)
	const [windPol02, setWindPol02] = useState<number | string>(0)

	const URL_POLAND_02 = API_LINK_POLAND + cityPol02 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol02 = async () => {
			try {
				const response = await fetch(URL_POLAND_02)
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
		} else if (idWeatherPol02 >= 801 && idWeatherPol02 <= 804) {
			setImgPol02(Cloud)
		} else {
			setImgPol02(Un)
		}
	}, [idWeatherPol02])

	// ======

	// === GDANSK ===

	const [cityPol03, setCityPol03] = useState<string>('Gdańsk')
	const [imgPol03, setImgPol03] = useState<any>(Un)
	const [idWeatherPol03, setIdWeatherPol03] = useState<number>(0)
	const [tempPol03, setTempPol03] = useState<number | string>(0)
	const [windPol03, setWindPol03] = useState<number | string>(0)

	const URL_POLAND_03 = API_LINK_POLAND + cityPol03 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol03 = async () => {
			try {
				const response = await fetch(URL_POLAND_03)
				const data = await response.json()
				console.log(data)
				const codID = Object.assign({}, ...data.weather)
				setIdWeatherPol03(codID.id)
				const temp = data.main.temp
				setTempPol03(`${temp.toFixed(1)}℃`)
				const wind = data.wind.speed.toFixed(1)
				setWindPol03(`${wind} km/h`)
			} catch (error) {
				console.log(error)
				setCityPol03('ERROR')
				setImgPol03(Un)
				setTempPol03('ERROR')
			}
		}

		cityPol03()

		window.setInterval(() => {
			cityPol03()
		}, 600000)
	}, [])

	useEffect(() => {
		if (idWeatherPol03 >= 200 && idWeatherPol03 <= 232) {
			setImgPol03(Thunder)
		} else if (idWeatherPol03 >= 300 && idWeatherPol03 <= 321) {
			setImgPol03(Drizzle)
		} else if (idWeatherPol03 >= 500 && idWeatherPol03 <= 531) {
			setImgPol03(Rain)
		} else if (idWeatherPol03 >= 600 && idWeatherPol03 <= 622) {
			setImgPol03(Snow)
		} else if (idWeatherPol03 >= 701 && idWeatherPol03 <= 781) {
			setImgPol03(Fog)
		} else if (idWeatherPol03 === 800) {
			setImgPol03(Sun)
		} else if (idWeatherPol03 >= 801 && idWeatherPol03 <= 804) {
			setImgPol03(Cloud)
		} else {
			setImgPol03(Un)
		}
	}, [idWeatherPol03])

	// ======

	// === OSZTYN ===

	const [cityPol04, setCityPol04] = useState<string>('Olsztyn')
	const [imgPol04, setImgPol04] = useState<any>(Un)
	const [idWeatherPol04, setIdWeatherPol04] = useState<number>(0)
	const [tempPol04, setTempPol04] = useState<number | string>(0)
	const [windPol04, setWindPol04] = useState<number | string>(0)

	const URL_POLAND_04 = API_LINK_POLAND + cityPol04 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol04 = async () => {
			try {
				const response = await fetch(URL_POLAND_04)
				const data = await response.json()
				console.log(data)
				const codID = Object.assign({}, ...data.weather)
				setIdWeatherPol04(codID.id)
				const temp = data.main.temp
				setTempPol04(`${temp.toFixed(1)}℃`)
				const wind = data.wind.speed.toFixed(1)
				setWindPol04(`${wind} km/h`)
			} catch (error) {
				console.log(error)
				setCityPol04('ERROR')
				setImgPol04(Un)
				setTempPol04('ERROR')
			}
		}

		cityPol04()

		window.setInterval(() => {
			cityPol04()
		}, 600000)
	}, [])

	useEffect(() => {
		if (idWeatherPol04 >= 200 && idWeatherPol04 <= 232) {
			setImgPol04(Thunder)
		} else if (idWeatherPol04 >= 300 && idWeatherPol04 <= 321) {
			setImgPol04(Drizzle)
		} else if (idWeatherPol04 >= 500 && idWeatherPol04 <= 531) {
			setImgPol04(Rain)
		} else if (idWeatherPol04 >= 600 && idWeatherPol04 <= 622) {
			setImgPol04(Snow)
		} else if (idWeatherPol04 >= 701 && idWeatherPol04 <= 781) {
			setImgPol04(Fog)
		} else if (idWeatherPol04 === 800) {
			setImgPol04(Sun)
		} else if (idWeatherPol04 >= 801 && idWeatherPol04 <= 804) {
			setImgPol04(Cloud)
		} else {
			setImgPol04(Un)
		}
	}, [idWeatherPol04])

	// ======

	// === BIALYSTOK ===

	const [cityPol05, setCityPol05] = useState<string>('Białystok')
	const [imgPol05, setImgPol05] = useState<any>(Un)
	const [idWeatherPol05, setIdWeatherPol05] = useState<number>(0)
	const [tempPol05, setTempPol05] = useState<number | string>(0)
	const [windPol05, setWindPol05] = useState<number | string>(0)

	const URL_POLAND_05 = API_LINK_POLAND + cityPol05 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol05 = async () => {
			try {
				const response = await fetch(URL_POLAND_05)
				const data = await response.json()
				console.log(data)
				const codID = Object.assign({}, ...data.weather)
				setIdWeatherPol05(codID.id)
				const temp = data.main.temp
				setTempPol05(`${temp.toFixed(1)}℃`)
				const wind = data.wind.speed.toFixed(1)
				setWindPol05(`${wind} km/h`)
			} catch (error) {
				console.log(error)
				setCityPol05('ERROR')
				setImgPol05(Un)
				setTempPol05('ERROR')
			}
		}

		cityPol05()

		window.setInterval(() => {
			cityPol05()
		}, 600000)
	}, [])

	useEffect(() => {
		if (idWeatherPol05 >= 200 && idWeatherPol05 <= 232) {
			setImgPol05(Thunder)
		} else if (idWeatherPol05 >= 300 && idWeatherPol05 <= 321) {
			setImgPol05(Drizzle)
		} else if (idWeatherPol05 >= 500 && idWeatherPol05 <= 531) {
			setImgPol05(Rain)
		} else if (idWeatherPol05 >= 600 && idWeatherPol05 <= 622) {
			setImgPol05(Snow)
		} else if (idWeatherPol05 >= 701 && idWeatherPol05 <= 781) {
			setImgPol05(Fog)
		} else if (idWeatherPol05 === 800) {
			setImgPol05(Sun)
		} else if (idWeatherPol05 >= 801 && idWeatherPol05 <= 804) {
			setImgPol05(Cloud)
		} else {
			setImgPol05(Un)
		}
	}, [idWeatherPol05])

	// ======

	// === ZIELONA GORA ===

	const [cityPol06, setCityPol06] = useState<string>('Zielona Góra')
	const [imgPol06, setImgPol06] = useState<any>(Un)
	const [idWeatherPol06, setIdWeatherPol06] = useState<number>(0)
	const [tempPol06, setTempPol06] = useState<number | string>(0)
	const [windPol06, setWindPol06] = useState<number | string>(0)

	const URL_POLAND_06 = API_LINK_POLAND + cityPol06 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol06 = async () => {
			try {
				const response = await fetch(URL_POLAND_06)
				const data = await response.json()
				console.log(data)
				const codID = Object.assign({}, ...data.weather)
				setIdWeatherPol06(codID.id)
				const temp = data.main.temp
				setTempPol06(`${temp.toFixed(1)}℃`)
				const wind = data.wind.speed.toFixed(1)
				setWindPol06(`${wind} km/h`)
			} catch (error) {
				console.log(error)
				setCityPol06('ERROR')
				setImgPol06(Un)
				setTempPol06('ERROR')
			}
		}

		cityPol06()

		window.setInterval(() => {
			cityPol06()
		}, 600000)
	}, [])

	useEffect(() => {
		if (idWeatherPol06 >= 200 && idWeatherPol06 <= 232) {
			setImgPol06(Thunder)
		} else if (idWeatherPol06 >= 300 && idWeatherPol06 <= 321) {
			setImgPol06(Drizzle)
		} else if (idWeatherPol06 >= 500 && idWeatherPol06 <= 531) {
			setImgPol06(Rain)
		} else if (idWeatherPol06 >= 600 && idWeatherPol06 <= 622) {
			setImgPol06(Snow)
		} else if (idWeatherPol06 >= 701 && idWeatherPol06 <= 781) {
			setImgPol06(Fog)
		} else if (idWeatherPol06 === 800) {
			setImgPol06(Sun)
		} else if (idWeatherPol06 >= 801 && idWeatherPol06 <= 804) {
			setImgPol06(Cloud)
		} else {
			setImgPol06(Un)
		}
	}, [idWeatherPol06])

	// ======

	// === POZNAN ===

	const [cityPol07, setCityPol07] = useState<string>('Poznań')
	const [imgPol07, setImgPol07] = useState<any>(Un)
	const [idWeatherPol07, setIdWeatherPol07] = useState<number>(0)
	const [tempPol07, setTempPol07] = useState<number | string>(0)
	const [windPol07, setWindPol07] = useState<number | string>(0)

	const URL_POLAND_07 = API_LINK_POLAND + cityPol07 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol07 = async () => {
			try {
				const response = await fetch(URL_POLAND_07)
				const data = await response.json()
				console.log(data)
				const codID = Object.assign({}, ...data.weather)
				setIdWeatherPol07(codID.id)
				const temp = data.main.temp
				setTempPol07(`${temp.toFixed(1)}℃`)
				const wind = data.wind.speed.toFixed(1)
				setWindPol07(`${wind} km/h`)
			} catch (error) {
				console.log(error)
				setCityPol07('ERROR')
				setImgPol07(Un)
				setTempPol07('ERROR')
			}
		}

		cityPol07()

		window.setInterval(() => {
			cityPol07()
		}, 600000)
	}, [])

	useEffect(() => {
		if (idWeatherPol07 >= 200 && idWeatherPol07 <= 232) {
			setImgPol07(Thunder)
		} else if (idWeatherPol07 >= 300 && idWeatherPol07 <= 321) {
			setImgPol07(Drizzle)
		} else if (idWeatherPol07 >= 500 && idWeatherPol07 <= 531) {
			setImgPol07(Rain)
		} else if (idWeatherPol07 >= 600 && idWeatherPol07 <= 622) {
			setImgPol07(Snow)
		} else if (idWeatherPol07 >= 701 && idWeatherPol07 <= 781) {
			setImgPol07(Fog)
		} else if (idWeatherPol07 === 800) {
			setImgPol07(Sun)
		} else if (idWeatherPol07 >= 801 && idWeatherPol07 <= 804) {
			setImgPol07(Cloud)
		} else {
			setImgPol07(Un)
		}
	}, [idWeatherPol07])

	// ======

	// === POZNAN ===

	const [cityPol08, setCityPol08] = useState<string>('Bydgoszcz')
	const [imgPol08, setImgPol08] = useState<any>(Un)
	const [idWeatherPol08, setIdWeatherPol08] = useState<number>(0)
	const [tempPol08, setTempPol08] = useState<number | string>(0)
	const [windPol08, setWindPol08] = useState<number | string>(0)

	const URL_POLAND_08 = API_LINK_POLAND + cityPol08 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol08 = async () => {
			try {
				const response = await fetch(URL_POLAND_08)
				const data = await response.json()
				console.log(data)
				const codID = Object.assign({}, ...data.weather)
				setIdWeatherPol08(codID.id)
				const temp = data.main.temp
				setTempPol08(`${temp.toFixed(1)}℃`)
				const wind = data.wind.speed.toFixed(1)
				setWindPol08(`${wind} km/h`)
			} catch (error) {
				console.log(error)
				setCityPol08('ERROR')
				setImgPol08(Un)
				setTempPol08('ERROR')
			}
		}

		cityPol08()

		window.setInterval(() => {
			cityPol08()
		}, 600000)
	}, [])

	useEffect(() => {
		if (idWeatherPol08 >= 200 && idWeatherPol08 <= 232) {
			setImgPol08(Thunder)
		} else if (idWeatherPol08 >= 300 && idWeatherPol08 <= 321) {
			setImgPol08(Drizzle)
		} else if (idWeatherPol08 >= 500 && idWeatherPol08 <= 531) {
			setImgPol08(Rain)
		} else if (idWeatherPol08 >= 600 && idWeatherPol08 <= 622) {
			setImgPol08(Snow)
		} else if (idWeatherPol08 >= 701 && idWeatherPol08 <= 781) {
			setImgPol08(Fog)
		} else if (idWeatherPol08 === 800) {
			setImgPol08(Sun)
		} else if (idWeatherPol08 >= 801 && idWeatherPol08 <= 804) {
			setImgPol08(Cloud)
		} else {
			setImgPol08(Un)
		}
	}, [idWeatherPol08])

	// ======

	return (
		<PolandContext.Provider
			value={{
				refresh,

				// === SZCZECIN ===

				cityPol01,
				imgPol01,
				idWeatherPol01,
				tempPol01,
				windPol01,

				// === KOSZALIN ===

				cityPol02,
				imgPol02,
				idWeatherPol02,
				tempPol02,
				windPol02,

				// === GDANSK ===

				cityPol03,
				imgPol03,
				idWeatherPol03,
				tempPol03,
				windPol03,

				// === OLSZTYN ===

				cityPol04,
				imgPol04,
				idWeatherPol04,
				tempPol04,
				windPol04,

				// === BIALYSTOK ===

				cityPol05,
				imgPol05,
				idWeatherPol05,
				tempPol05,
				windPol05,

				// === ZIELONA GORA ===

				cityPol06,
				imgPol06,
				idWeatherPol06,
				tempPol06,
				windPol06,

				// === POZNAN ===

				cityPol07,
				imgPol07,
				idWeatherPol07,
				tempPol07,
				windPol07,

				// === BYDGOSZCZ ===

				cityPol08,
				imgPol08,
				idWeatherPol08,
				tempPol08,
				windPol08,
			}}
		>
			{children}
		</PolandContext.Provider>
	)
}

export default PolandContext

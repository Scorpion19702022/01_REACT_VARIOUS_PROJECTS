import React, { useEffect, createContext } from 'react'

// import Sun from '../assets/sun.png'
// import Cloud from '../assets/cloud.png'
// import Rain from '../assets/rain.png'
// import Thunder from '../assets/thunderstorm.png'
// import Drizzle from '../assets/drizzle.png'
// import Fog from '../assets/fog.png'
// import Ice from '../assets/ice.png'
// import Snow from '../assets/snow.png'

type InitialStateType = {
	cityPol01: string
}

type PolandProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	cityPol01: '',
}

const PolandContext = createContext(InitialState)

const cityPol01 = 'Szczecin'

export const PolandProvider = ({ children }: PolandProviderType) => {
	const API_LINK_POLAND = `https://api.openweathermap.org/data/2.5/weather?q=`

	const API_KEY_POLAND = '&appid=24582e46fb113d7a512e20a446965d23'

	const API_UNITS_POLAND = '&units=metric'

	const URL_POLAND_01 = API_LINK_POLAND + cityPol01 + API_KEY_POLAND + API_UNITS_POLAND

	useEffect(() => {
		const cityPol01 = async () => {
			try {
				const response = await fetch(URL_POLAND_01)
				const data = await response.json()
				console.log(data)
			} catch (error) {
				console.log(error)
			}
		}

		cityPol01()
	}, [])

	return <PolandContext.Provider value={{ cityPol01 }}>{children}</PolandContext.Provider>
}

export default PolandContext

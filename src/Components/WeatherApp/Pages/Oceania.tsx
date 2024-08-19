import React from 'react'
import OceaniaWeather from '../OceaniaWeather'
import { OceaniaProvider } from '../Context/OceaniaContext'

const Oceania = () => {
	return (
		<OceaniaProvider>
			<OceaniaWeather />
		</OceaniaProvider>
	)
}

export default Oceania

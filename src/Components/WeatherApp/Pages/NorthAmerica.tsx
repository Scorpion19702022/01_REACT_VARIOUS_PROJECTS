import React from 'react'
import NorthAmericaWeather from '../NorthAmericaWeather'
import { NorthAmProvider } from '../Context/NorthAmContext'

const NorthAmerica = () => {
	return (
		<NorthAmProvider>
			<NorthAmericaWeather />
		</NorthAmProvider>
	)
}

export default NorthAmerica

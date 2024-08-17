import React from 'react'
import SouthAmericaWeather from '../SouthAmericaWeather'
import { SouthAmProvider } from '../Context/SouthAmContext'

const SouthAmerica = () => {
	return (
		<SouthAmProvider>
			<SouthAmericaWeather />
		</SouthAmProvider>
	)
}

export default SouthAmerica

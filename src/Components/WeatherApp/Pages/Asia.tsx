import React from 'react'
import AsiaWeather from '../AsiaWeather'
import { AsiaProvider } from '../Context/AsiaContext'

const Asia = () => {
	return (
		<AsiaProvider>
			<AsiaWeather />
		</AsiaProvider>
	)
}

export default Asia

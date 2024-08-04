import React from 'react'
import EuropeWeather from '../EuropeWeather'
import { EuropeProvider } from '../Context/EuropeContext'

const Europe = () => {
	return (
		<EuropeProvider>
			<EuropeWeather />
		</EuropeProvider>
	)
}

export default Europe

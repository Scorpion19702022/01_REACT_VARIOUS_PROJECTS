import React from 'react'
import AfricaWeather from '../AfricaWeather'
import { AfricaProvider } from '../Context/AfricaContext'

const Africa = () => {
	return (
		<AfricaProvider>
			<AfricaWeather />
		</AfricaProvider>
	)
}

export default Africa

import React from 'react'
import PolandWeather from '../PolandWeather'
import { PolandProvider } from '../Context/PolandContext'

const Poland = () => {
	return (
		<PolandProvider>
			<PolandWeather />
		</PolandProvider>
	)
}

export default Poland

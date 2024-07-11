import React from 'react'
import NavWorld from './NavWorld'

import { Routes, Route } from 'react-router-dom'
import Poland from './Pages/Poland'
import Europe from './Pages/Europe'

const WeatherApp = () => {
	return (
		<div>
			<h1>weatherApp</h1>
			<NavWorld />
			<section>
				<Routes>
					<Route path='../Pages/Poland' Component={Poland} />
					<Route path='../Pages/Europe' Component={Europe} />
				</Routes>
			</section>
		</div>
	)
}

export default WeatherApp

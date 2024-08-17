import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from '../Components/NavBar/NavBar'
import Home from '../Components/Home/Home'
import Task02 from '../Components/Task02/Task02'
import WeatherApp from '../Components/WeatherApp/WeatherApp'
import Poland from '../Components/WeatherApp/Pages/Poland'
import Europe from '../Components/WeatherApp/Pages/Europe'
import Asia from '../Components/WeatherApp/Pages/Asia'
import NorthAmerica from '../Components/WeatherApp/Pages/NorthAmerica'
import SouthAmerica from '../Components/WeatherApp/Pages/SouthAmerica'

function App() {
	return (
		<Router>
			<NavBar />
			<section>
				<Routes>
					<Route path='/' Component={Home} />
					<Route path='/WeatherApp' Component={WeatherApp} />
					<Route path='/WeatherApp/Poland' Component={Poland} />
					<Route path='/WeatherApp/Europe' Component={Europe} />
					<Route path='/WeatherApp/Asia' Component={Asia} />
					<Route path='/WeatherApp/NorthAmerica' Component={NorthAmerica} />
					<Route path='/WeatherApp/SouthAmerica' Component={SouthAmerica} />
					<Route path='/Task02' Component={Task02} />
				</Routes>
			</section>
		</Router>
	)
}

export default App

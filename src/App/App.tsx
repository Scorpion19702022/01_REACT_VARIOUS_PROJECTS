import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Home from '../Components/Home/Home'
import Task02 from '../Components/Task02/Task02'
import WeatherApp from '../Components/WeatherApp/WeatherApp'
import Poland from '../Components/WeatherApp/Pages/Poland'
import WestEurope from '../Components/WeatherApp/Pages/WestEurope'

function App() {
	return (
		<Router>
			<NavBar />
			<section>
				<Routes>
					<Route path='/' Component={Home} />
					<Route path='/WeatherApp' Component={WeatherApp} />
					<Route path='/WeatherApp/Poland' Component={Poland} />
					<Route path='/WeatherApp/WestEurope' Component={WestEurope} />
					<Route path='/Task02' Component={Task02} />
				</Routes>
			</section>
		</Router>
	)
}

export default App

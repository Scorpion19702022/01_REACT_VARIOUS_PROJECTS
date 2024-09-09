import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from '../Components/NavBar/NavBar'
import Home from '../Components/Home/Home'

import WeatherApp from '../Components/WeatherApp/WeatherApp'
import Poland from '../Components/WeatherApp/Pages/Poland'
import Europe from '../Components/WeatherApp/Pages/Europe'
import Asia from '../Components/WeatherApp/Pages/Asia'
import NorthAmerica from '../Components/WeatherApp/Pages/NorthAmerica'
import SouthAmerica from '../Components/WeatherApp/Pages/SouthAmerica'
import Africa from '../Components/WeatherApp/Pages/Africa'
import Oceania from '../Components/WeatherApp/Pages/Oceania'

import ToDoList from '../Components/ToDoList/ToDoList'
import Bmi from '../Components/Bmi/Bmi'
import SalaryCalculator from '../Components/SalaryCalculator/SalaryCalculator'

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
					<Route path='/WeatherApp/Africa' Component={Africa} />
					<Route path='/WeatherApp/Oceania' Component={Oceania} />
					<Route path='/ToDoList' Component={ToDoList} />
					<Route path='/Bmi' Component={Bmi} />
					<Route path='/KalkulatorWynagrodzenia' Component={SalaryCalculator} />
				</Routes>
			</section>
		</Router>
	)
}

export default App

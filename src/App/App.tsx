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
import SnackBar from '../Components/SnackBar/SnackBar'
import TicTacToe from '../Components/TicTacToe/TicTacToe'
import Quiz from '../Components/Quiz/Quiz'
import Stopwatch from '../Components/Stopwatch/Stopwatch'
import Countdown from '../Components/Countdown/Countdown'
import Demography from '../Components/Demography/Demography'
import Converter from '../Components/Conventer/Converter'
import ExchangeRate from '../Components/ExchangeRate/ExchangeRate'
import Calculator from '../Components/Calculator/Calculator'
import Investment from '../Components/Investment/Investment'

function App() {
	return (
		<Router>
			<NavBar />
			<section>
				<Routes>
					<Route path='/' Component={Home} />
					<Route path='/WeatherApp' Component={WeatherApp} />
					<Route path='/Converter' Component={Converter} />
					<Route path='/WeatherApp/Poland' Component={Poland} />
					<Route path='/WeatherApp/Europe' Component={Europe} />
					<Route path='/WeatherApp/Asia' Component={Asia} />
					<Route path='/WeatherApp/NorthAmerica' Component={NorthAmerica} />
					<Route path='/WeatherApp/SouthAmerica' Component={SouthAmerica} />
					<Route path='/WeatherApp/Africa' Component={Africa} />
					<Route path='/WeatherApp/Oceania' Component={Oceania} />
					<Route path='/ToDoList' Component={ToDoList} />
					<Route path='/Bmi' Component={Bmi} />
					<Route path='/SalaryCalculator' Component={SalaryCalculator} />
					<Route path='/SnackBar' Component={SnackBar} />
					<Route path='/TicTacToe' Component={TicTacToe} />
					<Route path='/Quiz' Component={Quiz} />
					<Route path='/Stoper' Component={Stopwatch} />
					<Route path='/Countdown' Component={Countdown} />
					<Route path='/Demography' Component={Demography} />
					<Route path='/ExchangeRate' Component={ExchangeRate} />
					<Route path='/Calculator' Component={Calculator} />
					<Route path='/Investment' Component={Investment} />
				</Routes>
			</section>
		</Router>
	)
}

export default App

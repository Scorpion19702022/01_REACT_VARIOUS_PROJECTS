import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Home from '../Components/Home/Home'
import Task01 from '../Components/Task01/Task01'
import Task02 from '../Components/Task02/Task02'

function App() {
	return (
		<Router>
			<NavBar />
			<section>
				<Routes>
					<Route path='/' Component={Home} />
					<Route path='/Task01' Component={Task01} />
					<Route path='/Task02' Component={Task02} />
				</Routes>
			</section>
		</Router>
	)
}

export default App

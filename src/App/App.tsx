import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'

function App() {
	return (
		<Router>
			<NavBar />
			<section>
				<Routes>
					<Route path='/' />
					<Route path='/Task01' />
					<Route path='/Task02' />
				</Routes>
			</section>
		</Router>
	)
}

export default App

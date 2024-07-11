import React from 'react'
import { Link } from 'react-router-dom'

const NavWorld = () => {
	return (
		<div>
			<Link to='/WeatherApp/Poland'>
				<h4>POLAND</h4>
			</Link>
			<Link to='/WeatherApp/Europe'>
				<h4>EUROPA</h4>
			</Link>
		</div>
	)
}

export default NavWorld

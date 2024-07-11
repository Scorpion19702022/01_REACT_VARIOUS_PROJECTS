import React from 'react'
import { Link } from 'react-router-dom'

const NavWorld = () => {
	return (
		<div>
			<Link to='./Poland'>
				<h4>POLAND</h4>
			</Link>
			<Link to='./Europe'>
				<h4>EUROPA</h4>
			</Link>
		</div>
	)
}

export default NavWorld

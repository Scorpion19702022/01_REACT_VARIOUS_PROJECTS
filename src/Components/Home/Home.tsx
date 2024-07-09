import React from 'react'

import HomeContent from './HomeContent'
import { HomeProvider } from './Context/HomeContext'

const Home = () => {
	return (
		<HomeProvider>
			<HomeContent />
		</HomeProvider>
	)
}

export default Home

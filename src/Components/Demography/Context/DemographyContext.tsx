import React, { createContext } from 'react'

import { Analytics } from '@vercel/analytics/react'

type InitialStageType = {}

type DemographyTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStageType = {}

const DemographyContext = createContext(InitialState)

export const DemographyProvider = ({ children }: DemographyTypeProvider) => {
	return (
		<DemographyContext.Provider value={{}}>
			{children}
			<Analytics />
		</DemographyContext.Provider>
	)
}

export default DemographyContext

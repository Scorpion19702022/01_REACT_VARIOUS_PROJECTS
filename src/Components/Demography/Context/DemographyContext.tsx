import React, { createContext } from 'react'

type InitialStageType = {}

type DemographyTypeProvider = {
	children: React.ReactNode
}

const InitialState: InitialStageType = {}

const DemographyContext = createContext(InitialState)

export const DemographyProvider = ({ children }: DemographyTypeProvider) => {
	return <DemographyContext.Provider value={{}}>{children}</DemographyContext.Provider>
}

export default DemographyContext

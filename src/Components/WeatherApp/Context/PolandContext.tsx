import React, { createContext } from 'react'

type InitialStateType = {}

type PolandProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {}

const PolandContext = createContext(InitialState)

export const PolandProvider = ({ children }: PolandProviderType) => {
	return <PolandContext.Provider value={{}}>{children}</PolandContext.Provider>
}

export default PolandContext

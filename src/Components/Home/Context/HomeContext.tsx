import { createContext } from 'react'

type InstalStateType = {}

type HomeProviderType = {
	children: React.ReactNode
}

const InitialState: InstalStateType = {}

const HomeContext = createContext(InitialState)

export const HomeProvider = ({ children }: HomeProviderType) => {
	return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>
}

export default HomeContext

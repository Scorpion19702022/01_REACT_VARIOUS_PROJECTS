import { createContext, useState } from 'react'

type InstalStateType = {
	textPL: string
	textEN: string
	isActivePL: boolean
	isActiveEN: boolean
	viewText: () => void
}

type HomeProviderType = {
	children: React.ReactNode
}

const InitialState: InstalStateType = {
	textPL: '',
	textEN: '',
	isActivePL: true,
	isActiveEN: false,
	viewText: () => {},
}

const HomeContext = createContext(InitialState)

export const HomeProvider = ({ children }: HomeProviderType) => {
	const [textPL, setTextPL] = useState<string>('')
	const [textEN, setTextEN] = useState<string>('')

	const [isActivePL, setIsActivePL] = useState<boolean>(true)
	const [isActiveEN, setIsActiveEN] = useState<boolean>(false)

	const viewText = () => {
		console.log('klik')
	}

	return (
		<HomeContext.Provider value={{ textPL, textEN, isActivePL, isActiveEN, viewText }}>{children}</HomeContext.Provider>
	)
}

export default HomeContext

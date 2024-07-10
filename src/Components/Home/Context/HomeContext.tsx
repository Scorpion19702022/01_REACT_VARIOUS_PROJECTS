import { createContext, useState } from 'react'

type InstalStateType = {
	textPL: string
	textEN: string
	isActivePL: boolean
	isActiveEN: boolean
	addedText: (kind: string) => void
}

type HomeProviderType = {
	children: React.ReactNode
}

const InitialState: InstalStateType = {
	textPL: '',
	textEN: '',
	isActivePL: false,
	isActiveEN: false,
	addedText: (kind: string) => {},
}

const HomeContext = createContext(InitialState)

export const HomeProvider = ({ children }: HomeProviderType) => {
	const [textPL, setTextPL] = useState<string>('')
	const [textEN, setTextEN] = useState<string>('')

	const [isActivePL, setIsActivePL] = useState<boolean>(false)
	const [isActiveEN, setIsActiveEN] = useState<boolean>(false)

	const addedText = (kind: string) => {
		setIsActivePL(!isActivePL)
		setIsActiveEN(!isActiveEN)
		if (isActivePL && kind === textPL) {
			setTextPL('Polski tekst')
			setTextEN('')
			setIsActiveEN(false)
		} else if (isActiveEN && kind === textEN) {
			setTextPL('')
			setTextEN('text English')
			setIsActivePL(false)
		}
	}

	return (
		<HomeContext.Provider value={{ textPL, textEN, isActivePL, isActiveEN, addedText }}>
			{children}
		</HomeContext.Provider>
	)
}

export default HomeContext

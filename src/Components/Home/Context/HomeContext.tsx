import { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'

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
	isActivePL: true,
	isActiveEN: false,
	addedText: (kind: string) => {},
}

const HomeContext = createContext(InitialState)

export const HomeProvider = ({ children }: HomeProviderType) => {
	const [textPL, setTextPL] = useState<string>(
		'Czesc. W tym projekcie chciałbym przedstawić różne prace z React.js z użyciem Context i TypeScript. Znajdziesz tu Aplikacje pogodową, zaawansowaną ToDoList, konwenter stopni i inne. Projekty są responsywne. Zapraszam do przeglądania.'
	)
	const [textEN, setTextEN] = useState<string>('')

	const [isActivePL, setIsActivePL] = useState<boolean>(true)
	const [isActiveEN, setIsActiveEN] = useState<boolean>(false)

	const addedText = (kind: string) => {
		if (kind === textPL) {
			setIsActivePL(true)
			setIsActiveEN(false)
			setTextPL(
				'Czesc. W tym projekcie chciałbym przedstawić różne prace z React.js z użyciem Context i TypeScript. Znajdziesz tu Aplikacje pogodową, zaawansowaną ToDoList, konwenter stopni i inne. Projekty są responsywne. Zapraszam do przeglądania.'
			)
			setTextEN('')
		} else if (kind === textEN) {
			setIsActivePL(false)
			setIsActiveEN(true)
			setTextPL('')
			setTextEN(
				'Hi. In this project I would like to present various works with React.js using Context and TypeScript. Here you will find weather applications, advanced ToDoList, degree converter and others. The designs are responsive. I invite you to browse.'
			)
		}
	}

	return (
		<HomeContext.Provider value={{ textPL, textEN, isActivePL, isActiveEN, addedText }}>
			{children}
			<Analytics />
		</HomeContext.Provider>
	)
}

export default HomeContext

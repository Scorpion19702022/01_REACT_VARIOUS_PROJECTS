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
		'Czesść. W tym projekcie chciałbym przedstawić różne prace z React.js z użyciem Context i TypeScript. Projekty są responsywne. Slider poniżej przedstawia co zobaczysz na stronach. Jeżeli jesteś zainteresowana/zainteresowany kliknij w link w nawigacji lub na sliderze. Zapraszam.'
	)
	const [textEN, setTextEN] = useState<string>('')

	const [isActivePL, setIsActivePL] = useState<boolean>(true)
	const [isActiveEN, setIsActiveEN] = useState<boolean>(false)

	const addedText = (kind: string) => {
		if (kind === textPL) {
			setIsActivePL(true)
			setIsActiveEN(false)
			setTextPL(
				'Czesść. W tym projekcie chciałbym przedstawić różne prace z React.js z użyciem Context i TypeScript. Projekty są responsywne. Slider poniżej przedstawia co zobaczysz na stronach. Jeżeli jesteś zainteresowana/zainteresowany kliknij w link w nawigacji lub na sliderze. Zapraszam.'
			)
			setTextEN('')
		} else if (kind === textEN) {
			setIsActivePL(false)
			setIsActiveEN(true)
			setTextPL('')
			setTextEN(
				'Hello. In this project I would like to present various works with React.js using Context and TypeScript. The projects are responsive. The slider below shows what you will see on the pages. If you are interested click on the link in the navigation or on the slider. I invite you.'
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

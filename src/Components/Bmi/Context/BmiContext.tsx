import React, { createContext, useState } from 'react'

// import woman01 from '../assets/bmi_1.png'
// import woman02 from '../assets/bmi_2.png'
// import woman03 from '../assets/bmi_3.png'
import woman04 from '../assets/bmi_4.png'
// import woman05 from '../assets/bmi_5.png'
// import woman06 from '../assets/bmi_6.png'
// import woman07 from '../assets/bmi_7.png'
// import woman08 from '../assets/bmi_8.png'

type initiallStateType = {
	tall: string | null
	weight: string | null
	imgWoman: any
	handleChangeTall: (e: string) => void
	handleChangeWeight: (e: string) => void
}

type BmiTypeProvider = {
	children: React.ReactNode
}

const initialState: initiallStateType = {
	tall: '',
	weight: '',
	imgWoman: woman04,
	handleChangeTall: (e: string) => {},
	handleChangeWeight: (e: string) => {},
}

const BmiContext = createContext(initialState)

export const BmiProvider = ({ children }: BmiTypeProvider) => {
	const [tall, setTall] = useState<string | null>(null)
	const [weight, setWeight] = useState<string | null>(null)
	const [imgWoman, setImgWoman] = useState<any>(woman04)

	const handleChangeTall = (e: string) => {
		setTall(e)
	}

	const handleChangeWeight = (e: string) => {
		setWeight(e)
	}

	return (
		<BmiContext.Provider value={{ tall, weight, imgWoman, handleChangeTall, handleChangeWeight }}>
			{children}
		</BmiContext.Provider>
	)
}

export default BmiContext

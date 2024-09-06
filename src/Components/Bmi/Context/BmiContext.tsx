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
	errorTall: string
	errorWeight: string
	yourTall: number
	yourWeight: number
	imgWoman: any
	resultBmi: number
	textInfo: string
	handleChangeTall: (e: string) => void
	handleChangeWeight: (e: string) => void
	handleCountBmi: () => void
}

type BmiTypeProvider = {
	children: React.ReactNode
}

const initialState: initiallStateType = {
	tall: '',
	weight: '',
	errorTall: '',
	errorWeight: '',
	yourTall: 0,
	yourWeight: 0,
	imgWoman: woman04,
	resultBmi: 0,
	textInfo: '',
	handleChangeTall: (e: string) => {},
	handleChangeWeight: (e: string) => {},
	handleCountBmi: () => {},
}

const BmiContext = createContext(initialState)

export const BmiProvider = ({ children }: BmiTypeProvider) => {
	const [tall, setTall] = useState<string | null>('')
	const [weight, setWeight] = useState<string | null>('')
	const [errorTall, setErrorTall] = useState<string>('')
	const [errorWeight, setErrorWeight] = useState<string>('')
	const [yourTall, setYourTall] = useState<number>(0)
	const [yourWeight, setYourWeight] = useState<number>(0)
	const [imgWoman, setImgWoman] = useState<any>(woman04)
	const [resultBmi, setResultBmi] = useState<number>(0)
	const [textInfo, setTextInfo] = useState('Tu pojawi się informacja dla Ciebie')

	const handleChangeTall = (e: string) => {
		setTall(e)
	}

	const handleChangeWeight = (e: string) => {
		setWeight(e)
	}

	const handleCountBmi = () => {}

	return (
		<BmiContext.Provider
			value={{
				tall,
				weight,
				errorTall,
				errorWeight,
				yourTall,
				yourWeight,
				imgWoman,
				resultBmi,
				textInfo,
				handleChangeTall,
				handleChangeWeight,
				handleCountBmi,
			}}
		>
			{children}
		</BmiContext.Provider>
	)
}

export default BmiContext

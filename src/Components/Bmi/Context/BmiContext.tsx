import React, { createContext, useEffect, useState } from 'react'

import woman01 from '../assets/bmi_1.png'
import woman02 from '../assets/bmi_2.png'
import woman03 from '../assets/bmi_3.png'
import woman04 from '../assets/bmi_4.png'
import woman05 from '../assets/bmi_5.png'
import woman06 from '../assets/bmi_6.png'
import woman07 from '../assets/bmi_7.png'
import woman08 from '../assets/bmi_8.png'
import { Analytics } from '@vercel/analytics/react'

type initiallStateType = {
	tall: string | null
	weight: string | null
	errorTall: string
	errorWeight: string
	errorAll: string
	yourTall: number
	yourWeight: number
	imgWoman: any
	resultBmi: number
	mainInfo: string
	textInfo: string
	handleChangeTall: (e: string) => void
	handleChangeWeight: (e: string) => void
	handleCountBmi: () => void
	handleDeleteAll: () => void
}

type BmiTypeProvider = {
	children: React.ReactNode
}

const initialState: initiallStateType = {
	tall: '',
	weight: '',
	errorTall: '',
	errorWeight: '',
	errorAll: '',
	yourTall: 0,
	yourWeight: 0,
	imgWoman: woman04,
	resultBmi: 0,
	mainInfo: '',
	textInfo: '',
	handleChangeTall: (e: string) => {},
	handleChangeWeight: (e: string) => {},
	handleCountBmi: () => {},
	handleDeleteAll: () => {},
}

const BmiContext = createContext(initialState)

export const BmiProvider = ({ children }: BmiTypeProvider) => {
	const [tall, setTall] = useState<string | null>('')
	const [weight, setWeight] = useState<string | null>('')
	const [errorTall, setErrorTall] = useState<string>('')
	const [errorWeight, setErrorWeight] = useState<string>('')
	const [errorAll, setErrorAll] = useState<string>('')
	const [yourTall, setYourTall] = useState<number>(0)
	const [yourWeight, setYourWeight] = useState<number>(0)
	const [imgWoman, setImgWoman] = useState<any>(woman04)
	const [resultBmi, setResultBmi] = useState<number>(0)
	const [mainInfo, setMainInfo] = useState('')
	const [textInfo, setTextInfo] = useState('')

	const handleChangeTall = (e: string) => {
		if (e.length <= 3) {
			setTall(e)
		}
	}

	const handleChangeWeight = (e: string) => {
		if (e.length <= 3) {
			setWeight(e)
		}
	}

	useEffect(() => {
		setResultBmi(+resultBmi.toFixed(2))
	}, [resultBmi])

	useEffect(() => {
		if (tall !== '') {
			setErrorTall('')
		}

		if (weight !== '') {
			setErrorWeight('')
		}

		if (tall !== '' && weight !== '') {
			setErrorAll('')
		}
	}, [tall, weight])

	useEffect(() => {
		if (resultBmi > 0 && resultBmi <= 16) {
			setMainInfo('wygłodzenie')
			setTextInfo(
				'Masa ciała jest zbyt niska. Skontaktuj się ze swoim lekarzem, który przeprowadzi wywiad medyczny i być może zleci wykonanie badań diagnostycznych i/lub modyfikację diety.'
			)
			setImgWoman(woman01)
		} else if (resultBmi > 16 && resultBmi <= 16.99) {
			setMainInfo('wychudzenie')
			setTextInfo(
				'Masa ciała jest zbyt niska. Skontaktuj się ze swoim lekarzem, który przeprowadzi wywiad medyczny i być może zleci wykonanie badań diagnostycznych i/lub modyfikację diety.'
			)
			setImgWoman(woman02)
		} else if (resultBmi > 17 && resultBmi <= 18.49) {
			setMainInfo('niedowaga')
			setTextInfo(
				'Masa ciała jest zbyt niska. Rozważ konsultację lekarską i wzbogać dietę w zdrowe tłuszcze roślinne, białko oraz węglowodany złożone.'
			)
			setImgWoman(woman03)
		} else if (resultBmi > 18.5 && resultBmi <= 24.99) {
			setMainInfo('prawidłowa masa ciała')
			setTextInfo(
				'Masa ciała jest prawidłowa. Dbaj o bogatą w warzywa i owoce dietę oraz codzienną dawkę sportu, aby utrzymać dobrą formę.'
			)
			setImgWoman(woman04)
		} else if (resultBmi > 25 && resultBmi <= 29.99) {
			setMainInfo('nadwaga')
			setTextInfo('Masa ciała jest zbyt wysoka. Rozważ konsultację lekarską i modyfikację stylu życia.')
			setImgWoman(woman05)
		} else if (resultBmi > 30 && resultBmi <= 34.99) {
			setMainInfo('Otyłość pierwszego stopnia')
			setTextInfo(
				'Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość I stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.'
			)
			setImgWoman(woman06)
		} else if (resultBmi > 35 && resultBmi <= 39.99) {
			setMainInfo('Otyłość drugiego stopnia')
			setTextInfo(
				'Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość II stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Wdrażając zmiany, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.'
			)
			setImgWoman(woman07)
		} else if (resultBmi >= 40) {
			setMainInfo('Otyłość trzeciego stopnia')
			setTextInfo(
				'Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość III stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Być może konieczne będzie wprowadzenie leczenia farmakologicznego.'
			)
			setImgWoman(woman08)
		}
	}, [resultBmi])

	const handleCountBmi = () => {
		if (tall !== '' && weight !== '' && Number(tall) > 0 && Number(weight) > 0) {
			setResultBmi(Number(weight) / Math.pow(Number(tall) / 100, 2))
			setYourTall(Number(tall))
			setYourWeight(Number(weight))
			setErrorTall('')
			setErrorWeight('')
			setErrorAll('')
		}

		if (tall === '') {
			setErrorTall('nie podałeś wartości')
			setErrorAll('nie wypełniłeś poprawnie formularza')
		}
		if (weight === '') {
			setErrorWeight('nie podałeś wartości')
			setErrorAll('nie wypełniłeś poprawnie formularza')
		}
		if (Number(tall) <= 0) {
			setErrorTall('niepoprawa wartość')
			setResultBmi(0)
			setYourTall(0)
			setMainInfo('')
			setTextInfo('')
			setImgWoman(woman04)
		}
		if (Number(weight) <= 0) {
			setErrorWeight('niepoprawna wartość')
			setResultBmi(0)
			setYourWeight(0)
			setMainInfo('')
			setTextInfo('')
			setImgWoman(woman04)
		}
	}

	const handleDeleteAll = () => {
		setTall('')
		setWeight('')
		setErrorTall('')
		setErrorWeight('')
		setErrorAll('')
		setYourTall(0)
		setYourWeight(0)
		setResultBmi(0)
		setMainInfo('')
		setTextInfo('')
		setImgWoman(woman04)
	}

	return (
		<BmiContext.Provider
			value={{
				tall,
				weight,
				errorTall,
				errorWeight,
				errorAll,
				yourTall,
				yourWeight,
				imgWoman,
				resultBmi,
				mainInfo,
				textInfo,
				handleChangeTall,
				handleChangeWeight,
				handleCountBmi,
				handleDeleteAll,
			}}
		>
			{children}
			<Analytics />
		</BmiContext.Provider>
	)
}

export default BmiContext

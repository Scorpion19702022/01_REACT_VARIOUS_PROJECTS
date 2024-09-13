import React, { createContext, useEffect, useState } from 'react'

type InitialStateType = {
	contract: string
	errorContract: string
	salaryInput: string | null
	errorInputValue: string
	resultContract: string
	resultGrossSalary: number
	handleChangeContract: (e: string) => void
	handleChangeInputSalary: (e: string) => void
	handleCalculateSalary: () => void
	handleDeleteAll: () => void
}

type SlarayProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	contract: '',
	errorContract: '',
	salaryInput: '',
	errorInputValue: '',
	resultContract: '',
	resultGrossSalary: 0,
	handleChangeContract: (e: string) => {},
	handleChangeInputSalary: (e: string) => {},
	handleCalculateSalary: () => {},
	handleDeleteAll: () => {},
}

const SalaryContext = createContext(InitialState)

export const SalaryProvider = ({ children }: SlarayProviderType) => {
	const [contract, setContract] = useState<string>('wybierz umowę')
	const [errorContract, setErrorContract] = useState<string>('')
	const [salaryInput, setSalaryInput] = useState<string | null>('')
	const [errorInputValue, setErrorInputValue] = useState<string>('')
	const [resultContract, setResultContract] = useState<string>('brak typu umowy')
	const [resultGrossSalary, setResultGrossSalary] = useState<number>(0)

	let minSalary = 4300

	const handleChangeContract = (e: string) => {
		setContract(e)
	}

	const handleChangeInputSalary = (e: string) => {
		if (e.length <= 5) {
			setSalaryInput(e)
		}
	}

	useEffect(() => {
		if (Number(salaryInput) <= 0 && salaryInput !== '') {
			setErrorInputValue('niepoprawna wartość')
		} else {
			setErrorInputValue('')
		}
	}, [salaryInput])

	useEffect(() => {
		if (
			(Number(salaryInput) < minSalary && Number(salaryInput) > 0 && contract === 'wybierz umowę') ||
			contract === 'umowa o dzieło' ||
			contract === 'umowa B2B'
		) {
			setErrorInputValue('podałeś wartość poiżej minimalnego wynaggrodzenia')
		} else {
			setErrorInputValue('')
		}
	}, [minSalary, salaryInput, contract])

	useEffect(() => {
		if (contract !== 'wybierz contract') {
			setErrorContract('')
		}
	}, [contract])

	const handleCalculateSalary = () => {
		if (contract === 'wybierz umowę') {
			setErrorContract('nie wybrałeś typu umowy')
			setResultContract('nie wybrałeś typu umowy')
			setResultGrossSalary(0)
		} else if (contract !== 'wybierz umowę') {
			setErrorContract('')
			setResultContract(contract)
			setResultGrossSalary(Number(salaryInput))
		}

		if (salaryInput === '') {
			setErrorInputValue('nie podałeś wartości')
		}
	}

	const handleDeleteAll = () => {
		setContract('wybierz umowę')
		setSalaryInput('')
		setErrorContract('')
		setErrorInputValue('')
		setResultContract('brak typu umowy')
		setResultGrossSalary(0)
	}

	return (
		<SalaryContext.Provider
			value={{
				contract,
				errorContract,
				salaryInput,
				errorInputValue,
				resultContract,
				resultGrossSalary,
				handleChangeContract,
				handleChangeInputSalary,
				handleCalculateSalary,
				handleDeleteAll,
			}}
		>
			{children}
		</SalaryContext.Provider>
	)
}

export default SalaryContext

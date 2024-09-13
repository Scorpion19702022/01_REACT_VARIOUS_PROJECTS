import React, { createContext, useEffect, useState } from 'react'

type InitialStateType = {
	contract: string
	errorContract: string
	salaryInput: string | null
	errorInputValue: string
	handleChangeContract: (e: string) => void
	handleChangeInputSalary: (e: string) => void
	handleCalculateSalary: () => void
}

type SlarayProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	contract: '',
	errorContract: '',
	salaryInput: '',
	errorInputValue: '',
	handleChangeContract: (e: string) => {},
	handleChangeInputSalary: (e: string) => {},
	handleCalculateSalary: () => {},
}

const SalaryContext = createContext(InitialState)

export const SalaryProvider = ({ children }: SlarayProviderType) => {
	const [contract, setContract] = useState<string>('wybierz umowę')
	const [errorContract, setErrorContract] = useState<string>('')
	const [salaryInput, setSalaryInput] = useState<string | null>('')
	const [errorInputValue, setErrorInputValue] = useState<string>('')

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

	const handleCalculateSalary = () => {
		if (contract === 'wybierz umowę') {
			setErrorContract('nie wybrałeś typu umowy')
		} else if (contract !== 'wybierz umowę') {
			setErrorContract('')
		}
	}

	return (
		<SalaryContext.Provider
			value={{
				contract,
				errorContract,
				salaryInput,
				errorInputValue,
				handleChangeContract,
				handleChangeInputSalary,
				handleCalculateSalary,
			}}
		>
			{children}
		</SalaryContext.Provider>
	)
}

export default SalaryContext

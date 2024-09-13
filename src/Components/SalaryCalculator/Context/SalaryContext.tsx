import React, { createContext, useState } from 'react'

type InitialStateType = {
	contract: string
	errorContract: string
	salaryInput: string | null
	handleChangeContract: (e: string) => void
	handleChangeInputSalary: (e: string) => void
	handleCalculateSalary: () => void
}

type SlarayProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	contract: '',
	errorContract: '',
	salaryInput: '',
	handleChangeContract: (e: string) => {},
	handleChangeInputSalary: (e: string) => {},
	handleCalculateSalary: () => {},
}

const SalaryContext = createContext(InitialState)

export const SalaryProvider = ({ children }: SlarayProviderType) => {
	const [contract, setContract] = useState<string>('wybierz umowę')
	const [errorContract, setErrorContract] = useState<string>('')
	const [salaryInput, setSalaryInput] = useState<string | null>('')

	const handleChangeContract = (e: string) => {
		setContract(e)
	}

	const handleChangeInputSalary = (e: string) => {
		if (e.length <= 5) {
			setSalaryInput(e)
		}
	}

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

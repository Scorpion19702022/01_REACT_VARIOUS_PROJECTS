import React, { createContext, useState } from 'react'

type InitialStateType = {
	contract: string
	salaryInput: string | null
	handleChangeContract: (e: string) => void
	handleChangeInputSalary: (e: string) => void
}

type SlarayProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	contract: '',
	salaryInput: '',
	handleChangeContract: (e: string) => {},
	handleChangeInputSalary: (e: string) => {},
}

const SalaryContext = createContext(InitialState)

export const SalaryProvider = ({ children }: SlarayProviderType) => {
	const [contract, setContract] = useState<string>('wybierz umowę')
	const [salaryInput, setSalaryInput] = useState<string | null>('')

	const handleChangeContract = (e: string) => {
		setContract(e)
	}

	const handleChangeInputSalary = (e: string) => {
		if (e.length <= 5) {
			setSalaryInput(e)
		}
	}

	return (
		<SalaryContext.Provider value={{ contract, salaryInput, handleChangeContract, handleChangeInputSalary }}>
			{children}
		</SalaryContext.Provider>
	)
}

export default SalaryContext

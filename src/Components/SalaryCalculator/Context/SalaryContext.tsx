import React, { createContext, useState } from 'react'

type InitialStateType = {
	salaryInput: string | null
	handleChangeInputSalary: (e: string) => void
}

type SlarayProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	salaryInput: '',
	handleChangeInputSalary: (e: string) => {},
}

const SalaryContext = createContext(InitialState)

export const SalaryProvider = ({ children }: SlarayProviderType) => {
	const [salaryInput, setSalaryInput] = useState<string | null>('')

	const handleChangeInputSalary = (e: string) => {
		if (e.length <= 5) {
			setSalaryInput(e)
		}
	}

	return <SalaryContext.Provider value={{ salaryInput, handleChangeInputSalary }}>{children}</SalaryContext.Provider>
}

export default SalaryContext

import React, { createContext, useState } from 'react'

type InitialStateType = {
	salaryInput: string | null
}

type SlarayProviderType = { children: React.ReactNode }

const InitialState: InitialStateType = {
	salaryInput: '',
}

const SalaryContext = createContext(InitialState)

export const SalaryProvider = ({ children }: SlarayProviderType) => {
	const [salaryInput, setSalaryIput] = useState<string>('')

	return <SalaryContext.Provider value={{ salaryInput }}>{children}</SalaryContext.Provider>
}

export default SalaryContext

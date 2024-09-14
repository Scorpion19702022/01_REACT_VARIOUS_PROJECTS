import React, { createContext, useEffect, useState } from 'react'
import { ContributionsType } from '../Types/TypeForSalaryCalculator'

type InitialStateType = {
	contract: string
	errorContract: string
	salaryInput: string | null
	errorInputValue: string
	resultContract: string
	resultGrossSalary: number
	resultNetSalary: number
	contributions: ContributionsType
	contributionsAll: string | number
	income: number
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
	resultNetSalary: 0,
	contributions: {
		contrZUS: 0,
		contrPension: 0,
		contrDisability: 0,
		contrSickness: 0,
		contrHealthy: 0,
		contrTax: 0,
	},
	contributionsAll: 0,
	income: 0,
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
	const [resultNetSalary, setResultNetSalary] = useState<number>(0)

	const [contributions, setContributions] = useState<ContributionsType>({
		contrZUS: 0,
		contrPension: 0,
		contrDisability: 0,
		contrSickness: 0,
		contrHealthy: 0,
		contrTax: 0,
	})

	const [contributionsAll, setContributionsAll] = useState<string | number>(0)

	const [income, setIncome] = useState<number>(0)

	let minSalary = 4300

	let contributionsZUS = 0.1371
	let contributionPension = 0.0976
	let contributionDisability = 0.015
	let contributionSikness = 0.0245

	let contributionsHealthy = 0.09
	let costMonth = 250

	let tax = 0.12

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
			Number(salaryInput) < minSalary &&
			Number(salaryInput) > 0 &&
			(contract === 'wybierz umowę' || contract === 'umowa o pracę' || contract === 'umowa zlecenie')
		) {
			setErrorInputValue(`minimalne wynagr. to ${minSalary} zł`)
		} else {
			setErrorInputValue('')
		}
	}, [minSalary, salaryInput, contract])

	useEffect(() => {
		if (contract !== 'wybierz umowę') {
			setErrorContract('')
		}
	}, [contract])

	useEffect(() => {
		if (
			salaryInput !== '' &&
			Number(salaryInput) >= minSalary &&
			contract === 'umowa o pracę' &&
			contributions.contrZUS > 0
		) {
			setIncome(Number(salaryInput) - contributions.contrZUS - costMonth)
		}
	}, [contract, contributions.contrZUS, costMonth, minSalary, salaryInput])

	useEffect(() => {
		if (income > 0 && contract === 'umowa o pracę') {
			setContributions({
				...contributions,
				contrTax: +(income * tax - 300).toFixed(0),
			})
		}
	}, [income, contract])

	useEffect(() => {
		if (contributions.contrTax > 0 && contract === 'umowa o pracę') {
			setResultNetSalary(
				Number(salaryInput) - contributions.contrZUS - contributions.contrHealthy - contributions.contrTax
			)
			setContributionsAll(contributions.contrZUS + contributions.contrHealthy + contributions.contrTax)
		}
	}, [contributions.contrTax, contract])

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

		if (salaryInput !== '' && Number(salaryInput) >= minSalary && contract === 'umowa o pracę') {
			setContributions({
				...contributions,
				contrZUS: Number(salaryInput) * contributionsZUS,
				contrPension: Number(salaryInput) * contributionPension,
				contrDisability: Number(salaryInput) * contributionDisability,
				contrSickness: Number(salaryInput) * contributionSikness,
				contrHealthy: (Number(salaryInput) - contributions.contrZUS) * contributionsHealthy,
			})
		}
	}

	const handleDeleteAll = () => {
		setContract('wybierz umowę')
		setSalaryInput('')
		setErrorContract('')
		setErrorInputValue('')
		setResultContract('brak typu umowy')
		setResultGrossSalary(0)
		setResultNetSalary(0)
		setContributions({
			contrZUS: 0,
			contrPension: 0,
			contrDisability: 0,
			contrSickness: 0,
			contrHealthy: 0,
			contrTax: 0,
		})
		setContributionsAll(0)
		setIncome(0)
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
				resultNetSalary,
				contributions,
				contributionsAll,
				income,
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

import React, { createContext, useEffect, useState } from 'react'
import { ContributionsType } from '../Types/TypeForSalaryCalculator'

import { Analytics } from '@vercel/analytics/react'

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
	incomeContractOfMandate: number
	isCalculating: boolean
	handleChangeContract: (e: string) => void
	handleKeyDown: (e: any) => void
	handleUseEnter: (e: any) => void
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
	incomeContractOfMandate: 0,
	isCalculating: false,
	handleChangeContract: (e: string) => {},
	handleKeyDown: (e: any) => {},
	handleUseEnter: (e: any) => {},
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
	const [incomeContractOfMandate, setIncomeContractOfMandate] = useState<number>(0)

	const [isCalculating, setIsCalculating] = useState<boolean>(false)

	let minSalary = 4300

	let contributionsZUS = 0.1371
	let contributionPension = 0.0976
	let contributionDisability = 0.015
	let contributionSikness = 0.0245

	let contributionsHealthy = 0.09
	let costMonth = 250

	let tax = 0.12
	let taxOfWork = 0.096

	const handleChangeContract = (e: string) => {
		setContract(e)
		if (contract === 'wybierz umowę') {
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
			setIncome(0)
			setIncomeContractOfMandate(0)
			setContributionsAll(0)
		}
	}

	const handleKeyDown = (e: any) => {
		const invalidChars = [' ', '.', ',']

		if (invalidChars.includes(e.key)) {
			e.preventDefault()
		}
	}

	const handleUseEnter = (e: any) => {
		if (e.key === 'Enter') {
			handleCalculateSalary()
			e.preventDefault()
		}
	}

	const handleChangeInputSalary = (e: string) => {
		const numericValue = e.replace(/\D/g, '')

		if (numericValue.length <= 5) {
			setSalaryInput(numericValue)
		}
	}

	useEffect(() => {
		if (contract !== 'wybierz umowę') {
			setErrorContract('')
		}
	}, [contract])

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
		if (contract === 'umowa o pracę') {
			setIncomeContractOfMandate(0)
		} else if (contract === 'umowa zlecenie') {
			setIncome(0)
		} else if (contract === 'umowa o dzieło') {
			setIncome(0)
			setIncomeContractOfMandate(0)
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
		} else if (
			salaryInput !== '' &&
			Number(salaryInput) >= minSalary &&
			contract === 'umowa zlecenie' &&
			contributions.contrZUS > 0
		) {
			setIncome(0)
			setIncomeContractOfMandate(Number(salaryInput) - contributions.contrZUS - Number(salaryInput) * 0.2)
		} else if (salaryInput !== '' && contract === 'umowa o dzieło') {
			setIncome(0)
		}
	}, [contract, contributions.contrZUS, costMonth, minSalary, salaryInput])

	useEffect(() => {
		if (isCalculating) {
			if (income > 0 && contract === 'umowa o pracę') {
				setIncomeContractOfMandate(0)
				setContributions({
					...contributions,
					contrHealthy: (Number(salaryInput) - contributions.contrZUS) * contributionsHealthy,
					contrTax: +(income * tax - 300).toFixed(0),
				})
			} else if (incomeContractOfMandate > 0 && contract === 'umowa zlecenie') {
				setIncome(0)
				setContributions({
					...contributions,
					contrHealthy: (Number(salaryInput) - contributions.contrZUS) * contributionsHealthy,
					contrTax: +(incomeContractOfMandate * tax).toFixed(0),
				})
			}
			setIsCalculating(false)
		}
	}, [isCalculating, income, contract, incomeContractOfMandate, salaryInput, contributions.contrZUS])

	useEffect(() => {
		if (contributions.contrTax > 0 && contract === 'umowa o pracę') {
			setIncomeContractOfMandate(0)
			setResultNetSalary(
				Number(salaryInput) - contributions.contrZUS - contributions.contrHealthy - contributions.contrTax
			)
			setContributionsAll(contributions.contrZUS + contributions.contrHealthy + contributions.contrTax)
		} else if (contributions.contrTax > 0 && contract === 'umowa zlecenie') {
			setIncome(0)
			setResultNetSalary(
				Number(salaryInput) - contributions.contrZUS - contributions.contrHealthy - contributions.contrTax
			)
			setContributionsAll(contributions.contrZUS + contributions.contrHealthy + contributions.contrTax)
		} else if (contributions.contrTax > 0 && contract === 'umowa o dzieło') {
			setIncome(0)
			setIncomeContractOfMandate(0)
			setResultNetSalary(
				Number(salaryInput) - contributions.contrZUS - contributions.contrHealthy - contributions.contrTax
			)
			setContributionsAll(contributions.contrZUS + contributions.contrHealthy + contributions.contrTax)
		}
	}, [contributions.contrTax, contract])

	const handleCalculateSalary = () => {
		if (contract === 'wybierz umowę' && salaryInput === '') {
			setErrorContract('nie wybrałeś typu umowy')
			setResultContract('nie wybrałeś typu umowy')
			setErrorInputValue('nie podałeś wartości')
			setResultGrossSalary(0)
		} else if (contract !== 'wybierz umowę' && salaryInput === '') {
			setErrorContract('')
			setResultContract(contract)
			setErrorInputValue('nie podałeś wartości')
			setResultGrossSalary(0)
		} else if (contract === 'wybierz umowę' && salaryInput !== '') {
			setErrorContract('nie wybrałeś typu umowy')
			setResultContract('nie wybrałeś typu umowy')
			setErrorInputValue('')
			setResultGrossSalary(0)
		} else if (contract === 'wybierz umowę') {
			setErrorContract('nie wybrałeś typu umowy')
			setResultContract('nie wybrałeś typu umowy')
			setErrorInputValue('')
			setResultGrossSalary(0)
		} else if (salaryInput === '') {
			setErrorInputValue('nie podałeś wartości')
		} else if (contract !== 'wybierz umowę' && salaryInput !== '') {
			setErrorContract('')
			setErrorInputValue('')
			setResultContract(contract)
			setResultGrossSalary(Number(salaryInput))
		}
		setIsCalculating(true)

		if (salaryInput !== '' && Number(salaryInput) >= minSalary && contract === 'umowa o pracę') {
			setContributions({
				...contributions,
				contrZUS: Number(salaryInput) * contributionsZUS,
				contrPension: Number(salaryInput) * contributionPension,
				contrDisability: Number(salaryInput) * contributionDisability,
				contrSickness: Number(salaryInput) * contributionSikness,
			})
			const incomeWork = Number(salaryInput) - Number(salaryInput) * contributionsZUS - costMonth
			setIncome(incomeWork)
		} else if (salaryInput !== '' && contract === 'umowa zlecenie') {
			setContributions({
				...contributions,
				contrZUS: Number(salaryInput) * contributionsZUS,
				contrPension: Number(salaryInput) * contributionPension,
				contrDisability: Number(salaryInput) * contributionDisability,
				contrSickness: 0,
			})
			const incomeMandate = Number(salaryInput) - Number(salaryInput) * contributionsZUS - Number(salaryInput) * 0.2
			setIncomeContractOfMandate(incomeMandate)
		} else if (salaryInput !== '' && contract === 'umowa o dzieło') {
			setContributions({
				contrZUS: 0,
				contrPension: 0,
				contrDisability: 0,
				contrSickness: 0,
				contrHealthy: 0,
				contrTax: Number(salaryInput) * taxOfWork,
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
		setIncomeContractOfMandate(0)
		setIsCalculating(false)
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
				incomeContractOfMandate,
				isCalculating,
				handleChangeContract,
				handleUseEnter,
				handleKeyDown,
				handleChangeInputSalary,
				handleCalculateSalary,
				handleDeleteAll,
			}}
		>
			{children}
			<Analytics />
		</SalaryContext.Provider>
	)
}

export default SalaryContext

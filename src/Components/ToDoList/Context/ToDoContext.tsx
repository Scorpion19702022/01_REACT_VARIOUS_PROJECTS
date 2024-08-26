import React, { createContext, useEffect, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { TypeForToDo } from '../Types/TypeForToDo'

import { v4 as uuidv4 } from 'uuid'

type InitialStateType = {
	toDo: TypeForToDo[]
	taskInput: string
	quantitySign: number
	inputErrors: string
	priority: boolean
	date: any
	infoToDo: string
	handleChangeInput: (e: string) => void
	handleChangeCheckpoit: () => void
	handleChangeDate: (e: any) => void
	handleAddTask: () => void
}

type ToDoProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	toDo: [],
	taskInput: '',
	quantitySign: 0,
	inputErrors: '',
	priority: false,
	date: '',
	infoToDo: '',
	handleChangeInput: (e: string) => {},
	handleChangeCheckpoit: () => {},
	handleChangeDate: (e: any) => {},
	handleAddTask: () => {},
}

const ToDoContext = createContext(InitialState)

export const ToDoProvider = ({ children }: ToDoProviderType) => {
	let currentDate = new Date().toISOString().slice(0, 10)

	const [taskInput, setTaskInput] = useState<string>('')
	const [quantitySign, setQuantitySign] = useState<number>(0)
	const [inputErrors, setInputErrors] = useState<string>('')
	const [priority, setPriority] = useState<boolean>(false)
	const [date, setDate] = useState<any>(currentDate)
	const [infoToDo, setInfoToDo] = useState<string>('')

	const [toDo, setToDo] = useState<TypeForToDo[]>([])

	const handleChangeInput = (e: string) => {
		if (e.length <= 10) {
			setTaskInput(e)
			setQuantitySign(e.length)
		}
	}

	const handleChangeCheckpoit = () => {
		setPriority(!priority)
	}

	const handleChangeDate = (e: any) => {
		setDate(e.target.value)
	}

	useEffect(() => {
		if (taskInput.length >= 10) {
			setInputErrors('osiągąłeś maksymalną ilość znaków')
		} else {
			setInputErrors('')
		}
	}, [taskInput.length])

	const handleAddTask = () => {
		const Task: TypeForToDo = {
			...toDo,
			id: uuidv4(),
			title: taskInput,
			addDate: date,
			important: priority,
		}

		if (taskInput !== '' && toDo.length <= 5) {
			setToDo([...toDo, Task])
			setTaskInput('')
			setInfoToDo('dodano zadanie')
		} else if (toDo.length > 5) {
			setInfoToDo('dodano maksymalną ilość zadań')
		}

		if (taskInput === '') {
			setInputErrors('nie wpisałeś zadania')
		}
	}

	console.log(toDo)

	return (
		<ToDoContext.Provider
			value={{
				taskInput,
				quantitySign,
				inputErrors,
				priority,
				date,
				toDo,
				infoToDo,
				handleChangeInput,
				handleChangeCheckpoit,
				handleChangeDate,
				handleAddTask,
			}}
		>
			{children}
			<Analytics />
		</ToDoContext.Provider>
	)
}

export default ToDoContext

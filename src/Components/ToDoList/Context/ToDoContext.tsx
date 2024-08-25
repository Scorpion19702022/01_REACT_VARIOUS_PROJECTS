import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
// import { TypeForToDo } from '../Types/TypeForToDo'

type InitialStateType = {
	// toDo: TypeForToDo[]
	taskInput: string
	quantitySign: number
	priority: boolean
	date: any
	handleChangeInput: (e: string) => void
	handleChangeCheckpoit: () => void
	handleChangeDate: (e: any) => void
}

type ToDoProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	// toDo: [],
	taskInput: '',
	quantitySign: 0,
	priority: false,
	date: '',
	handleChangeInput: (e: string) => {},
	handleChangeCheckpoit: () => {},
	handleChangeDate: (e: any) => {},
}

const ToDoContext = createContext(InitialState)

export const ToDoProvider = ({ children }: ToDoProviderType) => {
	let currentDate = new Date().toISOString().slice(0, 10)

	const [taskInput, setTaskInput] = useState<string>('')
	const [quantitySign, setQuantitySign] = useState<number>(0)
	const [priority, setPriority] = useState<boolean>(false)
	const [date, setDate] = useState<any>(currentDate)

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

	console.log(date)

	return (
		<ToDoContext.Provider
			value={{ taskInput, quantitySign, priority, date, handleChangeInput, handleChangeCheckpoit, handleChangeDate }}
		>
			{children}
			<Analytics />
		</ToDoContext.Provider>
	)
}

export default ToDoContext

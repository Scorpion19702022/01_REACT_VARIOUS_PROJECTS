import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
// import { TypeForToDo } from '../Types/TypeForToDo'

type InitialStateType = {
	// toDo: TypeForToDo[]
	taskInput: string
	quantitySign: number
	important: boolean
	handleChangeInput: (e: string) => void
	handleChangeCheckpoit: () => void
}

type ToDoProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	// toDo: [],
	taskInput: '',
	quantitySign: 0,
	important: false,
	handleChangeInput: (e: string) => {},
	handleChangeCheckpoit: () => {},
}

const ToDoContext = createContext(InitialState)

export const ToDoProvider = ({ children }: ToDoProviderType) => {
	const [taskInput, setTaskInput] = useState<string>('')
	const [quantitySign, setQuantitySign] = useState<number>(0)
	const [important, setImportant] = useState<boolean>(false)

	const handleChangeInput = (e: string) => {
		if (e.length <= 10) {
			setTaskInput(e)
			setQuantitySign(e.length)
		}
	}

	const handleChangeCheckpoit = () => {
		setImportant(!important)
	}

	console.log(important)

	return (
		<ToDoContext.Provider value={{ taskInput, quantitySign, important, handleChangeInput, handleChangeCheckpoit }}>
			{children}
			<Analytics />
		</ToDoContext.Provider>
	)
}

export default ToDoContext

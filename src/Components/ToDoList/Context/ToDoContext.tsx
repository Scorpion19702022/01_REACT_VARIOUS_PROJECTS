import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
// import { TypeForToDo } from '../Types/TypeForToDo'

type InitialStateType = {
	// toDo: TypeForToDo[]
	taskInput: string
	important: boolean
	handleChangeInput: (e: string) => void
	// handleChangeCheckpoit: (e: boolean) => void
}

type ToDoProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	// toDo: [],
	taskInput: '',
	important: false,
	handleChangeInput: (e: string) => {},
	// handleChangeCheckpoit: (e: boolean) => {},
}

const ToDoContext = createContext(InitialState)

export const ToDoProvider = ({ children }: ToDoProviderType) => {
	const [taskInput, setTaskInput] = useState<string>('')
	const [important, setImportant] = useState<boolean>(false)

	const handleChangeInput = (e: string) => {
		if (e.length < 10) {
			setTaskInput(e)
		}
	}

	console.log(taskInput)

	return (
		<ToDoContext.Provider value={{ taskInput, important, handleChangeInput }}>
			{children}
			<Analytics />
		</ToDoContext.Provider>
	)
}

export default ToDoContext

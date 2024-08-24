import React, { createContext, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
// import { TypeForToDo } from '../Types/TypeForToDo'

type InitialStateType = {
	// toDo: TypeForToDo[]
	task: string
	important: boolean
	// handleChangeInput: (e: string) => void
	// handleChangeCheckpoit: (e: boolean) => void
}

type ToDoProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	// toDo: [],
	task: '',
	important: false,
	// handleChangeInput: (e: string) => {},
	// handleChangeCheckpoit: (e: boolean) => {},
}

const ToDoContext = createContext(InitialState)

export const ToDoProvider = ({ children }: ToDoProviderType) => {
	const [task, setTask] = useState<string>('')
	const [important, setImportant] = useState<boolean>(false)

	return (
		<ToDoContext.Provider value={{ task, important }}>
			{children}
			<Analytics />
		</ToDoContext.Provider>
	)
}

export default ToDoContext

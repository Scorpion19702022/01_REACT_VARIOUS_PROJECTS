import React, { createContext, useEffect, useState } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { TypeForToDo } from '../Types/TypeForToDo'

import { v4 as uuidv4 } from 'uuid'

type InitialStateType = {
	toDo: TypeForToDo[]
	done: any[]
	taskInput: string
	quantitySign: number
	inputErrors: string
	priority: boolean
	date: any
	infoToDo: string
	infoMaxToDoList: string
	sureDelete: { [key: string]: boolean }
	sureDone: { [key: string]: boolean }
	sureDeleteAll: boolean
	sureDeleteAllDone: boolean
	select: string
	selectImportant: boolean
	selectLessImportant: boolean
	selectAll: boolean
	handleChangeInput: (e: string) => void
	handleChangeCheckpoit: () => void
	handleChangeDate: (e: any) => void
	handleSelectTask: (isSelect: string) => void
	handleAddTask: () => void
	handleKeyDown: (e: any) => void
	handleSureDelete: (id: string) => void
	handleSureDone: (id: string) => void
	handleSureDeleteAll: () => void
	handleSureDeleteAllDone: () => void
	handleDeleteTask: (id: string, item: string) => void
	handleDoneTask: (id: string, item: string) => void
	handleDeleteAllTasks: () => void
	handleDeleteTaskDone: (id: string) => void
	handleDeleteAllTaskDone: () => void
}

type ToDoProviderType = {
	children: React.ReactNode
}

const InitialState: InitialStateType = {
	toDo: [],
	done: [],
	taskInput: '',
	quantitySign: 0,
	inputErrors: '',
	priority: false,
	date: '',
	infoToDo: '',
	infoMaxToDoList: '',
	sureDelete: {},
	sureDone: {},
	sureDeleteAll: false,
	sureDeleteAllDone: false,
	select: '',
	selectImportant: false,
	selectLessImportant: false,
	selectAll: true,
	handleChangeInput: (e: string) => {},
	handleChangeCheckpoit: () => {},
	handleChangeDate: (e: any) => {},
	handleSelectTask: (isSelect: string) => {},
	handleAddTask: () => {},
	handleKeyDown: (e: any) => {},
	handleSureDelete: (id: string) => {},
	handleSureDone: (id: string) => {},
	handleSureDeleteAll: () => {},
	handleSureDeleteAllDone: () => {},
	handleDeleteTask: (id: string, item: string) => {},
	handleDoneTask: (id: string, item: string) => {},
	handleDeleteAllTasks: () => {},
	handleDeleteTaskDone: (id: string) => {},
	handleDeleteAllTaskDone: () => {},
}

const ToDoContext = createContext(InitialState)

export const ToDoProvider = ({ children }: ToDoProviderType) => {
	let currentDate = new Date().toLocaleString('en-CA').slice(0, 10)

	const [taskInput, setTaskInput] = useState<string>('')
	const [quantitySign, setQuantitySign] = useState<number>(0)
	const [inputErrors, setInputErrors] = useState<string>('')
	const [priority, setPriority] = useState<boolean>(false)
	const [date, setDate] = useState<any>(currentDate)
	const [infoToDo, setInfoToDo] = useState<string>('')
	const [infoMaxToDoList, setInfoMaxToDoList] = useState<string>('')

	// const [toDo, setToDo] = useState<TypeForToDo[]>([])
	// const [done, setDone] = useState<any>([])

	const [toDo, setToDo] = useState<TypeForToDo[]>(() => {
		const savedToDo = localStorage.getItem('toDoList')
		return savedToDo ? JSON.parse(savedToDo) : []
	})

	const [done, setDone] = useState<TypeForToDo[]>(() => {
		const savedDone = localStorage.getItem('doneList')
		return savedDone ? JSON.parse(savedDone) : []
	})

	const [sureDelete, setSureDelete] = useState<{ [key: string]: boolean }>({})
	const [sureDone, setSureDone] = useState<{ [key: string]: boolean }>({})
	const [sureDeleteAll, setSureDeleteAll] = useState<boolean>(false)
	const [sureDeleteAllDone, setSureDeleteAllDone] = useState<boolean>(false)

	const [select, setSelect] = useState<string>('all')

	const [selectImportant, setSelecImportant] = useState<boolean>(false)
	const [selectLessImportant, setSelectLessImportant] = useState<boolean>(false)
	const [selectAll, setSelectAll] = useState<boolean>(true)

	const handleChangeInput = (e: string) => {
		if (e.length <= 20) {
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
		if (taskInput.length >= 20) {
			setInputErrors('osiągąłeś maksymalną ilość znaków')
		} else {
			setInputErrors('')
		}
	}, [taskInput.length])

	useEffect(() => {
		if (toDo.length >= 10) {
			setInfoMaxToDoList('dodano maksymalną ilość zadań')
		}
	}, [toDo.length])

	useEffect(() => {
		setTimeout(() => {
			if (infoToDo === 'dodano zadanie') {
				setInfoToDo('')
			}
		}, 2000)
	}, [infoToDo])

	useEffect(() => {
		setQuantitySign(taskInput.length)
	}, [taskInput.length])

	useEffect(() => {
		localStorage.setItem('toDoList', JSON.stringify(toDo))
	}, [toDo])

	useEffect(() => {
		localStorage.setItem('doneList', JSON.stringify(done))
	}, [done])

	const handleAddTask = () => {
		setSelect('all')
		setSelectAll(true)
		setSelecImportant(false)
		setSelectLessImportant(false)
		setDate(currentDate)
		const Task: TypeForToDo = {
			id: uuidv4(),
			title: taskInput,
			addDate: date,
			important: priority,
		}

		if (taskInput !== '' && toDo.length < 10 && taskInput.trim()) {
			setToDo(prevToDo => [...prevToDo, Task])
			setTaskInput('')
			setPriority(false)
			setInfoToDo('dodano zadanie')
		}

		if (taskInput === '' || taskInput !== taskInput.trim()) {
			setInputErrors('nie wpisałeś zadania')
		}
	}

	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			handleAddTask()
			e.preventDefault()
		}
	}

	const handleSureDelete = (id: string) => {
		setSureDelete(prevState => ({
			...prevState,
			[id]: !prevState[id],
		}))
	}

	const handleSureDone = (id: string) => {
		setSureDone(prevState => ({
			...prevState,
			[id]: !prevState[id],
		}))
	}

	const handleSureDeleteAll = () => {
		if (toDo.length !== 0) {
			setSureDeleteAll(!sureDeleteAll)
		}
	}

	const handleSelectTask = (isSelect: string) => {
		if (isSelect === 'all') {
			setSelect('all')
			setSelectAll(true)
			setSelecImportant(false)
			setSelectLessImportant(false)
		} else if (isSelect === 'important') {
			setSelect('important')
			setSelecImportant(!selectImportant)
			setSelectAll(false)
			setSelectLessImportant(false)
		} else if (isSelect === 'lessImportant') {
			setSelect('lessImportant')
			setSelecImportant(false)
			setSelectAll(false)
			setSelectLessImportant(!selectLessImportant)
		}
	}

	const handleDeleteTask = (id: string, item: string) => {
		const deleteTask = toDo.filter(itemID => id !== itemID.id)

		if (deleteTask) {
			setToDo(deleteTask)
			setInfoToDo(`usunięto zadanie: ${item}`)
			setTimeout(() => {
				setInfoToDo('')
			}, 2000)
		}
	}

	const handleDeleteAllTasks = () => {
		setToDo([])
		setSureDeleteAll(false)
		setInfoToDo('usunięto wszystkie zadania')
		setTimeout(() => {
			setInfoToDo('')
		}, 2000)
	}

	const dataDoneHour = new Date().toLocaleTimeString().slice(0, 5)
	const dateDone = new Date()
	const dayName = dateDone.toLocaleDateString('pl-PL', { weekday: 'long' })

	const handleDoneTask = (id: string, item: string) => {
		const addDoneTask = toDo.find(task => task.id === id)

		if (addDoneTask) {
			const updatedTask: TypeForToDo = {
				...addDoneTask,
				doneHour: dataDoneHour,
				doneDay: dayName,
			}

			setDone(prevDone => [...prevDone, updatedTask])

			const remainingTasks = toDo.filter(task => task.id !== id)
			setToDo(remainingTasks)

			setInfoToDo(`zrobiłeś zadanie ${item}`)
			setTimeout(() => {
				setInfoToDo('')
			}, 2000)
		}
	}

	const handleDeleteTaskDone = (id: string) => {
		const taskDone = done.filter((item: any) => item.id !== id)
		setDone(taskDone)
	}

	const handleSureDeleteAllDone = () => {
		if (done.length !== 0) {
			setSureDeleteAllDone(!sureDeleteAllDone)
		}
	}

	const handleDeleteAllTaskDone = () => {
		setDone([])
		setSureDeleteAllDone(false)
	}

	return (
		<ToDoContext.Provider
			value={{
				taskInput,
				quantitySign,
				inputErrors,
				priority,
				date,
				toDo,
				done,
				infoToDo,
				sureDelete,
				sureDone,
				sureDeleteAll,
				sureDeleteAllDone,
				infoMaxToDoList,
				select,
				selectImportant,
				selectLessImportant,
				selectAll,
				handleChangeInput,
				handleChangeCheckpoit,
				handleChangeDate,
				handleSelectTask,
				handleAddTask,
				handleKeyDown,
				handleSureDelete,
				handleSureDone,
				handleSureDeleteAll,
				handleSureDeleteAllDone,
				handleDeleteTask,
				handleDoneTask,
				handleDeleteAllTasks,
				handleDeleteTaskDone,
				handleDeleteAllTaskDone,
			}}
		>
			{children}
			<Analytics />
		</ToDoContext.Provider>
	)
}

export default ToDoContext

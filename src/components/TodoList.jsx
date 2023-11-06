import React, { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';
import CreateTaskModal from './CreateTaskModal';

const TodoList = () => {

	const [todos, setTodos] = useState([]);
	const [isDeleteOpen, setIsDeleteOpen] = useState(false);
	const [todoToDelete, setTodoToDelete] = useState(null);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	const setLocalStorage = (tasks) => {
		localStorage.setItem('todos', JSON.stringify(tasks));
	};

	const getLocalStorage = () => {
		const storedTasks = localStorage.getItem('todos');
		return storedTasks ? JSON.parse(storedTasks) : [];
	};

	useEffect(() => {
		const savedTasks = getLocalStorage();
		setTodos(savedTasks);
	}, []);


	const addTodo = (task) => {
		if(task.trim() !== ''){
			const newTodos = [...todos, task];
			setTodos(newTodos);
			setLocalStorage(newTodos);
			setIsCreateModalOpen(false);
		}
	};

	const openDeleteModal = (index) => {
		setTodoToDelete(index);
		setIsDeleteOpen(true);
	};

	const closeDeleteModal = () => {
		setTodoToDelete(null);
		setIsDeleteOpen(false);
	}

	const confirmDelete = () => {
		const newTodos = [...todos];
		newTodos.splice(todoToDelete, 1);
		setTodos(newTodos);
		setLocalStorage(newTodos);
		closeDeleteModal();
	}

	return (
		<div className='flex flex-col items-center jc'>
			<h1 className='text-6xl font-bold text-black mb-5'>TODO LIST APP</h1>
			<button className='mb-5 text-xl font-bold border-4 px-8 py-4 border-blue-600 text-blue-600 bg-blue-100 hover:opacity-80 transition-opacity' onClick={() => setIsCreateModalOpen(true)}>Create Task</button>
			<div>
				<ul>
					{todos.map((todo, index) => (
						<li className='my-2 text-xl text-center' key={index}>
							{todo}
							<button className='text-red-400 px-3' onClick={() => openDeleteModal(index)}>Delete</button>
						</li>
					))}
				</ul>
			</div>
			<CreateTaskModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onAdd={addTodo} />
			<DeleteModal isOpen={isDeleteOpen} onCancel={closeDeleteModal} onConfirm={confirmDelete} />
		</div>
	)
};

export default TodoList;
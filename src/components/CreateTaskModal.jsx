import React, { useState } from 'react';

const CreateTaskModal = ({isOpen, onClose, onAdd}) => {

	const [task, setTask] = useState('');

	const handleAdd = () => {
		onAdd(task);
		setTask('');
	};

	return (
		isOpen && (
			<div className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50'>
				<div className='bg-white w-2/5 h-2/5 flex flex-col justify-center items-center shadow-md shadow-gray-500'>
					<h1 className='flex justify-center text-4xl font-bold mb-8'>Create Task</h1>
					<input className='mb-8 outline-none border-2 border-black w-80 px-4 py-3' type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter a new task ...' />
					<div className='flex justify-center gap-x-8'>
						<button className='border-2 px-4 py-2 border-black text-black' onClick={onClose}>Cancel</button>
						<button className='border-2 px-4 py-2 border-black bg-green-400 text-black' onClick={handleAdd}>Add</button>
					</div>
				</div>
			</div>
		)
	);
};

export default CreateTaskModal;
import React from 'react';

const DeleteModal = ({ isOpen, onCancel, onConfirm }) => {
	return (
		isOpen && (
		<div className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50'>
			<div className='bg-white w-2/6 h-2/6 flex flex-col justify-center items-center shadow-md shadow-gray-500'>
				<h1 className='flex justify-center text-4xl font-bold mb-8'>Are you sure ?</h1>
				<div className=' flex justify-center gap-x-8 text-xl font-normal'>
					<button className='border-2 px-4 py-2 border-black text-black' onClick={onCancel}>Cancel</button>
					<button className='border-2 px-4 py-2 border-black bg-red-400 text-black' onClick={onConfirm}>Delete</button>
				</div>
			</div>
		</div>
		)
	);
};

export default DeleteModal;
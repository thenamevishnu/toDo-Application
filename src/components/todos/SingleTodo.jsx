import { useState } from "react";

function SingleTodo({ todo }) {
	const [editable, setEditable] = useState(false);
	const [inputValue, setInputValue] = useState(todo.text);

	return editable ? (
		<div className="w-full bg-slate-950 gap-2 text-white flex p-5 justify-between items-center rounded hover:shadow-white shadow-lg cursor-default duration-300">
			<input
				type="text"
				value={inputValue}
				className="bg-slate-950 w-full outline-none font-mono text-xl"
				onChange={e => setInputValue(e.target.value)}
			/>
			<i
				onClick={() => setEditable(false)}
				className="fa-solid fa-floppy-disk cursor-pointer"
			></i>
		</div>
	) : (
		<div className="w-full bg-slate-950 gap-6 text-white flex p-5 justify-between items-center rounded hover:shadow-white shadow-lg cursor-default duration-300">
			<input className="outline-dashed outline-cyan-500" type="checkbox" />
			<h1 className="truncate font-mono text-xl">{todo.text}</h1>
			<div className="flex gap-2 justify-center items-center">
				<i
					onClick={() => setEditable(true)}
					className="fa-solid fa-pen-to-square cursor-pointer hover:text-green-600 duration-200"
				></i>
				<i className="fa-solid fa-trash cursor-pointer hover:text-red-600 duration-200"></i>
			</div>
		</div>
	);
}

export default SingleTodo;

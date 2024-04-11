import { useContext, useState } from "react";
import TodoContext from "../../contexts/todoContext/TodoContext";
import SingleTodo from "./SingleTodo";
import { toast } from "react-toastify";
import axios from "axios"

function Todos() {
	const { todos } = useContext(TodoContext);
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = async e => {
		e.preventDefault();
		console.log("create");
		if (inputValue === "") {
			toast.error("Oops! add some texts", { position: "top-center" });
		}
		await axios.post("http://localhost:3000", inputValue)
	};

	return (
		<div className="w-full h-screen p-10 flex flex-col gap-4 bg-cyan-700 items-center">
			<h1 className="text-2xl font-extrabold">
				My Tasks<span className="animate-pulse text-red-600">...</span>
			</h1>
			<form onSubmit={handleSubmit} className="flex gap-2">
				<input
					className="outline-none font-mono placeholder:text-white rounded py-2 px-4 bg-slate-400 shadow-lg focus:shadow-white"
					type="text"
					placeholder="Enter task name"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button
					className="py-2 px-4 bg-slate-400 hover:bg-black hover:text-white rounded hover:shadow-white duration-200 shadow-lg"
					type="submit"
				>
					<i className="fa-solid fa-plus"></i>
				</button>
			</form>
			<div className="flex flex-col gap-4 w-[50%]">
				{todos?.map(ele => (
					<SingleTodo key={ele.id} todo={ele} />
				))}
			</div>
		</div>
	);
}

export default Todos;

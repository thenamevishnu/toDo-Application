import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const TodoContext = createContext({});

export const TodoDataProvider = ({ children }) => {
	const [todos, setTodos] = useState([
		{ id: 1, text: "complete the todo application", completed: false },
		{
			id: 2,
			text: "complete update funcion adsadsfasdfasdfasdfafdaf",
			completed: false,
		},
		{ id: 3, text: "complete delete funcion", completed: false },
	]);

	useEffect(() => {
		(async () => {
			try {
				console.log("read");
				const { data } = await axios.get("http://localhost:3000");
				setTodos(data);
			} catch (error) {
				console.log(error);
				toast.error(error.message);
			}
		})();
	}, []);

	return (
		<TodoContext.Provider value={{ todos, setTodos }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContext;

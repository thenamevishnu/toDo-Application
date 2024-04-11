import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Todos from "./components/todos/Todos";
import { TodoDataProvider } from "./contexts/todoContext/TodoContext";

function App() {
	return (
		<>
			<TodoDataProvider>
				<Todos />
      </TodoDataProvider>
      <ToastContainer />
		</>
	);
}

export default App;

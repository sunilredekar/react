import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([
    "Test a 1",
    "test aa 2",
    "test aaa 3",
    "test ccc a 4",
  ]);

  const [todoValue, setTodoValue] = useState("");

  function handleAddTodos(newtodo) {
    const newTodos = [...todos, newtodo];
    saveTodosLocally(newTodos)
    setTodos(newTodos);
  }

  function handleDeleteTodos(index) {
    const newTodos = todos.filter((todo, i) => i !== index);
    saveTodosLocally(newTodos);
    setTodos(newTodos);
  }

  function handleEditTodos(index) {
    const newTodos = todos[index];
    setTodoValue(newTodos);
    handleDeleteTodos(index);
  }

  //add a local storage to save the todos
  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }
  , []);

  function saveTodosLocally(newTodoList){
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  }

  return (
    <main>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
      />
    </main>
  );
}

export default App;

import { createContext, useContext, useState } from "react";

const TodoContext = createContext([
  {
    id: 1,
    todo: "msg",
    isDone: false,
  },
]);

export function useTodoContext() {
  return useContext(TodoContext);
}

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoProvider;

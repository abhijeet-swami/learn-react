import { useState } from "react";
import { useTodoContext } from "../src/context/Context";

function Input() {
  const { setTodos } = useTodoContext();
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    const add = {
      id: Date.now(),
      todo: newTodo,
      isDone: false,
    };
    setTodos((prev) => [...prev, add]);
  }

  return (
    <div className="mb-5 flex justify-center items-center">
      <input
        type="text"
        placeholder="write a todo..."
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        className="input input-primary rounded-r-none"
      />
      <button
        onClick={addTodo}
        className="btn bg-blue-600 text-black border-[#005fd8] rounded-l-none hover:text-white"
      >
        ADD
      </button>
    </div>
  );
}

export default Input;

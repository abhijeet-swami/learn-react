import { useTodoContext } from "../src/context/Context.jsx";
import Card from "./Card";
import Input from "./Input";

function Home() {
  const { todos } = useTodoContext();

  function getTodos() {
    return todos.map((todo) => <Card key={todo.id} todo={todo.todo} />);
  }

  return (
    <div className="flex flex-col justify-between min-h-[90vh]">
      <div className="m-5 flex flex-wrap justify-center gap-5">
        {getTodos()}
      </div>
      <Input />
    </div>
  );
}

export default Home;

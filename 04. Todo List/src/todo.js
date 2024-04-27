import { useState } from "react";
import { useRef } from "react";

const Todo = () => {
  const [todoslist, setTodos] = useState(["React", "interview"]);
  const [text, setText] = useState("");

  function addTask(text) {
    if (!todoslist.includes(text) && text.length > 0) {
      setTodos([...todoslist, text]);
    }
  }

  function deleteTodo(deletedname) {
    const newtodo = todoslist.filter((x) => x != deletedname);
    setTodos(newtodo);
  }
  let updatedInput = useRef();
  return (
    <>
      <input
        ref={(newValue) => (updatedInput = newValue)}

        // onChange={(e)=>{
        //    setText(e.target.value)
        // }}
        // onKeyPress={(e) => {
        //   if (e.key === "Enter") {
        //     addTask(e.target.value);
        //   }
        // }}
      />
      <button onClick={() => addTask(updatedInput.value)}>Add Task</button>

      <ul>
        {todoslist.map((name) => (
          <li key={name}>
            {name} <button onClick={() => deleteTodo(name)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;

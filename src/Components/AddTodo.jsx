import { React, useState } from "react";
import { addTodo } from "../Features/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatcher = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0 || input === "") return;
    dispatcher(addTodo(input));
    setInput("");
  };

  return (
    <>
      <h1 className="text-center text-teal-300 text-2xl underline">
        Manage Your Todos Effeciently
      </h1>
      <form onSubmit={handleSubmit} className="mt-2">
        <input
          type="text"
          placeholder="Enter a Todo...."
          className="bg-gray-900 text-white rounded-md p-2 "
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button type="submit" className="bg-teal-300 ml-4 p-2 rounded-md">
          Add ToDo
        </button>
      </form>
    </>
  );
}

export default AddTodo;

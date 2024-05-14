import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleState, updateTodo } from "../Features/todoSlice";

function Todos() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  return (
    <>
      <ul className="list-none w-1/2 mx-auto">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                className="inline mr-2"
                onChange={() => {
                  dispatch(toggleState(todo.id));
                }}
              />
              <span className="text-white">{todo.text}</span>
            </div>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Todos;

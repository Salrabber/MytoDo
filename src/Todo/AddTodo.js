import React, { useState } from "react";
import "./AddTodo.css";


function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <div className="addTodoWrapper" >
        <input className="AddTodoInput" {...input.bind} />
        <button className="AddTodoButton" type="submit">Add todo</button>
      </div>
    </form>
  );
}

export default AddTodo;

import React, { useState } from "react";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input onChange={(e) => setTodo(e.target.value)} />
      <p>{todo}</p>
    </div>
  );
};

export default TodoInput;

import React from "react";

const Todo = ({ text, completed }) => (
  <div>
    <input type="checkbox" checked={completed} />
    <span>{text}</span>
  </div>
);

export default Todo;

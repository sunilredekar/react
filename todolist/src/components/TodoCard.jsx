import React, { Children } from "react";

export default function TodoCard(props) {
  const { children, index, handleDeleteTodos, handleEditTodos } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodos(index)}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={() => handleDeleteTodos(index)}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

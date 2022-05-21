import React from "react";
import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const addTodos = (newTodos) => {
    setTodos([...todos, newTodos]);
    console.log(todos.length);
  };
  return (
    <div>
      <h1>TO DO APP</h1>
      <TodoInput addTodos={addTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

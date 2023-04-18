import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

export const NewTodoPage = () => {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <TodoForm
      label="Write your new todo"
      submitText="Add"
      submitEvent={(newText) => addTodo(newText)}
    />
  );
};

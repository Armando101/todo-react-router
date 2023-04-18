import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useParams } from "react-router-dom";

export const EditTodoPage = () => {
  const { stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;

  const { id } = useParams();

  return (
    <TodoForm
      label="Edit your todo"
      submitText="Edit"
      submitEvent={(newText) => editTodo(Number(id), newText)}
    />
  );
};

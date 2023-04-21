import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

export const EditTodoPage = () => {
  const location = useLocation();
  const { state, stateUpdaters } = useTodos();
  const { id } = useParams();

  const { getTodo, editTodo } = stateUpdaters;
  const { loading } = state;
  const todo = location.state?.todo;

  if (loading && !todo) {
    return <p>Loading...</p>;
  }
  const defaultTodoText = todo?.text || getTodo(Number(id)).text;
  return (
    <TodoForm
      label="Edit your todo"
      submitText="Edit"
      defaultTodoText={defaultTodoText}
      submitEvent={(newText) => editTodo(Number(id), newText)}
    />
  );
};

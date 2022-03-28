import React, { createContext, useCallback, useContext, useState } from "react";

interface todoContextData {
  addTodo(todo: string): void;
  removeTodo(todo: string): void;
  todos: string[];
}

const TodoContext = createContext<todoContextData>({} as todoContextData);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = useCallback((todo: string) => {
    if (todo === "") {
      return;
    }
    setTodos((oldValues) => [...oldValues, todo]);
  }, []);

  const removeTodo = useCallback(
    (todo: string) => {
      let todosCopy = [...todos];
      todosCopy = todosCopy.filter((filter) => filter !== todo);
      setTodos([...todosCopy]);
    },
    [todos]
  );

  return (
    <TodoContext.Provider value={{ addTodo, removeTodo, todos }}>
      {children}
    </TodoContext.Provider>
  );
};

function useTodo(): todoContextData {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodo deve ser usado com TodoProvider");
  }

  return context;
}

export { TodoProvider, useTodo };

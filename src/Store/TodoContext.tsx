import React, { ReactNode, createContext, useState } from 'react'
import { sortTodoList } from '../Utils';
type Contexttypes = {
  todoList: TodosItemList,
  setTodoList: React.Dispatch<React.SetStateAction<TodosItemList>>,
  deleteTodo: (id: string) => void,
  editTodo: (formData: SingleTodoItem) => void,
  addTodo: (formData: SingleTodoItem) => void
}

export const TodoContext = createContext<Contexttypes>({
  todoList: [],
  setTodoList: () => { },
  deleteTodo: () => { },
  editTodo: () => { },
  addTodo: () => { },
});

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState<TodosItemList>([]);

  React.useEffect(() => {
    const persistedTodoList = JSON.parse(localStorage.getItem("zish0106@gmail.com") || "[]");
    // console.log(persistedTodoList);
    if (Array.isArray(persistedTodoList)) setTodoList(persistedTodoList)
  }, [])

  const addTodo = (newTodoItem: SingleTodoItem) => {
    setTodoList(prev => {
      const newTodoList = sortTodoList([...prev, newTodoItem]);

      localStorage.setItem("zish0106@gmail.com", JSON.stringify(newTodoList));
      const persistedTodos = localStorage.getItem("zish0106@gmail.com");

      if (persistedTodos && persistedTodos === JSON.stringify(newTodoList))
        return newTodoList;
      return prev;
    })
  }

  const deleteTodo = (todoItemId: string) => {
    setTodoList(prev => {
      const newTodoList = prev.filter((item, index) => {
        return (item.id !== todoItemId)
      })
      localStorage.setItem("zish0106@gmail.com", JSON.stringify(newTodoList));
      const persistedTodos = localStorage.getItem("zish0106@gmail.com");
      if (persistedTodos && persistedTodos === JSON.stringify(newTodoList))
        return newTodoList;
      return prev;
    })
  }

  const editTodo = (formData: SingleTodoItem) => {
    if (formData.id !== undefined && !isNaN(+formData.id)) {
      deleteTodo(formData.id);
    }
    addTodo(formData);
  }


  return (
    <TodoContext.Provider value={{ todoList, setTodoList, deleteTodo, editTodo, addTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

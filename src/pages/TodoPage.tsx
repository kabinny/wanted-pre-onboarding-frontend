import Container from "../components/Layout/Container"
import TodoForm from "../components/Todo/TodoForm"
import TodoList from "../components/Todo/TodoList"
import { todoItem } from "../types/todoType"
import { useEffect, useState } from "react"
import { getTodosAPI } from "../api/Todo"
import Header from "../components/Header/Header"

function TodoPage() {
  const [todoList, setTodoList] = useState<todoItem[]>([])

  const getTodoList = async () => {
    try {
      getTodosAPI().then((res) => {
        setTodoList(res.data)
      })
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getTodoList()
  }, [])

  return (
    <Container>
      <Header />
      <h3>Todo List</h3>
      <TodoForm getTodoList={getTodoList} />
      <TodoList todoList={todoList} getTodoList={getTodoList} />
    </Container>
  )
}

export default TodoPage

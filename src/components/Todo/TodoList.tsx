import { todoItem } from "../../types/todoType"

import TodoItem from "./TodoItem"

interface Props {
  todoList: todoItem[]
  getTodoList: () => void
}

function TodoList({ todoList, getTodoList }: Props) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} getTodoList={getTodoList} />
      ))}
    </ul>
  )
}

export default TodoList

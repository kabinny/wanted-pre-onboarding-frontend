import { todoItem } from "../../types/todoType"

import TodoItem from "./TodoItem"

interface Props {
  todoList: todoItem[]
}

function TodoList({ todoList }: Props) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList

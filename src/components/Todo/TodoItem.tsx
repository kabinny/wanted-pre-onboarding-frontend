import { todoItem } from "../../types/todoType"

function TodoItem({ id, todo, isCompleted, userId }: todoItem) {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={isCompleted} />
        <span>{todo}</span>
      </label>
    </li>
  )
}

export default TodoItem

import { updateTodoAPI } from "../../api/Todo"
import { todoItem } from "../../types/todoType"

interface Props extends todoItem {
  getTodoList: () => void
}

function TodoItem({ id, todo, isCompleted, userId, getTodoList }: Props) {
  const onCheck = () => {
    const value = {
      id,
      todo,
      isCompleted: !isCompleted,
    }
    try {
      updateTodoAPI(value).then((res) => {
        getTodoList()
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <li>
      <label>
        <input type="checkbox" onChange={onCheck} defaultChecked={isCompleted} />
        <span>{todo}</span>
      </label>
      <button type="button" data-testid="modify-button">
        수정
      </button>
      <button type="button" data-testid="delete-button">
        삭제
      </button>
    </li>
  )
}

export default TodoItem

import { useRef, useState } from "react"
import { deleteTodoAPI, updateTodoAPI } from "../../api/Todo"
import { todoItem } from "../../types/todoType"
import TodoEditForm from "./TodoEditForm"

interface Props extends todoItem {
  getTodoList: () => void
}

function TodoItem({ id, todo, isCompleted, userId, getTodoList }: Props) {
  const [isModifying, setIsModifying] = useState(false)
  const inputModifyRef = useRef<HTMLInputElement>(null)

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

  const deleteTodo = () => {
    try {
      deleteTodoAPI({ id }).then((res) => {
        getTodoList()
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <li style={{ marginBottom: "1rem" }}>
      <label>
        <input type="checkbox" onChange={onCheck} defaultChecked={isCompleted} />
        {!isModifying && <span style={{ padding: "0 1rem" }}>{todo}</span>}
      </label>

      {/* 수정 모드 */}
      {isModifying && (
        <TodoEditForm
          id={id}
          todo={todo}
          isCompleted={isCompleted}
          setIsModifying={setIsModifying}
          inputModifyRef={inputModifyRef}
          getTodoList={getTodoList}
        />
      )}

      {/* 기본 모드 */}
      {!isModifying && (
        <>
          <button
            type="button"
            className="button dark outline"
            onClick={() => {
              setIsModifying(true)
              setTimeout(() => {
                inputModifyRef.current?.focus()
              }, 0)
            }}
            data-testid="modify-button"
          >
            수정
          </button>
          <button
            type="button"
            className="button error"
            onClick={deleteTodo}
            data-testid="delete-button"
          >
            삭제
          </button>
        </>
      )}
    </li>
  )
}

export default TodoItem

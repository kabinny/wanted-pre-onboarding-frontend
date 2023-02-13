import { useRef, useState } from "react"
import { createTodoAPI } from "../../api/Todo"

interface Props {
  getTodoList: () => void
}

function TodoForm({ getTodoList }: Props) {
  const [value, setValue] = useState({ todo: "" })
  const inputRef = useRef<HTMLInputElement>(null)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ todo: event.target.value })
  }

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const isValid = value.todo.length > 0

    if (isValid) {
      try {
        createTodoAPI(value).then((res) => {
          getTodoList()
          setValue({ todo: "" })
          if (inputRef.current) {
            inputRef.current.focus()
          }
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <input
          type="text"
          className="col"
          onChange={onChange}
          value={value.todo}
          ref={inputRef}
          data-testid="new-todo-input"
        />
        <button type="submit" className="col-2" data-testid="new-todo-add-button">
          추가
        </button>
      </div>
    </form>
  )
}

export default TodoForm

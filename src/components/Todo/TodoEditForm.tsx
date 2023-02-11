import { Dispatch, SetStateAction, useState } from "react"
import { updateTodoAPI } from "../../api/Todo"

interface Props {
  id: number
  isCompleted: boolean
  todo: string
  setIsModifying: Dispatch<SetStateAction<boolean>>
  inputModifyRef: React.RefObject<HTMLInputElement>
  getTodoList: () => void
}

function TodoEditForm({
  id,
  todo,
  isCompleted,
  setIsModifying,
  inputModifyRef,
  getTodoList,
}: Props) {
  const [text, setText] = useState(todo)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (text !== todo) {
      try {
        updateTodoAPI({ id, todo: text, isCompleted }).then((res) => {
          getTodoList()
          setIsModifying(false)
          setText(res.data.todo)
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  return (
    <form style={{ display: "inline-block" }} onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        ref={inputModifyRef}
        onChange={onChange}
        data-testid="modify-input"
      />
      <button type="submit" data-testid="submit-button">
        제출
      </button>
      <button type="button" onClick={() => setIsModifying(false)} data-testid="cancel-button">
        취소
      </button>
    </form>
  )
}

export default TodoEditForm

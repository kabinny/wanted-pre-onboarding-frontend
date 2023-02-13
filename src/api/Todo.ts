import axios from "axios"

const BASE_API = "https://pre-onboarding-selection-task.shop"

export const createTodoAPI = async ({ todo }: { todo: string }) => {
  const token = localStorage.getItem("access_token")
  const body = JSON.stringify({ todo })

  return await axios.post(`${BASE_API}/todos`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
}

export const getTodosAPI = async () => {
  const token = localStorage.getItem("access_token")

  return await axios.get(`${BASE_API}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const updateTodoAPI = async ({
  id,
  todo,
  isCompleted,
}: {
  id: number
  todo: string
  isCompleted: boolean
}) => {
  const token = localStorage.getItem("access_token")
  const body = JSON.stringify({
    todo,
    isCompleted,
  })

  return await axios.put(`${BASE_API}/todos/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
}

export const deleteTodoAPI = async ({ id }: { id: number }) => {
  const token = localStorage.getItem("access_token")

  return await axios.delete(`${BASE_API}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
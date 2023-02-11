import axios from "axios"

const token = localStorage.getItem("access_token")

const BASE_API = "https://pre-onboarding-selection-task.shop"

export const createTodoAPI = async (body: string) => {
  return await axios.post(`${BASE_API}/todos`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
}

export const getTodosAPI = async () => {
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
import axios from "axios"

const BASE_API = "https://pre-onboarding-selection-task.shop"

export const signUpAPI = async ({ email, password }: { email: string; password: string }) => {
  const body = JSON.stringify({ email, password })

  return await axios.post(`${BASE_API}/auth/signup`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export const signInAPI = async ({ email, password }: { email: string; password: string }) => {
  const body = JSON.stringify({ email, password })

  return await axios.post(`${BASE_API}/auth/signin`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

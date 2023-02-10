import axios from "axios"

const BASE_API = "https://pre-onboarding-selection-task.shop"

export const signUpAPI = async (body: string) => {
  return await axios.post(`${BASE_API}/auth/signup`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export const signInAPI = async (body: string) => {
  return await axios.post(`${BASE_API}/auth/signin`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

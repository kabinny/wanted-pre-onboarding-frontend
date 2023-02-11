import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function RedirectRoutes() {
  const isLoggedIn = localStorage.getItem("access_token")
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/todo")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isLoggedIn) {
    return <Outlet />
  } else {
    return null
  }
}

export default RedirectRoutes

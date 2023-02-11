import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function PrivateRoutes() {
  const isLoggedIn = localStorage.getItem("access_token")
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoggedIn) {
    return <Outlet />
  } else {
    return null
  }
}

export default PrivateRoutes

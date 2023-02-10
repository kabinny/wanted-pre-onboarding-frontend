import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import Container from "../components/Layout/Container"
import SignIn from "../components/SignIn/SignIn"

function SignInPage() {
  const isLoggedIn = localStorage.getItem("access_token")
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/todo")
    }
  }, [])

  return (
    <Container>
      <Header />
      <SignIn />
    </Container>
  )
}

export default SignInPage

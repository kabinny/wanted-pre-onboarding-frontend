import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import Container from "../components/Layout/Container"
import SignUp from "../components/SignUp/SignUp"

function SignUpPage() {
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
      <SignUp />
    </Container>
  )
}

export default SignUpPage

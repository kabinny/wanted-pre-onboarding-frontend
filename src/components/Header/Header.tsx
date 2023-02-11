import { useNavigate } from "react-router-dom"

function Header() {
  const token = localStorage.getItem("access_token")
  const navigate = useNavigate()

  const signOut = () => {
    localStorage.removeItem("access_token")
    navigate("/")
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Todo App</h2>
      {token && (
        <button type="button" onClick={signOut}>
          로그아웃
        </button>
      )}
    </div>
  )
}

export default Header

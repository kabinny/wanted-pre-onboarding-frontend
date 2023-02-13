import { useNavigate } from "react-router-dom"

function Header() {
  const token = localStorage.getItem("access_token")
  const navigate = useNavigate()

  const signOut = () => {
    localStorage.removeItem("access_token")
    navigate("/")
  }

  return (
    <header>
      <div className="nav">
        <h1 className="nav-left">Todo App</h1>
        {token && (
          <div className="nav-right">
            <button className="button outline" type="button" onClick={signOut}>
              로그아웃
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

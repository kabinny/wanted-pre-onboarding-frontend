import { BrowserRouter, Route, Routes } from "react-router-dom"

// Route
import PrivateRoutes from "./pages/PrivateRoutes"
import RedirectRoutes from "./pages/RedirectRoutes"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import TodoPage from "./pages/TodoPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 상태일 때 /todo 리다이렉트 */}
        <Route element={<RedirectRoutes />}>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* 로그인 필요 */}
        <Route element={<PrivateRoutes />}>
          <Route path="/todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

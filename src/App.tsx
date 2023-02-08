import { BrowserRouter, Route, Routes } from "react-router-dom"

// Route
import PrivateRoutes from "./pages/PrivateRoutes"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import TodoPage from "./pages/TodoPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* 로그인 필요 */}
        <Route element={<PrivateRoutes />}>
          <Route path="/todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

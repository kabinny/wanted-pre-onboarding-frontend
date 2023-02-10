import { access } from "fs"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInAPI } from "../../api/User"

interface values {
  email: string
  password: string
}

function SignIn() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)

  const errors = {
    email: "@을 포함한 이메일 주소를 입력해주세요.",
    password: "비밀번호는 8자 이상 입력해주세요.",
  }

  const validateData = (values: values) => {
    const emailEntered = values.email.length > 0
    const passwordEntered = values.password.length > 0

    if (emailEntered && values.email.indexOf("@") < 0) {
      setValidEmail(false)
      return false
    }

    if (emailEntered && values.email.indexOf("@") >= 0) {
      setValidEmail(true)
    }

    if (passwordEntered && values.password.length < 8) {
      setValidPassword(false)
      return false
    }

    if (passwordEntered && values.password.length >= 8) {
      setValidPassword(true)
    }

    return true
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...values, [event.target.name]: event.target.value }
    setValues(newValues)
    validateData(newValues)
  }

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const isValid = validateData(values)

    if (isValid) {
      try {
        signInAPI(JSON.stringify(values)).then((res) => {
          localStorage.setItem("access_token", res.data.access_token)
          navigate("/todo")
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={onSubmit}>
        {/* 이메일 */}
        <label htmlFor="signinEmailInput">이메일</label>
        <input
          id="signinEmailInput"
          type="email"
          name="email"
          placeholder="이메일"
          value={values.email}
          onChange={onChange}
          data-testid="email-input"
          required
        />
        <span>{!validEmail && values.email.length > 0 && errors.email}</span>
        <br />
        {/* 비밀번호 */}
        <label htmlFor="signinPasswordInput">비밀번호</label>
        <input
          id="signinPasswordInput"
          type="password"
          name="password"
          placeholder="비밀번호"
          value={values.password}
          onChange={onChange}
          data-testid="password-input"
          required
        />
        <span>{!validPassword && values.password.length > 0 && errors.password}</span>
        <br />
        {/* 제출 버튼 */}
        <button type="submit" disabled={!(validEmail && validPassword)} data-testid="signin-button">
          로그인
        </button>
      </form>
    </div>
  )
}

export default SignIn

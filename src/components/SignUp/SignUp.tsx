import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signUpAPI } from "../../api/User"

interface values {
  email: string
  password: string
}

function SignUp() {
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
        signUpAPI(values).then(() => {
          navigate("/signin")
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  return (
    <div>
      <h3>회원가입</h3>
      <form onSubmit={onSubmit}>
        {/* 이메일 */}
        <label htmlFor="signupEmailInput">이메일</label>
        <input
          id="signupEmailInput"
          type="email"
          name="email"
          placeholder="이메일"
          value={values.email}
          onChange={onChange}
          data-testid="email-input"
          required
        />
        <span className="text-error">{!validEmail && values.email.length > 0 && errors.email}</span>
        <br />
        {/* 비밀번호 */}
        <label htmlFor="signupPasswordInput">비밀번호</label>
        <input
          id="signupPasswordInput"
          type="password"
          name="password"
          placeholder="비밀번호"
          value={values.password}
          onChange={onChange}
          data-testid="password-input"
          required
        />
        <span className="text-error">
          {!validPassword && values.password.length > 0 && errors.password}
        </span>
        <br />
        {/* 제출 버튼 */}
        <button type="submit" disabled={!(validEmail && validPassword)} data-testid="signup-button">
          회원가입
        </button>
      </form>

      {/* 회원가입 페이지로 */}
      <hr />
      <Link to="/signin">로그인 하기</Link>
    </div>
  )
}

export default SignUp

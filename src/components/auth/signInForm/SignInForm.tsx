import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { authSingInStart } from "../../../redux/auth/authActionsCreators"
import CustomButton from "../../custom/customButton/CustomButton"
import { CustomInputWithLabel } from "../../custom/customInput/CustomInput"

import "./signInForm.scss"

const SignInForm = () => {
  const dispatch = useDispatch()
  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()

    const { email, password } = credentials

    dispatch(authSingInStart({ email, password }))

    setCredentials({ email: "", password: "" })
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value, name } = e.currentTarget
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="form-sign">
      <h3>Sign In</h3>
      <CustomInputWithLabel
        name="email"
        required
        onChange={handleChange}
        label="Email"
        type="email"
        value={credentials.email}
        className="w-100"
      />
      <CustomInputWithLabel
        name="password"
        required
        onChange={handleChange}
        label="Password"
        value={credentials.password}
        type="password"
        className="w-100"
      />
      <CustomButton className="w-100">Sign In</CustomButton>
    </form>
  )
}

export default SignInForm

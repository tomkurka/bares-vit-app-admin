import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { authSignUpStart } from "../../../redux/auth/authActionsCreators"
import CustomButton from "../../custom/customButton/CustomButton"
import { CustomInputWithLabel } from "../../custom/customInput/CustomInput"

const SignUpForm = () => {
  const dispatch = useDispatch()

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    const { email, password, passwordConfirm, firstName, lastName } = credentials

    if (password !== passwordConfirm) return alert("Passwords must match")

    dispatch(authSignUpStart({ email, password, firstName, lastName }))
    setCredentials({ firstName: "", lastName: "", email: "", password: "", passwordConfirm: "" })
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value, name } = e.currentTarget
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }))
  }
  return (
    <form onSubmit={handleSubmit} className="form-sign">
      <h3>Sign Up</h3>
      <CustomInputWithLabel
        name="firstName"
        required
        onChange={handleChange}
        label="First name"
        type="text"
        value={credentials.firstName}
        className="w-100"
      />
      <CustomInputWithLabel
        name="lastName"
        required
        onChange={handleChange}
        label="Last name"
        type="text"
        value={credentials.lastName}
        className="w-100"
      />
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
      <CustomInputWithLabel
        name="passwordConfirm"
        required
        onChange={handleChange}
        label="Password"
        value={credentials.passwordConfirm}
        type="password"
        className="w-100"
      />
      <CustomButton className="w-100">Sign Up</CustomButton>
    </form>
  )
}

export default SignUpForm

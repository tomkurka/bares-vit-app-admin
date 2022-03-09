import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import { selectCurrentUser } from "../../../redux/auth/authSelectors"

interface Props {
  redirect: string
  auth: boolean
  path: string
  exact: boolean
  component: () => JSX.Element
}

const PrivateRoute: React.FC<Props> = ({ auth, redirect, ...rest }) => {
  const currentUser = useSelector(selectCurrentUser)

  return auth === !!currentUser ? <Route {...rest} /> : <Redirect to={redirect} />
}

export default PrivateRoute

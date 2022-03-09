import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import SignInPage from "../../pages/auth/SignInPage"
import SignUpPage from "../../pages/auth/SignUpPage"
import ROUTES from "../routes"

const AuthRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          path={ROUTES.AUTH.SIGN_IN}
          redirect={ROUTES.DASHBOARD.DASHBOARD}
          auth={false}
          component={SignInPage}
        />
        <PrivateRoute
          exact
          path={ROUTES.AUTH.SIGN_UP}
          redirect={ROUTES.DASHBOARD.DASHBOARD}
          auth={false}
          component={SignUpPage}
        />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default AuthRoutes

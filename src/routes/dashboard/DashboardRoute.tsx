import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import DashboardPage from "../../pages/dashboard/DashboardPage"
import ROUTES from "../routes"

const DashboardRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          path={ROUTES.DASHBOARD.DASHBOARD}
          redirect={ROUTES.AUTH.SIGN_IN}
          auth={true}
          component={DashboardPage}
        />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default DashboardRoutes

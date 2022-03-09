import React from "react"
import { Route, Switch } from "react-router-dom"
import AuthRoutes from "./auth/AuthRoutes"
import BlogRoutes from "./blog/BlogRoutes"
import DashboardRoutes from "./dashboard/DashboardRoute"
import NotFoundRoutes from "./notFound/NotFoundRoutes"
import ROUTES from "./routes"

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path={ROUTES.AUTH.INITIAL} component={AuthRoutes} />
        <Route exact path={ROUTES.DASHBOARD.INITIAL} component={DashboardRoutes} />
        <Route path={ROUTES.BLOG.INITIAL} component={BlogRoutes} />
        <Route path={ROUTES.NOT_FOUND.INITIAL} component={NotFoundRoutes} />
      </Switch>
    </div>
  )
}
export default AppRoutes

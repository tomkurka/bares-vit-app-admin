import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import PostEditPage from "../../pages/blog/PostEditPage"
import PostsPage from "../../pages/blog/PostsPage"
import ROUTES from "../routes"

const BlogRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          path={ROUTES.BLOG.POSTS}
          redirect={ROUTES.AUTH.SIGN_IN}
          auth={true}
          component={PostsPage}
        />
        <PrivateRoute
          exact
          path={ROUTES.BLOG.POST_EDIT}
          redirect={ROUTES.AUTH.SIGN_IN}
          auth={true}
          component={PostEditPage}
        />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default BlogRoutes

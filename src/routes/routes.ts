const ROUTES = {
  AUTH: {
    INITIAL: "/auth",
    SIGN_IN: "/auth/sign-in",
    SIGN_UP: "/auth/sign-up",
  },
  BLOG: {
    INITIAL: "/blog",
    POSTS: "/blog",
    POST_EDIT: "/blog/post/:postId?",
  },
  NOT_FOUND: {
    INITIAL: "/not-found",
    NOT_FOUND: "/not-found",
  },
  DASHBOARD: {
    INITIAL: "/",
    DASHBOARD: "/",
  },
}

export default ROUTES

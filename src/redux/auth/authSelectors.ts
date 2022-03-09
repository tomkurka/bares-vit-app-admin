import { createSelector } from "reselect"
import { RootState } from "../rootReducer"

const selectAuth = (state: RootState) => state.auth

export const selectCurrentUser = createSelector([selectAuth], auth => auth.currentUser)

export const selectAuthIsLoading = createSelector([selectAuth], auth => auth.isLoading)

export const selectAuthCurrentUserPublishedPosts = createSelector(
  [selectCurrentUser],
  currentUser => currentUser?.publishedPosts
)

export const selectAuthInitialProcessCompleted = createSelector(
  [selectAuth],
  auth => auth.authInitialProcessCompleted
)

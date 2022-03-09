import { createSelector } from "reselect"
import { RootState } from "../rootReducer"

const selectPostsState = (state: RootState) => state.posts

export const selectPosts = createSelector([selectPostsState], state => state.posts)

export const selectPostsIsLoading = createSelector([selectPostsState], state => state.isLoading)

export const selectPostsArray = createSelector([selectPosts], posts => Object.values(posts))

export const selectPostsOrderByUpdateAt = createSelector([selectPostsArray], postArray =>
  postArray.sort((a, b) => b.updatedAt - a.updatedAt)
)

export const selectPost = (postId: string) => createSelector([selectPosts], posts => posts[postId])

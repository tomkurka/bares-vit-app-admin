import { CurrentUser } from "./authDefinitions"

interface AuthTogglePublishedPostsLocal {
  currentUser: CurrentUser | null
  newPublishedPosts: string[]
}

export const authTogglePublishedPostsLocal = ({
  currentUser,
  newPublishedPosts,
}: AuthTogglePublishedPostsLocal): CurrentUser | null => {
  if (currentUser === null) return currentUser

  const currentUserWithoutReference: CurrentUser = JSON.parse(JSON.stringify(currentUser))
  currentUserWithoutReference.publishedPosts = newPublishedPosts

  return currentUserWithoutReference
}

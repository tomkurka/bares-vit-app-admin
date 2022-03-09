import { Post, Posts } from "./postsDefinitions"

interface PostsFetchPostLocal {
  lastPosts: Posts
  fetchedPost: Post
}
export const postsFetchPostLocal = ({ lastPosts, fetchedPost }: PostsFetchPostLocal): Posts => {
  let postsWithoutReference: Posts = JSON.parse(JSON.stringify(lastPosts))
  postsWithoutReference = { ...postsWithoutReference, [fetchedPost.id]: fetchedPost }
  return postsWithoutReference
}

interface PostsCreatePostLocal {
  lastPosts: Posts
  createdPost: Post
}
export const postsCreatePostLocal = ({ lastPosts, createdPost }: PostsCreatePostLocal): Posts => {
  let postsWithoutReference: Posts = JSON.parse(JSON.stringify(lastPosts))
  postsWithoutReference = { ...postsWithoutReference, [createdPost.id]: createdPost }
  return postsWithoutReference
}

interface PostsSavePostLocal {
  lastPosts: Posts
  savedPost: Post
}
export const postsSavePostLocal = ({ lastPosts, savedPost }: PostsSavePostLocal): Posts => {
  let postsWithoutReference: Posts = JSON.parse(JSON.stringify(lastPosts))
  postsWithoutReference = { ...postsWithoutReference, [savedPost.id]: savedPost }
  return postsWithoutReference
}

interface PostsDeletePostLocal {
  lastPosts: Posts
  deletedPostId: string
}
export const postsDeletePostLocal = ({ lastPosts, deletedPostId }: PostsDeletePostLocal): Posts => {
  let postsWithoutReference: Posts = JSON.parse(JSON.stringify(lastPosts))
  delete postsWithoutReference[deletedPostId]
  return postsWithoutReference
}

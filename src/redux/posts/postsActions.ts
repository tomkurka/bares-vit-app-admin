import { Post, Posts } from "./postsDefinitions"
import PostsActionsTypes from "./postTypes"

// Fetch posts
export interface PostsFetchPostsStart {
  type: PostsActionsTypes.FETCH_POSTS_START
}

export interface PostsFetchPostsSuccess {
  type: PostsActionsTypes.FETCH_POSTS_SUCCESS
  payload: PostsFetchPostsSuccessPayload
}
export interface PostsFetchPostsSuccessPayload {
  posts: Posts
}

export interface PostsFetchPostsFailure {
  type: PostsActionsTypes.FETCH_POSTS_FAILURE
  payload: PostsFetchPostsFailurePayload
}
export interface PostsFetchPostsFailurePayload {
  error: string
}

// Fetch post
export interface PostsFetchPostStart {
  type: PostsActionsTypes.FETCH_POST_START
  payload: PostsFetchPostStartPayload
}
export interface PostsFetchPostStartPayload {
  postId: string
}

export interface PostsFetchPostSuccess {
  type: PostsActionsTypes.FETCH_POST_SUCCESS
  payload: PostsFetchPostSuccessPayload
}
export interface PostsFetchPostSuccessPayload {
  post: Post
}

export interface PostsFetchPostFailure {
  type: PostsActionsTypes.FETCH_POST_FAILURE
  payload: PostsFetchPostFailurePayload
}
export interface PostsFetchPostFailurePayload {
  error: string
}

// Create post
export interface PostsCreatePostStart {
  type: PostsActionsTypes.CREATE_POST_START
}

export interface PostsCreatePostSuccess {
  type: PostsActionsTypes.CREATE_POST_SUCCESS
  payload: PostsCreatePostSuccessPayload
}
export interface PostsCreatePostSuccessPayload {
  post: Post
}

export interface PostsCreatePostFailure {
  type: PostsActionsTypes.CREATE_POST_FAILURE
  payload: PostsCreatePostFailurePayload
}
export interface PostsCreatePostFailurePayload {
  error: string
}

// Save Posts
export interface PostsSavePostStart {
  type: PostsActionsTypes.SAVE_POST_START
  payload: PostsSavePostStartPayload
}
export interface PostsSavePostStartPayload {
  post: Post
}

export interface PostsSavePostSuccess {
  type: PostsActionsTypes.SAVE_POST_SUCCESS
  payload: PostsSavePostSuccessPayload
}
export interface PostsSavePostSuccessPayload {
  post: Post
}

export interface PostsSavePostFailure {
  type: PostsActionsTypes.SAVE_POST_FAILURE
  payload: PostsSavePostFailurePayload
}
export interface PostsSavePostFailurePayload {
  error: string
}

// Delete Posts
export interface PostsDeletePostStart {
  type: PostsActionsTypes.DELETE_POST_START
  payload: PostsDeletePostStartPayload
}
export interface PostsDeletePostStartPayload {
  postId: string
}

export interface PostsDeletePostSuccess {
  type: PostsActionsTypes.DELETE_POST_SUCCESS
  payload: PostsDeletePostSuccessPayload
}
export interface PostsDeletePostSuccessPayload {
  postId: string
}

export interface PostsDeletePostFailure {
  type: PostsActionsTypes.DELETE_POST_FAILURE
  payload: PostsDeletePostFailurePayload
}
export interface PostsDeletePostFailurePayload {
  error: string
}

export type PostsActions =
  | PostsFetchPostsStart
  | PostsFetchPostsSuccess
  | PostsFetchPostsFailure
  | PostsFetchPostStart
  | PostsFetchPostSuccess
  | PostsFetchPostFailure
  | PostsCreatePostStart
  | PostsCreatePostSuccess
  | PostsCreatePostFailure
  | PostsSavePostStart
  | PostsSavePostSuccess
  | PostsSavePostFailure
  | PostsDeletePostStart
  | PostsDeletePostSuccess
  | PostsDeletePostFailure

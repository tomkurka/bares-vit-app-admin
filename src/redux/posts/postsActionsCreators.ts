import {
  PostsCreatePostFailure,
  PostsCreatePostFailurePayload,
  PostsCreatePostStart,
  PostsCreatePostSuccess,
  PostsCreatePostSuccessPayload,
  PostsDeletePostFailure,
  PostsDeletePostFailurePayload,
  PostsDeletePostStart,
  PostsDeletePostStartPayload,
  PostsDeletePostSuccess,
  PostsDeletePostSuccessPayload,
  PostsFetchPostFailure,
  PostsFetchPostFailurePayload,
  PostsFetchPostsFailure,
  PostsFetchPostsFailurePayload,
  PostsFetchPostsStart,
  PostsFetchPostsSuccess,
  PostsFetchPostsSuccessPayload,
  PostsFetchPostStart,
  PostsFetchPostStartPayload,
  PostsFetchPostSuccess,
  PostsFetchPostSuccessPayload,
  PostsSavePostFailure,
  PostsSavePostFailurePayload,
  PostsSavePostStart,
  PostsSavePostStartPayload,
  PostsSavePostSuccess,
  PostsSavePostSuccessPayload,
} from "./postsActions"
import PostsActionsTypes from "./postTypes"

// Fetch posts
export const postsFetchPostsStart = (): PostsFetchPostsStart => ({
  type: PostsActionsTypes.FETCH_POSTS_START,
})
export const postsFetchPostsSuccess = (
  payload: PostsFetchPostsSuccessPayload
): PostsFetchPostsSuccess => ({
  type: PostsActionsTypes.FETCH_POSTS_SUCCESS,
  payload,
})
export const postsFetchPostsFailure = (
  payload: PostsFetchPostsFailurePayload
): PostsFetchPostsFailure => ({
  type: PostsActionsTypes.FETCH_POSTS_FAILURE,
  payload,
})

// Fetch post
export const postsFetchPostStart = (payload: PostsFetchPostStartPayload): PostsFetchPostStart => ({
  type: PostsActionsTypes.FETCH_POST_START,
  payload,
})
export const postsFetchPostSuccess = (
  payload: PostsFetchPostSuccessPayload
): PostsFetchPostSuccess => ({
  type: PostsActionsTypes.FETCH_POST_SUCCESS,
  payload,
})
export const postsFetchPostFailure = (
  payload: PostsFetchPostFailurePayload
): PostsFetchPostFailure => ({
  type: PostsActionsTypes.FETCH_POST_FAILURE,
  payload,
})

// Create post
export const postsCreatePostStart = (): PostsCreatePostStart => ({
  type: PostsActionsTypes.CREATE_POST_START,
})
export const postsCreatePostSuccess = (
  payload: PostsCreatePostSuccessPayload
): PostsCreatePostSuccess => ({
  type: PostsActionsTypes.CREATE_POST_SUCCESS,
  payload,
})
export const postsCreatePostFailure = (
  payload: PostsCreatePostFailurePayload
): PostsCreatePostFailure => ({
  type: PostsActionsTypes.CREATE_POST_FAILURE,
  payload,
})

// Save post
export const postsSavePostStart = (payload: PostsSavePostStartPayload): PostsSavePostStart => ({
  type: PostsActionsTypes.SAVE_POST_START,
  payload,
})
export const postsSavePostSuccess = (
  payload: PostsSavePostSuccessPayload
): PostsSavePostSuccess => ({
  type: PostsActionsTypes.SAVE_POST_SUCCESS,
  payload,
})
export const postsSavePostFailure = (
  payload: PostsSavePostFailurePayload
): PostsSavePostFailure => ({
  type: PostsActionsTypes.SAVE_POST_FAILURE,
  payload,
})

// Delete post
export const postsDeletePostStart = (
  payload: PostsDeletePostStartPayload
): PostsDeletePostStart => ({
  type: PostsActionsTypes.DELETE_POST_START,
  payload,
})
export const postsDeletePostSuccess = (
  payload: PostsDeletePostSuccessPayload
): PostsDeletePostSuccess => ({
  type: PostsActionsTypes.DELETE_POST_SUCCESS,
  payload,
})
export const postsDeletePostFailure = (
  payload: PostsDeletePostFailurePayload
): PostsDeletePostFailure => ({
  type: PostsActionsTypes.DELETE_POST_FAILURE,
  payload,
})

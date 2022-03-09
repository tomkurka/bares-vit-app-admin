import {
  PostEditEditPost,
  PostEditEditPostContent,
  PostEditEditPostContentPayload,
  PostEditEditPostPayload,
  PostEditFetchPostFailure,
  PostEditFetchPostFailurePayload,
  PostEditFetchPostStart,
  PostEditFetchPostStartPayload,
  PostEditFetchPostSuccess,
  PostEditFetchPostSuccessPayload,
  PostEditLoadPost,
  PostEditLoadPostPayload,
  PostEditEditPostValuesPayload,
  PostEditEditPostValues,
  PostEditUpdatePostIsSavePayload,
  PostEditUpdatePostIsSave,
} from "./postEditActions"
import PostEditActionsTypes from "./postEditTypes"

// Fetch post
export const postEditFetchPostStart = (
  payload: PostEditFetchPostStartPayload
): PostEditFetchPostStart => ({
  type: PostEditActionsTypes.POST_EDIT_FETCH_POST_START,
  payload,
})
export const postEditFetchPostSuccess = (
  payload: PostEditFetchPostSuccessPayload
): PostEditFetchPostSuccess => ({
  type: PostEditActionsTypes.POST_EDIT_FETCH_POST_SUCCESS,
  payload,
})
export const postEditFetchPostFailure = (
  payload: PostEditFetchPostFailurePayload
): PostEditFetchPostFailure => ({
  type: PostEditActionsTypes.POST_EDIT_FETCH_POST_FAILURE,
  payload,
})

export const postEditLoadPost = (payload: PostEditLoadPostPayload): PostEditLoadPost => ({
  type: PostEditActionsTypes.POST_EDIT_LOAD_POST,
  payload,
})

export const postEditEditPost = (payload: PostEditEditPostPayload): PostEditEditPost => ({
  type: PostEditActionsTypes.POST_EDIT_EDIT_POST,
  payload,
})

export const postEditEditPostValues = (
  payload: PostEditEditPostValuesPayload
): PostEditEditPostValues => ({
  type: PostEditActionsTypes.POST_EDIT_EDIT_POST_VALUES,
  payload,
})

export const postEditEditPostContent = (
  payload: PostEditEditPostContentPayload
): PostEditEditPostContent => ({
  type: PostEditActionsTypes.POST_EDIT_EDIT_POST_CONTENT,
  payload,
})

export const postEditUpdatePostIsSave = (
  payload: PostEditUpdatePostIsSavePayload
): PostEditUpdatePostIsSave => ({
  type: PostEditActionsTypes.POST_EDIT_UPDATE_POST_IS_SAVE,
  payload,
})

import { Post } from "../posts/postsDefinitions"
import PostEditActionsTypes from "./postEditTypes"

// Fetch post
export interface PostEditFetchPostStart {
  type: PostEditActionsTypes.POST_EDIT_FETCH_POST_START
  payload: PostEditFetchPostStartPayload
}
export interface PostEditFetchPostStartPayload {
  postId: string
}

export interface PostEditFetchPostSuccess {
  type: PostEditActionsTypes.POST_EDIT_FETCH_POST_SUCCESS
  payload: PostEditFetchPostSuccessPayload
}
export interface PostEditFetchPostSuccessPayload {
  post: Post
}

export interface PostEditFetchPostFailure {
  type: PostEditActionsTypes.POST_EDIT_FETCH_POST_FAILURE
  payload: PostEditFetchPostFailurePayload
}
export interface PostEditFetchPostFailurePayload {
  error: string
}

export interface PostEditLoadPost {
  type: PostEditActionsTypes.POST_EDIT_LOAD_POST
  payload: PostEditLoadPostPayload
}
export interface PostEditLoadPostPayload {
  post: Post
}

export interface PostEditEditPost {
  type: PostEditActionsTypes.POST_EDIT_EDIT_POST
  payload: PostEditEditPostPayload
}
export interface PostEditEditPostPayload {
  post: Post
}

export interface PostEditUpdatePostIsSave {
  type: PostEditActionsTypes.POST_EDIT_UPDATE_POST_IS_SAVE
  payload: PostEditUpdatePostIsSavePayload
}
export interface PostEditUpdatePostIsSavePayload {
  isSave: boolean
}

export interface PostEditEditPostValues {
  type: PostEditActionsTypes.POST_EDIT_EDIT_POST_VALUES
  payload: PostEditEditPostValuesPayload
}
export interface PostEditEditPostValuesPayload {
  update: PostEditEditPostValuesUpdate
}

export type PostEditEditPostValuesUpdate =
  | PostEditEditPostDataTags
  | PostEditEditPostDataTitle
  | PostEditEditPostDataSubtitle
  | PostEditEditPostDataReadTime
  | PostEditEditPostDataPreviewImgLink

export type PostEditEditPostDataTags = {
  name: "tags"
  value: string[]
}
export type PostEditEditPostDataTitle = {
  name: "title"
  value: string
}
export type PostEditEditPostDataSubtitle = {
  name: "subtitle"
  value: string
}
export type PostEditEditPostDataReadTime = {
  name: "readTime"
  value: number
}
export type PostEditEditPostDataPreviewImgLink = {
  name: "previewImgLink"
  value: string
}

export interface PostEditEditPostContent {
  type: PostEditActionsTypes.POST_EDIT_EDIT_POST_CONTENT
  payload: PostEditEditPostContentPayload
}
export interface PostEditEditPostContentPayload {
  content: string
}

export type PostEditActions =
  | PostEditFetchPostStart
  | PostEditFetchPostSuccess
  | PostEditFetchPostFailure
  | PostEditLoadPost
  | PostEditEditPost
  | PostEditEditPostValues
  | PostEditEditPostContent
  | PostEditUpdatePostIsSave

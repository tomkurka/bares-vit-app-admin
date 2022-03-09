import { Post } from "../posts/postsDefinitions"
import { CurrentUser } from "./authDefinitions"
import AuthActionsTypes from "./authTypes"

export interface AuthSignInStart {
  type: AuthActionsTypes.AUTH_SIGN_IN_START
  payload: AuthSignInStartPayload
}
export interface AuthSignInStartPayload {
  email: string
  password: string
}

export interface AuthSignInSuccess {
  type: AuthActionsTypes.AUTH_SIGN_IN_SUCCESS
  payload: AuthSignInSuccessPayload
}
export interface AuthSignInSuccessPayload {
  currentUser: CurrentUser
}

export interface AuthSignInFailure {
  type: AuthActionsTypes.AUTH_SIGN_IN_FAILURE
  payload: AuthSignInFailurePayload
}
export interface AuthSignInFailurePayload {
  error: string
}

export interface AuthSignUpStart {
  type: AuthActionsTypes.AUTH_SIGN_UP_START
  payload: AuthSignUpStartPayload
}
export interface AuthSignUpStartPayload {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface AuthSignUpSuccess {
  type: AuthActionsTypes.AUTH_SIGN_UP_SUCCESS
  payload: AuthSignUpSuccessPayload
}
export interface AuthSignUpSuccessPayload {
  currentUser: CurrentUser
}

export interface AuthSignUpFailure {
  type: AuthActionsTypes.AUTH_SIGN_UP_FAILURE
  payload: AuthSignUpFailurePayload
}
export interface AuthSignUpFailurePayload {
  error: string
}

export interface AuthSignOutStart {
  type: AuthActionsTypes.AUTH_SIGN_OUT_START
}

export interface AuthSignOutSuccess {
  type: AuthActionsTypes.AUTH_SIGN_OUT_SUCCESS
}

export interface AuthSignOutFailure {
  type: AuthActionsTypes.AUTH_SIGN_OUT_FAILURE
  payload: AuthSignOutFailurePayload
}
export interface AuthSignOutFailurePayload {
  error: string
}

export interface AuthInitialProcessCompleted {
  type: AuthActionsTypes.AUTH_INITIAL_PROCESS_COMPLETED
}

export interface AuthCheckUserSession {
  type: AuthActionsTypes.AUTH_CHECK_USER_SESSION
}

export interface AuthTogglePublishedPostsStart {
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_START
  payload: AuthTogglePublishedPostsStartPayload
}
export interface AuthTogglePublishedPostsStartPayload {
  post: Post
}
export interface AuthTogglePublishedPostsSuccess {
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_SUCCESS
  payload: AuthTogglePublishedPostsSuccessPayload
}
export interface AuthTogglePublishedPostsSuccessPayload {
  publishedPosts: string[]
}
export interface AuthTogglePublishedPostsFailure {
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_FAILURE
  payload: AuthTogglePublishedPostsFailurePayload
}
export interface AuthTogglePublishedPostsFailurePayload {
  error: string
}

export interface AuthTogglePublishedPostsListStart {
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_START
  payload: AuthTogglePublishedPostsListStartPayload
}
export interface AuthTogglePublishedPostsListStartPayload {
  postId: string
}
export interface AuthTogglePublishedPostsListSuccess {
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_SUCCESS
  payload: AuthTogglePublishedPostsListSuccessPayload
}
export interface AuthTogglePublishedPostsListSuccessPayload {
  publishedPosts: string[]
}
export interface AuthTogglePublishedPostsListFailure {
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_FAILURE
  payload: AuthTogglePublishedPostListFailurePayload
}
export interface AuthTogglePublishedPostListFailurePayload {
  error: string
}

export type AuthActions =
  | AuthSignInStart
  | AuthSignInSuccess
  | AuthSignInFailure
  | AuthSignUpStart
  | AuthSignUpSuccess
  | AuthSignUpFailure
  | AuthSignOutStart
  | AuthSignOutSuccess
  | AuthSignOutFailure
  | AuthInitialProcessCompleted
  | AuthCheckUserSession
  | AuthTogglePublishedPostsStart
  | AuthTogglePublishedPostsSuccess
  | AuthTogglePublishedPostsFailure
  | AuthTogglePublishedPostsListStart
  | AuthTogglePublishedPostsListSuccess
  | AuthTogglePublishedPostsListFailure

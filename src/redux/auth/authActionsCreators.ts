import {
  AuthCheckUserSession,
  AuthInitialProcessCompleted,
  AuthSignInFailure,
  AuthSignInFailurePayload,
  AuthSignInStart,
  AuthSignInStartPayload,
  AuthSignInSuccess,
  AuthSignInSuccessPayload,
  AuthSignOutFailure,
  AuthSignOutFailurePayload,
  AuthSignOutStart,
  AuthSignOutSuccess,
  AuthSignUpFailure,
  AuthSignUpFailurePayload,
  AuthSignUpStart,
  AuthSignUpStartPayload,
  AuthSignUpSuccess,
  AuthSignUpSuccessPayload,
  AuthTogglePublishedPostListFailurePayload,
  AuthTogglePublishedPostsFailure,
  AuthTogglePublishedPostsFailurePayload,
  AuthTogglePublishedPostsListFailure,
  AuthTogglePublishedPostsListStart,
  AuthTogglePublishedPostsListStartPayload,
  AuthTogglePublishedPostsListSuccess,
  AuthTogglePublishedPostsListSuccessPayload,
  AuthTogglePublishedPostsStart,
  AuthTogglePublishedPostsStartPayload,
  AuthTogglePublishedPostsSuccess,
  AuthTogglePublishedPostsSuccessPayload,
} from "./authActions"
import AuthActionsTypes from "./authTypes"

export const authSingInStart = (payload: AuthSignInStartPayload): AuthSignInStart => ({
  type: AuthActionsTypes.AUTH_SIGN_IN_START,
  payload,
})
export const authSignInSuccess = (payload: AuthSignInSuccessPayload): AuthSignInSuccess => ({
  type: AuthActionsTypes.AUTH_SIGN_IN_SUCCESS,
  payload,
})
export const authSingInFailure = (payload: AuthSignInFailurePayload): AuthSignInFailure => ({
  type: AuthActionsTypes.AUTH_SIGN_IN_FAILURE,
  payload,
})

export const authSignUpStart = (payload: AuthSignUpStartPayload): AuthSignUpStart => ({
  type: AuthActionsTypes.AUTH_SIGN_UP_START,
  payload,
})
export const authSignUpSuccess = (payload: AuthSignUpSuccessPayload): AuthSignUpSuccess => ({
  type: AuthActionsTypes.AUTH_SIGN_UP_SUCCESS,
  payload,
})
export const authSingUpFailure = (payload: AuthSignUpFailurePayload): AuthSignUpFailure => ({
  type: AuthActionsTypes.AUTH_SIGN_UP_FAILURE,
  payload,
})

export const authSingOutStart = (): AuthSignOutStart => ({
  type: AuthActionsTypes.AUTH_SIGN_OUT_START,
})
export const authSignOutSuccess = (): AuthSignOutSuccess => ({
  type: AuthActionsTypes.AUTH_SIGN_OUT_SUCCESS,
})
export const authSingOutFailure = (payload: AuthSignOutFailurePayload): AuthSignOutFailure => ({
  type: AuthActionsTypes.AUTH_SIGN_OUT_FAILURE,
  payload,
})

export const authInitialProcessCompleted = (): AuthInitialProcessCompleted => ({
  type: AuthActionsTypes.AUTH_INITIAL_PROCESS_COMPLETED,
})

export const authCheckUserSession = (): AuthCheckUserSession => ({
  type: AuthActionsTypes.AUTH_CHECK_USER_SESSION,
})

export const authTogglePublishedPostsStart = (
  payload: AuthTogglePublishedPostsStartPayload
): AuthTogglePublishedPostsStart => ({
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_START,
  payload,
})

export const authTogglePublishedPostsSuccess = (
  payload: AuthTogglePublishedPostsSuccessPayload
): AuthTogglePublishedPostsSuccess => ({
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_SUCCESS,
  payload,
})

export const authTogglePublishedPostsFailure = (
  payload: AuthTogglePublishedPostsFailurePayload
): AuthTogglePublishedPostsFailure => ({
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_FAILURE,
  payload,
})

export const authTogglePublishedPostsListStart = (
  payload: AuthTogglePublishedPostsListStartPayload
): AuthTogglePublishedPostsListStart => ({
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_START,
  payload,
})

export const authTogglePublishedPostsListSuccess = (
  payload: AuthTogglePublishedPostsListSuccessPayload
): AuthTogglePublishedPostsListSuccess => ({
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_SUCCESS,
  payload,
})

export const authTogglePublishedPostsListFailure = (
  payload: AuthTogglePublishedPostListFailurePayload
): AuthTogglePublishedPostsListFailure => ({
  type: AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_FAILURE,
  payload,
})

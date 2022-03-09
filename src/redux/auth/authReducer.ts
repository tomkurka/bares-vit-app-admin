import { AuthActions } from "./authActions"
import { CurrentUser } from "./authDefinitions"
import AuthActionsTypes from "./authTypes"
import { authTogglePublishedPostsLocal } from "./authUtils"

interface InitialState {
  error: null | string
  isLoading: boolean
  currentUser: CurrentUser | null
  authInitialProcessCompleted: boolean
}

const initialState: InitialState = {
  error: null,
  isLoading: false,
  currentUser: null,
  authInitialProcessCompleted: false,
}

const authReducer = (state = initialState, action: AuthActions): InitialState => {
  switch (action.type) {
    case AuthActionsTypes.AUTH_INITIAL_PROCESS_COMPLETED:
      return {
        ...state,
        authInitialProcessCompleted: true,
      }
    case AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_SUCCESS:
    case AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_SUCCESS:
      return {
        ...state,
        currentUser: authTogglePublishedPostsLocal({
          currentUser: state.currentUser,
          newPublishedPosts: action.payload.publishedPosts,
        }),
        isLoading: false,
      }
    case AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_START:
    case AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_START:
    case AuthActionsTypes.AUTH_SIGN_IN_START:
    case AuthActionsTypes.AUTH_SIGN_UP_START:
    case AuthActionsTypes.AUTH_SIGN_OUT_START:
      return { ...state, error: "", isLoading: true }
    case AuthActionsTypes.AUTH_SIGN_IN_SUCCESS:
    case AuthActionsTypes.AUTH_SIGN_UP_SUCCESS:
      return { ...state, currentUser: action.payload.currentUser, isLoading: false, error: null }
    case AuthActionsTypes.AUTH_SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null, isLoading: false }
    case AuthActionsTypes.AUTH_SIGN_IN_FAILURE:
    case AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_FAILURE:
    case AuthActionsTypes.AUTH_SIGN_UP_FAILURE:
    case AuthActionsTypes.AUTH_SIGN_OUT_FAILURE:
    case AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_FAILURE:
      return { ...state, error: action.payload.error, isLoading: false }
    default:
      return state
  }
}

export default authReducer

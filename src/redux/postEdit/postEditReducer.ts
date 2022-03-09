import { Post } from "../posts/postsDefinitions"
import { PostEditActions } from "./postEditActions"
import PostEditActionsTypes from "./postEditTypes"
import { postEditEditContentLocal, postEditEditDataLocal } from "./postEditUtils"

interface InitialState {
  post: Post | null
  isSave: boolean
  error: string | null
  isLoading: boolean
}

const initialState: InitialState = {
  isLoading: false,
  isSave: true,
  post: null,
  error: null,
}

const postEditReducer = (state = initialState, action: PostEditActions) => {
  switch (action.type) {
    case PostEditActionsTypes.POST_EDIT_FETCH_POST_START:
      return { ...state, error: null, isLoading: true }
    case PostEditActionsTypes.POST_EDIT_FETCH_POST_SUCCESS:
      return { ...state, post: action.payload.post, isLoading: false }
    case PostEditActionsTypes.POST_EDIT_FETCH_POST_FAILURE:
      return { ...state, isLoading: false, error: null }
    case PostEditActionsTypes.POST_EDIT_LOAD_POST:
      return { ...state, post: action.payload.post }
    case PostEditActionsTypes.POST_EDIT_EDIT_POST:
      return { ...state, post: action.payload.post, isSave: false }
    case PostEditActionsTypes.POST_EDIT_EDIT_POST_VALUES:
      return {
        ...state,
        post: postEditEditDataLocal({ prevPost: state.post, update: action.payload.update }),
        isSave: false,
      }
    case PostEditActionsTypes.POST_EDIT_EDIT_POST_CONTENT:
      return {
        ...state,
        post: postEditEditContentLocal({ prevPost: state.post, content: action.payload.content }),
        isSave: false,
      }
    case PostEditActionsTypes.POST_EDIT_UPDATE_POST_IS_SAVE:
      return {
        ...state,
        isSave: action.payload.isSave,
      }
    default:
      return state
  }
}

export default postEditReducer

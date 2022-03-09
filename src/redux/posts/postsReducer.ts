import { PostsActions } from "./postsActions"
import { Posts } from "./postsDefinitions"
import {
  postsCreatePostLocal,
  postsDeletePostLocal,
  postsFetchPostLocal,
  postsSavePostLocal,
} from "./postsUtils"
import PostsActionsTypes from "./postTypes"

interface InitialState {
  error: null | string
  isLoading: boolean
  posts: Posts
}

const initialState: InitialState = {
  error: null,
  isLoading: false,
  posts: {},
}

const postsReducer = (state = initialState, action: PostsActions): InitialState => {
  switch (action.type) {
    case PostsActionsTypes.FETCH_POSTS_START:
    case PostsActionsTypes.FETCH_POST_START:
    case PostsActionsTypes.CREATE_POST_START:
    case PostsActionsTypes.SAVE_POST_START:
    case PostsActionsTypes.DELETE_POST_START:
      return { ...state, error: null, isLoading: true }

    case PostsActionsTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: { ...state.posts, ...action.payload.posts },
        error: null,
        isLoading: false,
      }

    case PostsActionsTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: postsFetchPostLocal({
          lastPosts: state.posts,
          fetchedPost: action.payload.post,
        }),
        error: null,
        isLoading: false,
      }
    case PostsActionsTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: postsCreatePostLocal({
          lastPosts: state.posts,
          createdPost: action.payload.post,
        }),
        error: null,
        isLoading: false,
      }
    case PostsActionsTypes.SAVE_POST_SUCCESS:
      return {
        ...state,
        posts: postsSavePostLocal({
          lastPosts: state.posts,
          savedPost: action.payload.post,
        }),
        error: null,
        isLoading: false,
      }
    case PostsActionsTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: postsDeletePostLocal({
          lastPosts: state.posts,
          deletedPostId: action.payload.postId,
        }),
        error: null,
        isLoading: false,
      }

    case PostsActionsTypes.FETCH_POSTS_FAILURE:
    case PostsActionsTypes.FETCH_POST_FAILURE:
    case PostsActionsTypes.CREATE_POST_FAILURE:
    case PostsActionsTypes.SAVE_POST_FAILURE:
    case PostsActionsTypes.DELETE_POST_FAILURE:
      return { ...state, error: action.payload.error, isLoading: false }
    default:
      return state
  }
}

export default postsReducer

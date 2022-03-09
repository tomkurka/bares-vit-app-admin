import { combineReducers } from "redux"
import authReducer from "./auth/authReducer"
import localSettingsReducer from "./localSettings/localSettingsReducer"
import postEditReducer from "./postEdit/postEditReducer"
import postsReducer from "./posts/postsReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  postEdit: postEditReducer,
  localSettings: localSettingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

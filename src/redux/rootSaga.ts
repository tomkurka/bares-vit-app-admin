import { all, call } from "redux-saga/effects"
import authSagas from "./auth/authSagas"
import postEditSagas from "./postEdit/postEditSagas"
import postsSagas from "./posts/postsSagas"

export default function* rootSaga() {
  yield all([call(authSagas), call(postsSagas), call(postEditSagas)])
}

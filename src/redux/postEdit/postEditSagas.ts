import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { CurrentUser } from "../auth/authDefinitions"
import { selectCurrentUser } from "../auth/authSelectors"
import { Post } from "../posts/postsDefinitions"
import { PostEditFetchPostStart } from "./postEditActions"
import { postEditFetchPostFailure, postEditFetchPostSuccess } from "./postEditActionsCreators"
import PostEditActionsTypes from "./postEditTypes"

function* fetchPostAsync({ payload: { postId } }: PostEditFetchPostStart) {
  try {
    const currentUser: CurrentUser = yield select(selectCurrentUser)
    const postRef = firestore.doc(`/posts/${currentUser.id}/posts/${postId}`)

    // @ts-ignore
    const snapshot = yield postRef.get()
    const post: undefined | Post = snapshot.data()

    if (post) {
      yield put(postEditFetchPostSuccess({ post }))
    } else {
      yield put(postEditFetchPostFailure({ error: `Post with given id ${postId} was not found!` }))
    }
  } catch (err: any) {
    yield put(postEditFetchPostFailure({ error: err.message }))
  }
}

function* fetchPostStart() {
  yield takeLatest(PostEditActionsTypes.POST_EDIT_FETCH_POST_START, fetchPostAsync)
}

export default function* postEditSagas() {
  yield all([call(fetchPostStart)])
}

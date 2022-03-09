import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { auth, firestore } from "../../firebase/firebaseUtils"
import {
  AuthSignInStart,
  AuthSignUpStart,
  AuthTogglePublishedPostsListStart,
  AuthTogglePublishedPostsStart,
} from "./authActions"
import {
  authSignInSuccess,
  authSignOutSuccess,
  authSignUpSuccess,
  authSingInFailure,
  authSingOutFailure,
  authSingUpFailure,
  authTogglePublishedPostsFailure,
  authTogglePublishedPostsListFailure,
  authTogglePublishedPostsListSuccess,
  authTogglePublishedPostsSuccess,
} from "./authActionsCreators"
import { CurrentUser } from "./authDefinitions"
import { selectCurrentUser } from "./authSelectors"
import AuthActionsTypes from "./authTypes"

interface CreateUserProfile {
  firstName: string
  lastName: string
  email: string
  userId: string
}

function* createUserProfile({ firstName, lastName, email, userId }: CreateUserProfile) {
  try {
    const profileRef = firestore.doc(`/users/${userId}/`)

    const userProfile: CurrentUser = {
      firstName,
      lastName,
      email,
      id: userId,
      registeredAt: new Date().getTime().toString(),
      fullName: `${firstName} ${lastName}`,
      publishedPosts: [],
    }

    yield profileRef.set({ ...userProfile })

    yield put(authSignUpSuccess({ currentUser: userProfile }))
  } catch (error: any) {
    yield put(authSingUpFailure({ error: error.message }))
  }
}

function* fetchUserProfile({ userId }: { userId: string }) {
  try {
    const profileRef = firestore.doc(`/users/${userId}/`)

    // @ts-ignore
    const snapshot = yield profileRef.get()
    const userProfile: CurrentUser = snapshot.data()

    yield put(authSignInSuccess({ currentUser: userProfile }))
  } catch (error: any) {
    yield put(authSingInFailure({ error: error.message }))
  }
}

function* signInAsync({ payload: { email, password } }: AuthSignInStart) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield fetchUserProfile({ userId: user.uid })
  } catch (error: any) {
    yield put(authSingInFailure({ error: error.message }))
  }
}

function* signUpAsync({ payload: { email, password, firstName, lastName } }: AuthSignUpStart) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield createUserProfile({ email, userId: user.uid, firstName, lastName })
  } catch (error: any) {
    yield put(authSingUpFailure({ error: error.message }))
  }
}
function* signOutAsync() {
  try {
    yield auth.signOut()

    yield put(authSignOutSuccess())
  } catch (error: any) {
    yield put(authSingOutFailure({ error: error.message }))
  }
}
function* checkUserSessionAsync() {
  try {
    yield put(authSignOutSuccess())
  } catch (error: any) {
    yield put(authSingOutFailure({ error: error.message }))
  }
}
function* togglePublishPostsAsync({ payload: { post } }: AuthTogglePublishedPostsStart) {
  try {
    // @ts-ignore
    const currentUser: CurrentUser = yield select(selectCurrentUser)
    const postRef = firestore.doc(`/publishedPosts/${post.id}/`)
    const profileRef = firestore.doc(`/users/${currentUser.id}/`)
    const postIndex = currentUser.publishedPosts.indexOf(post.id)

    console.log(post)

    if (postIndex === -1) {
      currentUser.publishedPosts.push(post.id)

      yield profileRef.set(currentUser)
      yield postRef.set(post)
    } else {
      currentUser.publishedPosts.splice(postIndex, 1)

      yield postRef.delete()
      yield profileRef.set(currentUser)
    }

    yield put(authTogglePublishedPostsSuccess({ publishedPosts: currentUser.publishedPosts }))
  } catch (error: any) {
    yield put(authTogglePublishedPostsFailure({ error: error.message }))
  }
}

function* togglePublishPostsListAsync({ payload: { postId } }: AuthTogglePublishedPostsListStart) {
  try {
    // @ts-ignore
    const currentUser: CurrentUser = yield select(selectCurrentUser)
    const profileRef = firestore.doc(`/users/${currentUser.id}/`)

    const postIndex = currentUser.publishedPosts.indexOf(postId)

    if (postIndex === -1) {
      currentUser.publishedPosts.push(postId)
      yield profileRef.set(currentUser)
    } else {
      currentUser.publishedPosts.splice(postIndex, 1)
      yield profileRef.set(currentUser)
    }

    yield put(authTogglePublishedPostsListSuccess({ publishedPosts: currentUser.publishedPosts }))
  } catch (error: any) {
    yield put(authTogglePublishedPostsListFailure({ error: error.message }))
  }
}

function* signInStart() {
  yield takeLatest(AuthActionsTypes.AUTH_SIGN_IN_START, signInAsync)
}
function* signUpStart() {
  yield takeLatest(AuthActionsTypes.AUTH_SIGN_UP_START, signUpAsync)
}
function* signOutStart() {
  yield takeLatest(AuthActionsTypes.AUTH_SIGN_OUT_START, signOutAsync)
}
function* checkUserSessionStart() {
  yield takeLatest(AuthActionsTypes.AUTH_CHECK_USER_SESSION, checkUserSessionAsync)
}
function* togglePublishPostsStart() {
  yield takeLatest(AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_START, togglePublishPostsAsync)
}
function* togglePublishPostsListStart() {
  yield takeLatest(
    AuthActionsTypes.AUTH_TOGGLE_PUBLISHED_POSTS_LIST_START,
    togglePublishPostsListAsync
  )
}

export default function* userSagas() {
  yield all([
    call(signInStart),
    call(signUpStart),
    call(signOutStart),
    call(checkUserSessionStart),
    call(togglePublishPostsStart),
    call(togglePublishPostsListStart),
  ])
}

import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import { authTogglePublishedPostsListStart } from "../auth/authActionsCreators"
import { CurrentUser } from "../auth/authDefinitions"
import { selectAuthCurrentUserPublishedPosts, selectCurrentUser } from "../auth/authSelectors"
import { postEditUpdatePostIsSave } from "../postEdit/postEditActionsCreators"
import { PostsDeletePostStart, PostsFetchPostStart, PostsSavePostStart } from "./postsActions"
import {
  postsCreatePostFailure,
  postsCreatePostSuccess,
  postsDeletePostFailure,
  postsDeletePostSuccess,
  postsFetchPostFailure,
  postsFetchPostsFailure,
  postsFetchPostsSuccess,
  postsFetchPostSuccess,
  postsSavePostFailure,
  postsSavePostSuccess,
} from "./postsActionsCreators"
import { Post, Posts } from "./postsDefinitions"
import { createPostStructure } from "./postsStructureCreators"
import PostsActionsTypes from "./postTypes"

function* fetchPostsAsync() {
  try {
    // @ts-ignore
    const currentUser: CurrentUser = yield select(selectCurrentUser)
    let posts: Posts = {}

    const postRef = firestore.collection(`/posts/${currentUser.id}/posts`)

    // @ts-ignore
    const snapshot = yield postRef.get()

    // @ts-ignore
    snapshot.forEach(post => {
      posts[post.id] = post.data()
    })

    yield put(postsFetchPostsSuccess({ posts }))
  } catch (err: any) {
    yield put(postsFetchPostsFailure({ error: err.message }))
  }
}

function* fetchPostAsync({ payload: { postId } }: PostsFetchPostStart) {
  try {
    const currentUser: CurrentUser = yield select(selectCurrentUser)
    const postRef = firestore.doc(`/posts/${currentUser.id}/posts/${postId}`)

    // @ts-ignore
    const snapshot = yield postRef.get()
    const post: undefined | Post = snapshot.data()

    if (post) {
      yield put(postsFetchPostSuccess({ post }))
    } else {
      yield put(postsFetchPostFailure({ error: `Post with given id ${postId} was not found!` }))
    }
  } catch (err: any) {
    yield put(postsFetchPostFailure({ error: err.message }))
  }
}

function* createPostAsync() {
  try {
    // @ts-ignore
    const currentUser: CurrentUser = yield select(selectCurrentUser)

    const post = createPostStructure({
      author: { id: currentUser.id, fullName: currentUser.fullName },
    })

    const postRef = firestore.doc(`/posts/${currentUser.id}/posts/${post.id}`)
    yield postRef.set(post)

    yield put(postsCreatePostSuccess({ post }))
  } catch (err: any) {
    yield put(postsCreatePostFailure({ error: err.message }))
  }
}

function* savePostAsync({ payload: { post } }: PostsSavePostStart) {
  try {
    // @ts-ignore
    const currentUser: CurrentUser = yield select(selectCurrentUser)

    const publishedPosts: string[] = yield select(selectAuthCurrentUserPublishedPosts)

    post.updatedAt = new Date().getTime()

    const postRef = firestore.doc(`/posts/${currentUser.id}/posts/${post.id}`)
    yield postRef.set(post)

    if (publishedPosts.includes(post.id)) {
      const postRef = firestore.doc(`/publishedPosts/${post.id}`)
      yield postRef.set(post)
    }

    yield put(postEditUpdatePostIsSave({ isSave: true }))
    yield put(postsSavePostSuccess({ post }))
  } catch (err: any) {
    yield put(postsSavePostFailure({ error: err.message }))
  }
}

function* deletePostAsync({ payload: { postId } }: PostsDeletePostStart) {
  try {
    // @ts-ignore
    const currentUser: CurrentUser = yield select(selectCurrentUser)

    const publishedPosts: string[] = yield select(selectAuthCurrentUserPublishedPosts)

    const postRef = firestore.doc(`/posts/${currentUser.id}/posts/${postId}`)
    yield postRef.delete()

    if (publishedPosts.includes(postId)) {
      const postRef = firestore.doc(`/publishedPosts/${postId}`)
      yield postRef.delete()

      yield put(authTogglePublishedPostsListStart({ postId }))
    }

    yield put(postsDeletePostSuccess({ postId }))
  } catch (err: any) {
    yield put(postsDeletePostFailure({ error: err.message }))
  }
}

function* fetchPostsStart() {
  yield takeLatest(PostsActionsTypes.FETCH_POSTS_START, fetchPostsAsync)
}
function* fetchPostStart() {
  yield takeLatest(PostsActionsTypes.FETCH_POST_START, fetchPostAsync)
}
function* createPostStart() {
  yield takeLatest(PostsActionsTypes.CREATE_POST_START, createPostAsync)
}
function* savePostStart() {
  yield takeLatest(PostsActionsTypes.SAVE_POST_START, savePostAsync)
}
function* deletePostStart() {
  yield takeLatest(PostsActionsTypes.DELETE_POST_START, deletePostAsync)
}

export default function* postsSagas() {
  yield all([
    call(fetchPostsStart),
    call(fetchPostStart),
    call(createPostStart),
    call(savePostStart),
    call(deletePostStart),
  ])
}

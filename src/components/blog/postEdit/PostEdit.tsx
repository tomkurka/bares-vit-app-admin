import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectCurrentUser } from "../../../redux/auth/authSelectors"
import {
  postEditFetchPostStart,
  postEditLoadPost,
} from "../../../redux/postEdit/postEditActionsCreators"
import { selectPostEdit } from "../../../redux/postEdit/postEditSelectors"
import { createPostStructure } from "../../../redux/posts/postsStructureCreators"
import PostEditContent from "../postEditContent/PostEditContent"
import PostEditData from "../postEditData/PostEditData"

import "./postEdit.scss"

type PostEditParams = {
  postId: string
}

const PostEdit = () => {
  const params = useParams<PostEditParams>()
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const post = useSelector(selectPostEdit)

  useEffect(() => {
    if (!currentUser) {
      return
    }

    if (params.postId) {
      dispatch(postEditFetchPostStart({ postId: params.postId }))
    } else {
      dispatch(
        postEditLoadPost({
          post: createPostStructure({
            author: { id: currentUser.id, fullName: currentUser.fullName },
          }),
        })
      )
    }
    // eslint-disable-next-line
  }, [])

  if (!post) return <div>Loading true</div>

  return (
    <div className="post-edit">
      <PostEditData />
      <PostEditContent />
    </div>
  )
}

export default PostEdit

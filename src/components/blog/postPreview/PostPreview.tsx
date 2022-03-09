import React from "react"
import { Post } from "../../../redux/posts/postsDefinitions"
import { useHistory } from "react-router-dom"
import { format } from "date-fns"
import { useDispatch, useSelector } from "react-redux"
import { localSettingsShowPopUpCard } from "../../../redux/localSettings/localSettingsActionsCreators"

import { authTogglePublishedPostsStart } from "../../../redux/auth/authActionsCreators"
import { selectAuthCurrentUserPublishedPosts } from "../../../redux/auth/authSelectors"

import "./postPreview.scss"

interface PostPreviewProps {
  post: Post
}

const PostPreview: React.FunctionComponent<PostPreviewProps> = ({ post }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const publishedPosts = useSelector(selectAuthCurrentUserPublishedPosts)
  return (
    <div className="post-preview">
      <div className="title">{post.title}</div>
      <div className="author-and date">
        {post.author.fullName} | {format(new Date(post.updatedAt), " HH:MM:ss LLLL dd yyyy")}
      </div>
      <div className="buttons">
        <button onClick={() => history.push(`/blog/post/${post.id}`)}>Edit</button>
        <button
          onClick={() =>
            dispatch(localSettingsShowPopUpCard({ action: { type: "deletePost", post: post } }))
          }
        >
          Delete
        </button>
        <button
          onClick={() => {
            dispatch(authTogglePublishedPostsStart({ post: post }))
          }}
        >
          {publishedPosts?.includes(post.id) ? "Unpublish" : "Publish"}
        </button>
      </div>
    </div>
  )
}

export default PostPreview

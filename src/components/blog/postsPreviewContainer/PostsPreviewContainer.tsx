import React from "react"
import { useSelector } from "react-redux"
import PostsPreview from "../postsPreview/PostsPreview"
import { selectPostsOrderByUpdateAt } from "../../../redux/posts/postsSelectors"

import "./postsPreviewContainer.scss"

const PostsPreviewContainer = () => {
  const posts = useSelector(selectPostsOrderByUpdateAt)

  return (
    <div className="posts-preview-container">
      <PostsPreview posts={posts} />
    </div>
  )
}

export default PostsPreviewContainer

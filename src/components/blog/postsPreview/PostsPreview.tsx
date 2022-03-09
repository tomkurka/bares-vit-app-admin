import React from "react"
import { Post } from "../../../redux/posts/postsDefinitions"
import PostPreview from "../postPreview/PostPreview"
import PostPreviewNew from "../postPreviewNew/PostPreviewNew"

import "./postsPreview.scss"

interface PostsPreviewProps {
  posts: Post[]
}

const PostsPreview: React.FunctionComponent<PostsPreviewProps> = ({ posts }) => {
  return (
    <div className="posts-preview">
      <PostPreviewNew />
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostsPreview

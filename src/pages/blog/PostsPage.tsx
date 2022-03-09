import React from "react"
import PostsPreviewContainer from "../../components/blog/postsPreviewContainer/PostsPreviewContainer"
import NavbarContainer from "../../components/navigation/navbarContainer/NavbarContainer"

const PostsPage = () => {
  return (
    <NavbarContainer>
      <PostsPreviewContainer />
    </NavbarContainer>
  )
}

export default PostsPage

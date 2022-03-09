import React from "react"
import PostEdit from "../../components/blog/postEdit/PostEdit"
import NavbarContainer from "../../components/navigation/navbarContainer/NavbarContainer"

import "./postEditPage.scss"

const PostEditPage = () => {
  return (
    <NavbarContainer type="postEdit">
      <div className="post-edit-page">
        <h3>Edit post</h3>
        <PostEdit />
      </div>
    </NavbarContainer>
  )
}

export default PostEditPage

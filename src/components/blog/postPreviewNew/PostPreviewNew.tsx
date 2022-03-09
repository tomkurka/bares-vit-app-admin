import React from "react"
import { useHistory } from "react-router-dom"
import { ICONAddOutline } from "../../../icons/icons"

import "./postPreviewNew.scss"

const PostPreviewNew = () => {
  const history = useHistory()
  return (
    <div className="post-preview-new" onClick={() => history.push("/blog/post/")}>
      <ICONAddOutline className="icon" />
    </div>
  )
}

export default PostPreviewNew

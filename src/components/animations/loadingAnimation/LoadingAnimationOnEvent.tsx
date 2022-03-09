import React from "react"
import { useSelector } from "react-redux"
import { selectAuthIsLoading } from "../../../redux/auth/authSelectors"
import { selectPostEditIsLoading } from "../../../redux/postEdit/postEditSelectors"
import { selectPostsIsLoading } from "../../../redux/posts/postsSelectors"
import RollerTemplateAnimation from "../templates/rollerTempleAnimation/RollerTemplateAnimation"

import "./loadingAnimation.scss"

const LoadingAnimationOnEvent = () => {
  const isAuthLoading = useSelector(selectAuthIsLoading)
  const isPostsLoading = useSelector(selectPostsIsLoading)
  const isPostEditLoading = useSelector(selectPostEditIsLoading)

  if (isAuthLoading || isPostsLoading || isPostEditLoading)
    return (
      <div className="loading-animation">
        <div className="loading-animation-container">
          <div className="loading-card">
            <RollerTemplateAnimation />
          </div>
        </div>
      </div>
    )

  return <></>
}

export default LoadingAnimationOnEvent

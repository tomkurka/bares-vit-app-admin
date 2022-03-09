import React from "react"
import RollerTemplateAnimation from "../templates/rollerTempleAnimation/RollerTemplateAnimation"
import "./loadingAnimation.scss"

const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <div className="loading-animation-container">
        <div className="loading-card">
          <RollerTemplateAnimation />
        </div>
      </div>
    </div>
  )
}

export default LoadingAnimation

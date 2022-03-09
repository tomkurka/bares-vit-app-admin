import React from "react"

import "./fullScreenCenterContainer.scss"

interface Props {
  children: React.ReactNode
  className?: string
}

const FullScreenCenterContainer: React.FC<Props> = ({ children, className }) => {
  return <div className={`full-screen-center-container ${className}`}>{children}</div>
}

export default FullScreenCenterContainer

import React, { ReactNode } from "react"
import "./customButton.scss"

interface Props {
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
  children: ReactNode
}

const CustomButton: React.FC<Props> = ({ children, onClick, style, className }) => {
  return (
    <button style={style} onClick={onClick} className={`btn btn-custom ${className}`}>
      {children}
    </button>
  )
}

export default CustomButton

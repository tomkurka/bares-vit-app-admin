import React from "react"
import Navbar from "../navbar/Navbar"

import "./navbarContainer.scss"

interface Props {
  children: React.ReactNode
  type?: NavbarType
}

export type NavbarType = "navigation" | "postEdit"

const NavbarContainer: React.FC<Props> = ({ children, type = "navigation" }) => {
  return (
    <div className={`navbar-container-component ${true ? "active" : ""}`}>
      <Navbar type={type} />
      {children}
    </div>
  )
}

export default NavbarContainer

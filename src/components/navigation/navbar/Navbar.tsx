import React from "react"
import { useSelector } from "react-redux"
import { selectLocalSettingsNavbarActive } from "../../../redux/localSettings/localSettingsSelectors"
import NavbarActiveToggle from "../navbarActiveToggle/NavbarActiveToggle"
import { NavbarType } from "../navbarContainer/NavbarContainer"
import NavbarLinksNavigation from "../navbarLinksNavigation/NavbarLinksNavigation"
import NavbarLinksPostEdit from "../navbarLinksPostEdit/NavbarLinksPostEdit"

import "./navbar.scss"

interface Props {
  type: NavbarType
}

const Navbar: React.FC<Props> = ({ type }) => {
  const navbarActive = useSelector(selectLocalSettingsNavbarActive)

  return (
    <div className={`navbar-holder ${navbarActive ? "active" : ""}`}>
      <div className={`navbar ${navbarActive ? "active" : ""}`}>
        <NavbarActiveToggle className="navbar-active-toggle" />
        <div className="navbar-container">
          {type === "navigation" && <NavbarLinksNavigation />}
          {type === "postEdit" && <NavbarLinksPostEdit />}
        </div>
      </div>
    </div>
  )
}

export default Navbar

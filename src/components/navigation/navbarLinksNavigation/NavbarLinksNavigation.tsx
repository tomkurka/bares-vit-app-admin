import React from "react"
import { useDispatch } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import {
  ICONCardBold,
  ICONCardOutline,
  ICONChartBold,
  ICONChartOutline,
  ICONLogoutOutline,
} from "../../../icons/icons"

import { authSingOutStart } from "../../../redux/auth/authActionsCreators"
import ROUTES from "../../../routes/routes"

import "./navbarLinks.scss"

const NavbarLinksNavigation = () => {
  const dispatch = useDispatch()
  const { pathname: path } = useLocation()
  const history = useHistory()

  return (
    <div className="navbar-links-container">
      <div
        className={`link-container ${path === ROUTES.DASHBOARD.INITIAL ? "active" : ""}`}
        onClick={() => history.push(ROUTES.DASHBOARD.DASHBOARD)}
      >
        {path === ROUTES.DASHBOARD.INITIAL ? (
          <ICONChartBold className="link-icon" />
        ) : (
          <ICONChartOutline className="link-icon" />
        )}
        <div className="link-text">Dashboard</div>
      </div>
      <div
        className={`link-container ${path.includes(ROUTES.BLOG.POSTS) ? "active" : ""}`}
        onClick={() => history.push(ROUTES.BLOG.INITIAL)}
      >
        {path.includes(ROUTES.BLOG.INITIAL) ? (
          <ICONCardBold className="link-icon" />
        ) : (
          <ICONCardOutline className="link-icon" />
        )}
        <div className="link-text">Posts</div>
      </div>
      <div className="link-container" onClick={() => dispatch(authSingOutStart())}>
        <ICONLogoutOutline className="link-icon" />
        <div className="link-text">Sign Out</div>
      </div>
    </div>
  )
}
export default NavbarLinksNavigation

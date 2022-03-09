import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { ICONCloseSquareOutline, ICONSaveOutline } from "../../../icons/icons"
import { localSettingsShowPopUpCard } from "../../../redux/localSettings/localSettingsActionsCreators"
import { selectPostEdit, selectPostEditIsSave } from "../../../redux/postEdit/postEditSelectors"
import { postsSavePostStart } from "../../../redux/posts/postsActionsCreators"
import ROUTES from "../../../routes/routes"

const NavbarLinksPostEdit = () => {
  const dispatch = useDispatch()
  const postEdit = useSelector(selectPostEdit)
  const postEditIsSave = useSelector(selectPostEditIsSave)
  const history = useHistory()

  return (
    <div className="navbar-links-container">
      <div
        className="link-container"
        onClick={() => {
          if (postEdit) {
            dispatch(postsSavePostStart({ post: postEdit }))
          }
        }}
      >
        <ICONSaveOutline className={`link-icon ${!postEditIsSave ? "active" : ""}`} />
        <div className="link-text">Save</div>
      </div>
      <div
        className="link-container"
        onClick={() => {
          if (postEdit)
            if (postEditIsSave) {
              history.push(ROUTES.BLOG.POSTS)
            } else {
              dispatch(
                localSettingsShowPopUpCard({
                  action: { type: "leaveEditPage", post: postEdit },
                })
              )
            }
        }}
      >
        <ICONCloseSquareOutline className="link-icon" />
        <div className="link-text">Exit</div>
      </div>
    </div>
  )
}
export default NavbarLinksPostEdit

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { localSettingsHidePopUpCard } from "../../../redux/localSettings/localSettingsActionsCreators"
import { selectLocalSettingsPopUpCard } from "../../../redux/localSettings/localSettingsSelectors"
import { postsDeletePostStart, postsSavePostStart } from "../../../redux/posts/postsActionsCreators"
import ROUTES from "../../../routes/routes"

import "./customPopUpCard.scss"

const CustomPopUpCard: React.FunctionComponent = () => {
  const card = useSelector(selectLocalSettingsPopUpCard)
  const dispatch = useDispatch()
  const history = useHistory()

  if (!card.show) {
    return <></>
  }

  if (card.action?.type === "deletePost") {
    return (
      <div className="custom-pop-up-card-background-layer">
        <div className="custom-pop-up-card">
          <h5>Delete post</h5>
          <p>
            Are you sure you want to delete this post? It will no longer be possible to recover this
            post! Make sure you delete the posts you really want!
          </p>
          <div className="buttons">
            <button onClick={() => dispatch(localSettingsHidePopUpCard())}>Cancel</button>
            <button
              className="danger"
              onClick={() => {
                if (!card.action?.post) return

                dispatch(postsDeletePostStart({ postId: card.action.post.id }))
                dispatch(localSettingsHidePopUpCard())
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (card.action?.type === "leaveEditPage") {
    return (
      <div className="custom-pop-up-card-background-layer">
        <div className="custom-pop-up-card">
          <h5>Leave Edit Page</h5>
          <p>Do you want to save your post?</p>
          <div className="buttons">
            <button
              onClick={() => {
                dispatch(localSettingsHidePopUpCard())
                history.push(ROUTES.BLOG.POSTS)
              }}
            >
              Exit
            </button>
            <button
              className="danger"
              onClick={() => {
                if (!card.action?.post) return

                dispatch(postsSavePostStart({ post: card.action.post }))
                dispatch(localSettingsHidePopUpCard())
                history.push(ROUTES.BLOG.POSTS)
              }}
            >
              Exit and Save
            </button>
          </div>
        </div>
      </div>
    )
  }

  return <>Option was not found!</>
}

export default CustomPopUpCard

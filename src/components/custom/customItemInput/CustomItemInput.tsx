import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ICONCloseOutline } from "../../../icons/icons"
import { postEditEditPostValues } from "../../../redux/postEdit/postEditActionsCreators"
import { selectPostEditTags } from "../../../redux/postEdit/postEditSelectors"

import "./customItemInput.scss"

const CustomItemInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const items = useSelector(selectPostEditTags) || []

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputRef.current && inputRef.current.value.length >= 2 && items.length < 4) {
        const value = inputRef.current.value

        dispatch(postEditEditPostValues({ update: { name: "tags", value: [...items, value] } }))

        inputRef.current.value = ""
      }
    }
  }

  const handleDelete = (index: number) => {
    const newItems = [...items]
    newItems.splice(index, 1)

    dispatch(postEditEditPostValues({ update: { name: "tags", value: [...newItems] } }))
  }

  return (
    <div className="custom-item-input">
      <p>Tags (max 4 tag) *</p>
      <div className="items">
        {items.map((item, i) => (
          <div className="item" key={i}>
            <div className="value">{item}</div>
            <ICONCloseOutline onClick={() => handleDelete(i)} className="icon" />
          </div>
        ))}
        <input ref={inputRef} type="text" onKeyDown={handleInput} placeholder="Enter item..." />
      </div>
    </div>
  )
}

export default CustomItemInput

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { postEditEditPostValues } from "../../../redux/postEdit/postEditActionsCreators"
import { selectPostEdit } from "../../../redux/postEdit/postEditSelectors"

import "./inputBlock.scss"

interface InputBlockProps {
  label: string
  name: "title" | "subtitle" | "readTime" | "previewImgLink"
  maxLength?: number
}

const InputBlock: React.FunctionComponent<InputBlockProps> = ({ label, name, maxLength }) => {
  const dispatch = useDispatch()
  const postEdit = useSelector(selectPostEdit)

  return (
    <div className="input-block">
      <p>{label}</p>
      <input
        onChange={e => {
          console.log("ahoj")
          console.log(e.target.value)
          if (name === "readTime") {
            dispatch(postEditEditPostValues({ update: { name, value: parseInt(e.target.value) } }))
          } else {
            dispatch(postEditEditPostValues({ update: { name, value: e.target.value } }))
          }
        }}
        type={name === "readTime" ? "number" : "string"}
        value={postEdit?.[name] || ""}
        maxLength={maxLength || 1000000}
      />
    </div>
  )
}

export default InputBlock

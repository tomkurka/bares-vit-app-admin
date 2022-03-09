import React from "react"
import CustomItemInput from "../../custom/customItemInput/CustomItemInput"
import InputBlock from "../inputBlock/InputBlock"

import "./postEditData.scss"

const PostEditData = () => {
  return (
    <div className="post-edit-data">
      <InputBlock name="title" label="Title (max 80 characters) *" maxLength={80} />
      <InputBlock name="subtitle" label="Subtitle (max 300 characters) *" maxLength={300} />
      <InputBlock name="readTime" label="Read time (minutes) *" />
      <InputBlock
        name="previewImgLink"
        label="Img link (ideal size 800px x 500px) *"
        maxLength={500}
      />
      <CustomItemInput />
    </div>
  )
}

export default PostEditData

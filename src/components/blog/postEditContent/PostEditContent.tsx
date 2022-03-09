import React, { useState } from "react"

import { EditorState, convertToRaw } from "draft-js"
import { useDispatch, useSelector } from "react-redux"
import { postEditEditPostContent } from "../../../redux/postEdit/postEditActionsCreators"
import { selectPostEditContent } from "../../../redux/postEdit/postEditSelectors"
import { Editor } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import { stateFromHTML } from "draft-js-import-html"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

import "./postEditContent.scss"

const PostEditContent = () => {
  const dispatch = useDispatch()
  let content = useSelector(selectPostEditContent) || ""

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createWithContent(stateFromHTML(content))
  )

  const handleUploadImage = () => {}

  return (
    <div className="post-edit-content">
      <Editor
        editorState={editorState}
        wrapperClassName="card"
        editorClassName="card-body"
        stripPastedStyles={true}
        onEditorStateChange={newState => {
          setEditorState(newState)
          const convertContent = draftToHtml(convertToRaw(newState.getCurrentContent()))

          dispatch(
            postEditEditPostContent({
              content: convertContent,
            })
          )
        }}
        toolbar={{
          options: ["inline", "blockType", "list", "history", "embedded", "image", "link"],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: { uploadCallback: handleUploadImage, alt: { present: true, mandatory: true } },
        }}
      />
    </div>
  )
}

export default PostEditContent

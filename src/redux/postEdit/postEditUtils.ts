import { Post } from "../posts/postsDefinitions"
import { PostEditEditPostValuesUpdate } from "./postEditActions"

interface PostEditEditDataLocal {
  prevPost: Post | null
  update: PostEditEditPostValuesUpdate
}
export const postEditEditDataLocal = ({ prevPost, update }: PostEditEditDataLocal): Post => {
  const postWithoutReference: Post = JSON.parse(JSON.stringify(prevPost))

  // @ts-ignore
  postWithoutReference[update.name] = update.value

  return postWithoutReference
}
interface postEditEditDataContent {
  prevPost: Post | null
  content: string
}
export const postEditEditContentLocal = ({ prevPost, content }: postEditEditDataContent): Post => {
  const postWithoutReference: Post = JSON.parse(JSON.stringify(prevPost))
  postWithoutReference.content = content
  return postWithoutReference
}

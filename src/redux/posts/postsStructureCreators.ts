import { Author, Post } from "./postsDefinitions"
import { v4 as uuid } from "uuid"

interface CreatePostStructure {
  author: Author
}

export const createPostStructure = ({ author }: CreatePostStructure): Post => {
  const date = new Date().getTime()

  return {
    id: uuid(),
    tags: [],
    title: "Post title",
    readTime: 0,
    createdAt: date,
    updatedAt: date,
    previewImgLink: null,
    author,
    subtitle: "",
    content: "",
  }
}

export type Post = {
  id: string
  tags: string[]
  title: string
  subtitle: string
  readTime: number
  createdAt: number
  updatedAt: number
  previewImgLink: string | null
  author: Author
  content: string
}

export type Posts = {
  [key: string]: Post
}

export type Author = {
  id: string
  fullName: string
}

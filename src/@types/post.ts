import { RichTextBlock } from 'prismic-reactjs'

export interface Post {
  slug: string
  title: string
  description?: RichTextBlock[]
  publish_date: string
  content: RichTextBlock[]
}

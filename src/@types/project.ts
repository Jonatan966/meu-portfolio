import { RichTextBlock, Link } from 'prismic-reactjs'

import { Tech } from './tech'

export interface Project {
  id: string
  name: string
  description: RichTextBlock[]
  hosted_url?: Link
  repository_url: Link
  main_image: Link
  techs: Tech[]
}

import { Link } from 'prismic-reactjs'

import { Image } from './image'

export interface Tech {
  id: string
  name: string
  icon: Image
  about_url: Link
}

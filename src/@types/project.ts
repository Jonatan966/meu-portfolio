import { Tech } from './tech'

export interface Project {
  id: string
  name: string
  description: string
  hosted_url?: string
  repository_url: string
  main_image_url: string
  techs: Tech[]
}

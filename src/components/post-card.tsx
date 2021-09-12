import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

import { Post } from '../@types/post'

import { PostCardContainer } from '../styles/components/post-card'

import { dayjs } from '../services/dayjs'

interface PostCardProps {
  post: Omit<Post, 'content'>
}

export function PostCard({
  post: { slug, description, title, publish_date },
}: PostCardProps): JSX.Element {
  return (
    <Link href={`/posts/${slug}`}>
      <PostCardContainer>
        <h5>{dayjs(publish_date).locale('pt-br').format('LL')}</h5>
        <h4>{title}</h4>
        {RichText.render(description)}
      </PostCardContainer>
    </Link>
  )
}

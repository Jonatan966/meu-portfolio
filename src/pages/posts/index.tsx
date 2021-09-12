import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'

import { AppHead } from '../../components/app-head'
import { PostCard } from '../../components/post-card'

import { prismic } from '../../services/prismic'
import { parsePrismicList } from '../../utils/parse-prismic-list'

import { Post } from '../../@types/post'

import {
  DefaultSection,
  SectionHeader,
} from '../../styles/components/default-section'
import { FlexList } from '../../styles/components/flex-list'

interface PostsPageProps {
  posts: Post[]
}

export default function PostsPage({ posts }: PostsPageProps): JSX.Element {
  return (
    <>
      <AppHead title="Blog" />

      <main>
        <DefaultSection>
          <SectionHeader>
            <h3>Minhas publicações</h3>
          </SectionHeader>

          <FlexList direction="column" gap={1.75}>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </FlexList>
        </DefaultSection>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (
    await prismic.query(Prismic.Predicates.at('document.type', 'post'), {
      fetch: [
        'post.title',
        'post.slug',
        'post.publish_date',
        'post.description',
      ],
    })
  ).results

  const parsedPosts = parsePrismicList(
    posts.map((post) => ({ post })),
    false
  )

  return {
    props: {
      posts: parsedPosts,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  }
}

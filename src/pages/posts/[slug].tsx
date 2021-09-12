import { GetStaticProps, GetStaticPaths } from 'next'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-reactjs'

import { ArrowLeft } from '../../components/arrow-left'
import { AppHead } from '../../components/app-head'

import { prismic } from '../../services/prismic'
import { dayjs } from '../../services/dayjs'
import { parsePrismicList } from '../../utils/parse-prismic-list'

import { PostArticle } from '../../styles/components/post-article'
import { Post } from '../../@types/post'

interface PostPageProps {
  post: Post
}

export default function PostPage({ post }: PostPageProps): JSX.Element {
  return (
    <>
      <AppHead title={`Blog: ${post.title}`} />
      <main>
        <PostArticle as="article">
          <header>
            <a href="/posts">
              <ArrowLeft width="2.5rem" height="2.5rem" />
            </a>
            <h2>{post.title}</h2>
            <h6>{dayjs(post.publish_date).locale('pt-br').format('LL')}</h6>
          </header>

          {RichText.render(post.content)}
        </PostArticle>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const postResult = (
    await prismic.query(
      Prismic.Predicates.at('my.post.slug', context.params.slug)
    )
  ).results[0]

  const post = postResult?.data

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = (
    await prismic.query(Prismic.Predicates.at('document.type', 'post'), {
      fetch: 'post.slug',
    })
  ).results

  const parsedPosts = parsePrismicList(
    posts.map((post) => ({ post })),
    false
  ).map((post) => ({
    params: post,
  }))

  return {
    paths: parsedPosts,
    fallback: 'blocking',
  }
}

// Next.js types
import { GetStaticProps } from 'next'

import Header from '../components/Header'
import MarkdownArticle from '../lib/markdownToJsx'
import NavBar from '../components/NavBar'
import { getAllPosts } from '../lib/api'
import { MarkdownPost } from '../types/MarkdownMeta'

type IndexProps = {
  posts: MarkdownPost[]
}

const Index = (props: IndexProps) => {
  const latestPost = props.posts[0]
  const otherPosts = props.posts.slice(1)

  return (
    <>
      <Header language="python"></Header>
      <p>{latestPost.title}</p>
      <p>{latestPost.date}</p>
      <p>{latestPost.authorName}</p>
      <MarkdownArticle markdown={latestPost.content} />

      {otherPosts.map((post, index) => (
        <article key={index}>
          <p>{post.title}</p>
          <p>{post.date}</p>
          <p>{post.authorName}</p>
        </article>
      ))}
      <NavBar />
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async (/* context */) => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'authorName',
    'authorPicture',
    'coverImage',
    'excerpt',
    'content',
  ])

  return {
    props: { posts },
  }
}

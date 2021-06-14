// Next.js types
import type { GetStaticProps } from 'next'
// App types
import type { MarkdownPost } from '../types/MarkdownMeta'

// Backend functions
import { getAllPosts } from '../lib/api'

// Frontend Components
import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import FullPost from '../components/FullPost'

type IndexProps = {
  posts: MarkdownPost[]
}

const Index: React.FC<IndexProps> = ({ posts }) => {
  const latestPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <>
      <Head>
        <title>if (interested)</title>
      </Head>
      <Header language="python"></Header>

      <FullPost post={latestPost} darkMode={false} />

      {otherPosts.map((otherPost, index) => (
        <FullPost key={index} post={otherPost} darkMode={false} />
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
    'authorImage',
    'coverImage',
    'excerpt',
    'content',
  ])

  return {
    props: { posts },
  }
}

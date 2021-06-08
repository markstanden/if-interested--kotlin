// Next.js types
import { GetStaticProps } from 'next'
// App types
import { MarkdownPost } from '../types/MarkdownMeta'

// Backend functions
import { getAllPosts } from '../lib/api'

// Frontend Components
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Preview from '../components/Preview'

type IndexProps = {
  posts: MarkdownPost[]
}

const Index = (props: IndexProps) => {
  const latestPost = props.posts[0]
  const otherPosts = props.posts.slice(1)

  return (
    <>
      <Header language="python"></Header>

      <Preview post={latestPost} darkMode={true} />

      {otherPosts.map((post, index) => (
        <Preview post={post} darkMode={false} />
      ))}
      <NavBar />
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async (/* context */) => {
  const posts = getAllPosts(['title', 'date', 'slug', 'authorName', 'authorImage', 'coverImage', 'excerpt', 'content'])

  return {
    props: { posts },
  }
}

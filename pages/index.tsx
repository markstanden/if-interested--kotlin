import Header from '../components/Header'
import Hero from '../components/Hero'
import MarkdownArticle from '../lib/markdownToJsx'
import NavBar from '../components/NavBar'
import { getAllPosts, getPostBySlug } from '../lib/api'

import ReactMarkdown from 'react-markdown'
const Index = props => {
  const latestPost = props.posts[0]
  const otherPosts = props.posts.slice(1)

  return (
    <>
      <Header language="python"></Header>
      <p>{latestPost.title}</p>
      <p>{latestPost.date}</p>
      <p>{latestPost.author.name}</p>
      <MarkdownArticle markdown={latestPost.content} />

      {otherPosts.map((post, index) => (
        <article key={index}>
          <p>{post.title}</p>
          <p>{post.date}</p>
          <p>{post.author.name}</p>
        </article>
      ))}
      <NavBar />
    </>
  )
}

export default Index

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'content'])

  return {
    props: { posts },
  }
}

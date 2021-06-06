import Header from '../components/Header'
import Hero from '../components/Hero'
import MarkdownArticle from '../lib/markdownToJsx'
import NavBar from '../components/NavBar'
import { getAllPosts } from '../lib/api'

import ReactMarkdown from 'react-markdown'
const Index = props => {
  const latestPost = props.posts[0]
  const otherPosts = props.posts.slice(1)

  return (
    <>
      <Header language="python">
        <section>
          <MarkdownArticle markdown={latestPost} />
        </section>
        <ReactMarkdown>{latestPost}</ReactMarkdown>
      </Header>

      <NavBar />
    </>
  )
}

export default Index

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { posts },
  }
}

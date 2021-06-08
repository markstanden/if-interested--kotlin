import MarkdownArticle from '../lib/markdownToJsx'
import { MarkdownPost } from '../types/MarkdownMeta'
import Container from './Container'
import AuthorImage from './AuthorImage'
import PostTitle from './PostTitle'

type PreviewProps = {
  post: MarkdownPost
  darkMode: boolean
}

const Preview = ({ post, darkMode }: PreviewProps) => {
  return (
    <Container>
      <div className="preview">
        <PostTitle>{post.title}</PostTitle>
        <AuthorImage authorName={post.authorName} authorImagePath={post.authorImage} postDate={post.date} />
        <MarkdownArticle darkMode={darkMode} markdown={post.content} />
      </div>
      <style jsx>
        {`
          .preview {
          }
        `}
      </style>
    </Container>
  )
}

export default Preview

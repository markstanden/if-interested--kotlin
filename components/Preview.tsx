import MarkdownArticle from '../lib/markdownToJsx'
import { MarkdownPost } from '../types/MarkdownMeta'
import Container from './Container'

type PreviewProps = {
  post: MarkdownPost
}

const Preview = ({ post }: PreviewProps) => {
  return (
    <Container>
      <div className="preview">
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <p>{post.authorName}</p>
        <MarkdownArticle markdown={post.content} />
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

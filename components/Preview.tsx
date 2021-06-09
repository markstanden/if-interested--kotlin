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
        <div className="author">
          <AuthorImage authorName={post.authorName.trim()} authorImagePath={post.authorImage} postDate={post.date} />
        </div>
        <PostTitle>{post.title.trim()}</PostTitle>

        <MarkdownArticle darkMode={darkMode} markdown={post.content} />
      </div>
      <style jsx>
        {`
          .preview {
            display: flex;
            flex-direction: column;
          }
          .author {
            align-self: flex-end;
            width: fit-content;
            padding: var(--padding-base);
            border-bottom-left-radius: 2rem;
            border-bottom: var(--border-size) solid var(--color-primary);
            border-left: var(--border-size) solid var(--color-primary);
          }
        `}
      </style>
    </Container>
  )
}

export default Preview

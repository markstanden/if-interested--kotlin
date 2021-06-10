import MarkdownArticle from '../lib/markdownToJsx'
import { MarkdownPost } from '../types/MarkdownMeta'
import Container from './Container'
import Author from './Author'
import PostTitle from './PostTitle'

type FullPostProps = {
  post: MarkdownPost
  darkMode: boolean
}

const FullPost: React.FC<FullPostProps> = ({ darkMode, post }) => {
  return (
    <>
      <Container>
        <div className="preview">
          <div className="author">
            <Author authorName={post.authorName.trim()} authorImagePath={post.authorImage} postDate={post.date} />
          </div>
          <PostTitle>{post.title.trim()}</PostTitle>

          <MarkdownArticle darkMode={darkMode} markdown={post.content} />
        </div>
      </Container>
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
            padding-left: 1rem;
            border-bottom-left-radius: 2rem;
            border-bottom: var(--border-size) solid var(--color-primary);
            border-left: var(--border-size) solid var(--color-primary);
          }
        `}
      </style>
    </>
  )
}

export default FullPost

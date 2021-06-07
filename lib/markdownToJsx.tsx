import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

type MarkdownArticleProps = {
  markdown: string
}

const MarkdownArticle = ({ markdown }: MarkdownArticleProps) => (
  <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
)

export default MarkdownArticle
